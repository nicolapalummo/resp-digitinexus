
import React from 'react';
import { motion } from 'framer-motion';

export const LetsTalk: React.FC = () => {
  return (
    <section id="lets-talk" className="bg-[#E8ECF2] text-black py-32 md:py-48 px-6 flex flex-col items-center justify-center text-center min-h-[80vh] relative rounded-t-[2rem]">
        <motion.div 
            className="flex-1 flex flex-col items-center justify-center w-full"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-16 max-w-6xl leading-[0.95] text-[#1a1a1a]">
                Let’s talk about a <br className="hidden md:block" /> project together
            </h2>
            
            <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ18t82AxggzpAnyxiF2fZEKpnWRb20HaTP4IDRhZ1EppW1Khfccy1O483Tm8xHqxq1ZPM18TToJ" target="_blank" rel="noopener noreferrer" className="bg-black text-white rounded-2xl pl-6 pr-2 py-2 flex items-center gap-4 font-medium text-xl transition-transform hover:scale-105 duration-300 shadow-xl hover:shadow-2xl">
                  <span className="pl-2">Book a Call</span>
                  <img 
                      src="/logoDN.webp" 
                      alt="DigitiNexus" 
                      className="w-12 h-12 rounded-2xl object-cover"
                  />
            </a>
        </motion.div>
         
         <div className="absolute bottom-8 text-xs md:text-sm text-gray-400 font-medium tracking-wide flex flex-col md:flex-row items-center gap-2 md:gap-0">
             <span>&copy; {new Date().getFullYear()} DigitiNexus Web Agency</span>
             <span className="hidden md:inline mx-2">|</span>
             <span className="md:mx-2 flex flex-col md:flex-row items-center gap-2 md:gap-0">
                 <a 
                     href="/Terms & Conditions DigitiNexus LLC.pdf" 
                     download
                     className="hover:text-gray-600 transition-colors cursor-pointer"
                 >
                     Terms & Conditions
                 </a>
                 <span className="hidden md:inline mx-2">|</span>
                 <a 
                     href="/Privacy Policy DigitiNexus LLC.pdf" 
                     download
                     className="hover:text-gray-600 transition-colors cursor-pointer"
                 >
                     Privacy
                 </a>
             </span>
         </div>
    </section>
  );
};
