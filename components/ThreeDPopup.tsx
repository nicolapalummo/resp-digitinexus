import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// Mapping of Section IDs to Header Themes (same as Header component)
const themeMap: Record<string, 'dark' | 'light'> = {
  'hero': 'dark',
  'problems': 'dark',
  'intro': 'dark',
  'work': 'dark',
  'how-it-works': 'light',
  'reviews': 'light',
  'why-me': 'light',
  'services': 'dark',
  'faq': 'dark',
  'lets-talk': 'light'
};

export const ThreeDPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [popupTheme, setPopupTheme] = useState<'dark' | 'light'>('dark');

  // Show popup after a delay (only on desktop)
  useEffect(() => {
    const isDesktop = window.innerWidth >= 768; // md breakpoint
    if (!isDesktop) return;

    const timer = setTimeout(() => {
      const dismissed = localStorage.getItem('3d-popup-dismissed');
      if (!dismissed) {
        setIsVisible(true);
      }
    }, 2000); // Show after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for Theme Switching (same logic as Header)
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -80% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const theme = themeMap[id];
          if (theme) {
            setPopupTheme(theme);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    Object.keys(themeMap).forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('3d-popup-dismissed', 'true');
  };

  // Dynamic Styles based on Theme (same as Header)
  const textColor = popupTheme === 'dark' ? 'text-white' : 'text-black';
  const bgColor = popupTheme === 'dark' 
    ? 'bg-white/10 backdrop-blur-xl border-white/10' 
    : 'bg-white/70 backdrop-blur-xl border-black/10';
  const buttonBg = popupTheme === 'dark' ? 'bg-white' : 'bg-black';
  const buttonText = popupTheme === 'dark' ? 'text-black' : 'text-white';

  return (
    <AnimatePresence>
      {isVisible && !isDismissed && (
        <motion.div
          initial={{ y: 100, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 100, opacity: 0, scale: 0.9 }}
          transition={{ 
            duration: 0.5, 
            ease: [0.19, 1, 0.22, 1] 
          }}
          className={`hidden md:block fixed bottom-6 right-6 z-40 max-w-sm ${bgColor} rounded-3xl shadow-2xl border p-6 transition-colors duration-500`}
        >
          {/* Close Button */}
          <button
            onClick={handleDismiss}
            className={`absolute top-4 right-4 p-1.5 hover:opacity-60 transition-opacity ${textColor}`}
            aria-label="Close popup"
          >
            <X size={18} />
          </button>

          {/* Content */}
          <div className="pr-6">
            <h3 className={`text-lg font-semibold mb-2 tracking-tight transition-colors duration-500 ${textColor}`}>
              Looking for Something More Immersive?
            </h3>
            <p className={`text-sm mb-4 leading-relaxed transition-colors duration-500 ${popupTheme === 'dark' ? 'text-white/80' : 'text-black/80'}`}>
              Explore our 3D interactive version of the website.
            </p>
            <a
              href="https://immersive.digitinexus.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 ${buttonBg} ${buttonText} rounded-2xl px-4 py-2 text-sm font-medium hover:opacity-90 transition-all duration-500 shadow-sm`}
            >
              Try the 3D Experience
              <span>→</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

