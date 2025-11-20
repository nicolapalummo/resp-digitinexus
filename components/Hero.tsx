
import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full bg-black text-white md:h-screen md:overflow-hidden flex flex-col">
      
      {/* Desktop Background Image (Absolute) - Hidden on Mobile */}
      <div className="hidden md:block absolute inset-0 z-0">
        <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="/Logo DN Mongolfiera.webp"
            alt="DigitiNexus Mongolfiera"
            className="w-full h-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/90 pointer-events-none" />
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col md:justify-start items-center text-center pt-40 md:pt-60 pb-12 md:pb-0">
        
        {/* Top Badge */}
        <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-8 inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 shadow-lg"
        >
            <span className="text-xs font-medium tracking-wide text-white/90">Over 75 Successful Projects</span>
            <div className="w-px h-3 bg-white/20 mx-1"></div>
            <div className="flex text-orange-400 gap-0.5">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} fill="currentColor" />
                ))}
            </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="max-w-5xl mx-auto"
        >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] font-medium tracking-tight leading-[0.95] mb-6 md:mb-8 drop-shadow-2xl text-white">
                Stand Out with <br className="hidden md:block" />
                <span className="text-white block md:inline mt-2 md:mt-0">
                    DigitiNexus
                </span>
            </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed font-light drop-shadow-md"
        >
            Build trust, stand out, and grow your business with a beautifully functional website and brand made for your industry.
        </motion.p>

        {/* CTA Buttons - Side by Side on Mobile */}
        <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-row w-full md:w-auto items-center gap-4 md:gap-6 mb-12 md:mb-0"
        >
            <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ18t82AxggzpAnyxiF2fZEKpnWRb20HaTP4IDRhZ1EppW1Khfccy1O483Tm8xHqxq1ZPM18TToJ" target="_blank" rel="noopener noreferrer" className="flex-1 md:flex-none bg-white text-black hover:bg-gray-100 transition-all duration-300 rounded-2xl px-6 py-4 font-semibold text-base md:text-lg flex justify-center items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:scale-105 active:scale-95">
                Book a Call
            </a>
            
            <a href="#work" className="flex-1 md:flex-none text-white border border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 rounded-2xl px-6 py-4 font-medium text-base md:text-lg flex justify-center items-center gap-2 hover:border-white/60">
                View Work 
                <ArrowDown size={18} />
            </a>
        </motion.div>

        {/* Mobile Image - Visible only on Mobile, rounded corners */}
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="md:hidden w-full aspect-[4/5] rounded-[32px] overflow-hidden relative shadow-2xl mb-12"
        >
             <img 
                src="/Logo DN Ombrelli 4.webp"
                alt="DigitiNexus Ombrelli"
                className="w-full h-full object-cover"
            />
        </motion.div>

      </div>
    </section>
  );
};
