
import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Intro } from './components/Intro';
import { RecentWork } from './components/RecentWork';
import { HowItWorks } from './components/HowItWorks';
import { Reviews } from './components/Reviews';
import { WhyMe } from './components/WhyMe';
import { Services } from './components/Services';
import { FAQ } from './components/FAQ';
import { LetsTalk } from './components/LetsTalk';
import { CustomCursor } from './components/CustomCursor';
import { ThreeDPopup } from './components/ThreeDPopup';

function App() {
  // Add smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="bg-black min-h-screen selection:bg-orange-500 selection:text-white font-sans antialiased">
      <CustomCursor />
      <Header />
      <ThreeDPopup />
      
      <main>
        <Hero />
        <Problem />
        <Intro />
        <RecentWork />
        <HowItWorks />
        <Reviews />
        <WhyMe />
        <Services />
        <FAQ />
        <LetsTalk />
      </main>
    </div>
  );
}

export default App;
