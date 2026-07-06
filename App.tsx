
import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Intro } from './components/Intro';
import { RecentWork } from './components/RecentWork';
import { HowItWorks } from './components/HowItWorks';
import { Reviews } from './components/Reviews';
import { ChiSiamo } from './components/ChiSiamo';
import { WhyMe } from './components/WhyMe';
import { Services } from './components/Services';
import { FAQ } from './components/FAQ';
import { LetsTalk } from './components/LetsTalk';
import { CustomCursor } from './components/CustomCursor';
import { ThreeDPopup } from './components/ThreeDPopup';
import { FreemiumResources } from './components/FreemiumResources';
import { ExploreGuides } from './components/ExploreGuides';
import { NotFound } from './components/NotFound';
import { Confirmation } from './components/Confirmation';
import { Footer } from './components/Footer';
import { AboutPage } from './components/AboutPage';
import { ServicePage } from './components/ServicePage';
import { LocaleManager } from './components/LocaleManager';
// Blog routes are lazy-loaded so the 120 article data modules ship in a separate
// chunk (only downloaded on /blog routes), keeping the homepage bundle light.
const BlogIndex = lazy(() => import('./components/blog/BlogIndex').then((m) => ({ default: m.BlogIndex })));
const BlogArticle = lazy(() => import('./components/blog/BlogArticle').then((m) => ({ default: m.BlogArticle })));
const BlogCategory = lazy(() => import('./components/blog/BlogCategory').then((m) => ({ default: m.BlogCategory })));

// After a route change to "/#section" (e.g. clicking Services from the blog),
// scroll to the target once it has mounted. Retries across a few frames because
// the landing sections render after the route swap.
function ScrollToHash() {
  const location = useLocation();
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
      return;
    }
    const id = location.hash.slice(1);
    let tries = 0;
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else if (tries++ < 30) {
        requestAnimationFrame(tryScroll);
      }
    };
    requestAnimationFrame(tryScroll);
  }, [location.pathname, location.hash]);
  return null;
}

function LandingPage() {
  return (
    <main>
      <Hero />
      <Problem />
      <Intro />
      <RecentWork />
      <HowItWorks />
      <Reviews />
      <ChiSiamo />
      <WhyMe />
      <Services />
      <FAQ />
      <ExploreGuides />
      <LetsTalk />
    </main>
  );
}

function App() {
  // Add smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-black min-h-screen selection:bg-orange-500 selection:text-white font-sans antialiased">
        <CustomCursor />
        <LocaleManager />
        <ScrollToHash />
        <Header />
        <ThreeDPopup />

        <Suspense fallback={<div className="min-h-screen bg-black" />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/en" element={<LandingPage />} />
          <Route path="/risorse-gratuite" element={<FreemiumResources />} />
          <Route path="/en/risorse-gratuite" element={<FreemiumResources />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/en/confirmation" element={<Confirmation />} />
          <Route path="/chi-siamo" element={<AboutPage />} />
          <Route path="/en/chi-siamo" element={<AboutPage />} />
          <Route path="/servizi/:slug" element={<ServicePage />} />
          <Route path="/en/servizi/:slug" element={<ServicePage />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/categoria/:cluster" element={<BlogCategory />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
          {/* English blog */}
          <Route path="/en/blog" element={<BlogIndex />} />
          <Route path="/en/blog/category/:cluster" element={<BlogCategory />} />
          <Route path="/en/blog/:slug" element={<BlogArticle />} />
          {/* Fallback: URL sconosciute → vera pagina 404 (noindex), non più redirect silenzioso */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
