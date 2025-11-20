
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#how-it-works' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Services', href: '#services' },
];

// Mapping of Section IDs to Header Themes
// Dark sections -> Dark Header (White text, White Button, Black Btn Text)
// Light sections -> Light Header (Black text, Black Button, White Btn Text)
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

export const Header: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerTheme, setHeaderTheme] = useState<'dark' | 'light'>('dark');
  
  // Smooth out the progress value
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const progressPercent = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  // Intersection Observer for Theme Switching
  useEffect(() => {
    const observerOptions = {
        root: null,
        rootMargin: '-10% 0px -80% 0px', // Trigger when section is near top
        threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                const theme = themeMap[id];
                if (theme) {
                    setHeaderTheme(theme);
                }
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all sections in themeMap
    Object.keys(themeMap).forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);


  // Dynamic Styles based on Theme
  const textColor = headerTheme === 'dark' ? 'text-white' : 'text-black';
  const buttonBg = headerTheme === 'dark' ? 'bg-white' : 'bg-black';
  const buttonText = headerTheme === 'dark' ? 'text-black' : 'text-white';
  
  // Mobile Island BG - Dynamic based on theme for better visibility
  const mobileBg = headerTheme === 'dark' 
    ? 'bg-white/10 backdrop-blur-xl border-white/10' 
    : 'bg-white/70 backdrop-blur-xl border-black/10';

  // Mobile Overlay Theme Logic
  const overlayTextColor = headerTheme === 'dark' ? 'text-white' : 'text-black';
  const overlayBtnBg = headerTheme === 'dark' ? 'bg-white' : 'bg-black';
  const overlayBtnText = headerTheme === 'dark' ? 'text-black' : 'text-white';

  return (
    <>
      {/* MOBILE HEADER - Floating Island Style */}
      <motion.header
         initial={{ y: -100, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
         className={`md:hidden fixed top-6 left-4 right-4 z-50 flex items-center justify-between rounded-3xl p-1.5 pl-6 shadow-2xl border transition-colors duration-500 ${mobileBg}`}
      >
          <div className="flex items-center gap-4">
              <span className={`text-xl font-semibold tracking-tight transition-colors duration-500 ${textColor}`}>
                DigitiNexus
              </span>
              {/* Custom Thin Hamburger - Clickable */}
              <button 
                onClick={() => setIsMenuOpen(true)}
                className="flex flex-col gap-[5px] w-6 cursor-pointer p-1"
                aria-label="Open Menu"
              >
                  <span className={`w-full h-[1px] transition-colors duration-500 ${headerTheme === 'dark' ? 'bg-white' : 'bg-black'}`}></span>
                  <span className={`w-full h-[1px] transition-colors duration-500 ${headerTheme === 'dark' ? 'bg-white' : 'bg-black'}`}></span>
                  <span className={`w-full h-[1px] transition-colors duration-500 ${headerTheme === 'dark' ? 'bg-white' : 'bg-black'}`}></span>
              </button>
          </div>

          <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ18t82AxggzpAnyxiF2fZEKpnWRb20HaTP4IDRhZ1EppW1Khfccy1O483Tm8xHqxq1ZPM18TToJ" target="_blank" rel="noopener noreferrer" className={`${buttonBg} ${buttonText} rounded-3xl pl-4 pr-1 py-1 flex items-center gap-3 font-medium text-sm transition-colors duration-500`}>
              <span className="pl-1">Book a Call</span>
              <img 
                  src="/logoDN.webp" 
                  alt="DigitiNexus" 
                  className="w-9 h-9 rounded-3xl object-cover"
              />
          </a>
      </motion.header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col justify-center items-center md:hidden"
          >
            {/* Backdrop Blur Background - Minimal Tint to let content show through */}
            <div 
                className={`absolute inset-0 backdrop-blur-3xl transition-colors duration-500 ${headerTheme === 'dark' ? 'bg-black/40' : 'bg-white/40'}`}
                onClick={() => setIsMenuOpen(false)}
            ></div>

            {/* Close Button */}
            <button 
                onClick={() => setIsMenuOpen(false)}
                className={`absolute top-8 right-8 z-20 p-2 transition-colors duration-500 ${overlayTextColor}`}
            >
                <X size={32} />
            </button>

            {/* Menu Items */}
            <nav className="relative z-10 flex flex-col items-center gap-8">
                {navItems.map((item, idx) => (
                    <motion.a
                        key={item.label}
                        href={item.href}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        onClick={() => setIsMenuOpen(false)}
                        className={`text-4xl font-light tracking-tight hover:opacity-60 transition-all duration-300 ${overlayTextColor}`}
                    >
                        {item.label}
                    </motion.a>
                ))}
                
                <motion.a
                    href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ18t82AxggzpAnyxiF2fZEKpnWRb20HaTP4IDRhZ1EppW1Khfccy1O483Tm8xHqxq1ZPM18TToJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className={`mt-8 px-8 py-4 rounded-3xl text-xl font-medium transition-colors duration-500 ${overlayBtnBg} ${overlayBtnText}`}
                >
                    Book a Call
                </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DESKTOP HEADER - Floating Island Style */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        className={`hidden md:flex fixed top-6 left-[12.5%] right-[12.5%] z-50 px-8 py-2.5 justify-between items-center rounded-3xl shadow-2xl border transition-colors duration-500 ${mobileBg}`}
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <div>
          <a href="#" className={`text-2xl font-medium tracking-tight hover:opacity-70 transition-opacity ${textColor}`}>
            DigitiNexus
          </a>
        </div>

        <nav className="mx-8">
          <ul className={`flex space-x-6 text-base font-medium transition-colors duration-500 ${headerTheme === 'dark' ? 'text-white/90' : 'text-black/100'}`}>
            {navItems.map((item) => (
              <li key={item.label} className="relative group">
                <a 
                  href={item.href} 
                  className={`transition-colors ${headerTheme === 'dark' ? 'hover:text-white' : 'hover:text-black'}`}
                >
                  {item.label}
                </a>
                <span className={`absolute -right-3 top-0 text-[10px] mt-[2px] ${headerTheme === 'dark' ? 'text-white/20' : 'text-black/20'}`}>|</span>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          {/* Minimal Scroll Ruler Indicator */}
          <div className="flex items-center gap-2">
              <span className={`text-[10px] font-mono transition-colors duration-500 ${headerTheme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>00</span>
              <div className={`relative w-[80px] h-[2px] rounded-full overflow-visible flex items-center transition-colors duration-500 ${headerTheme === 'dark' ? 'bg-white/10' : 'bg-black/10'}`}>
                  {/* Track ticks */}
                  <div className="absolute inset-0 flex justify-between items-center px-[1px]">
                      {[...Array(11)].map((_, i) => (
                          <div 
                              key={i} 
                              className={`w-[1px] h-[4px] transition-colors duration-500 ${i % 5 === 0 ? (headerTheme === 'dark' ? 'h-[6px] bg-white/30' : 'h-[6px] bg-black/30') : (headerTheme === 'dark' ? 'bg-white/10' : 'bg-black/10')}`}
                          />
                      ))}
                  </div>
                  
                  {/* Active Progress Bar */}
                  <motion.div 
                      style={{ width: progressPercent }}
                      className={`absolute left-0 top-0 bottom-0 rounded-full z-10 shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-colors duration-500 ${headerTheme === 'dark' ? 'bg-white' : 'bg-black'}`}
                  />
                  
                  {/* Active Thumb/Glow */}
                  <motion.div
                      style={{ left: progressPercent }}
                      className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)] z-20 -ml-1 transition-colors duration-500 ${headerTheme === 'dark' ? 'bg-white' : 'bg-black'}`}
                  />
              </div>
              <span className={`text-[10px] font-mono transition-colors duration-500 ${headerTheme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>01</span>
          </div>

          <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ18t82AxggzpAnyxiF2fZEKpnWRb20HaTP4IDRhZ1EppW1Khfccy1O483Tm8xHqxq1ZPM18TToJ" target="_blank" rel="noopener noreferrer" className={`${buttonBg} ${buttonText} rounded-2xl pl-1 pr-1 py-1.5 flex items-center gap-3 font-medium text-base hover:opacity-90 transition-all duration-500 shadow-sm`}>
              <span className="pl-3">Book a Call</span>
              <img 
                  src="/logoDN.webp" 
                  alt="DigitiNexus" 
                  className="w-8 h-8 rounded-3xl object-cover"
              />
          </a>
        </div>
      </motion.header>
    </>
  );
};
