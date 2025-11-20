
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="bg-black text-white py-20 md:py-24 px-6 md:px-12">
      <div className="container mx-auto">
        {/* Tag - Aligned to Intro */}
        <div className="inline-flex items-center gap-2 border border-white/20 rounded-lg px-3 py-1 text-xs uppercase tracking-wider text-orange-400 font-mono bg-white/5 mb-5 md:ml-[120px]">
            <span className="opacity-50">6</span>
            <span>Services</span>
        </div>
        
        {/* Header */}
        <motion.div 
            className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 gap-10 md:ml-[120px]"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="flex flex-col items-start">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-none">
                What I’ll help you with
                </h2>
            </div>
            <div className="max-w-md text-lg text-gray-400 pb-2">
                Let's convert better, raise more, build more trust so you can hire better talent and charge premium prices
            </div>
        </motion.div>

        {/* Services Cards Grid - 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 1: One Time Project */}
            <motion.div 
                className="bg-[#111] rounded-2xl p-8 md:p-10 border border-white/10 hover:border-white/20 transition-colors flex flex-col"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="flex justify-between items-start mb-6">
                    <h3 className="text-3xl md:text-4xl font-medium tracking-tight">Custom one time project</h3>
                    <span className="inline-block px-3 py-1 bg-orange-900/30 text-orange-400 text-xs font-mono rounded border border-orange-500/30 whitespace-nowrap">
                        Starts at $2k
                    </span>
                </div>
                
                <p className="text-gray-400 mb-10 text-lg">
                    I work with you from where you need it. Perfect for new website launches or rebrands.
                </p>
                
                <div className="space-y-4 mb-12 flex-1">
                    {[
                        "Custom UX & UI design",
                        "Full website development",
                        "Copywriting & content structure",
                        "Mobile-first, modern, scalable build",
                        "Integrations (CRM, automations, analytics, advanced forms)",
                        "Clear and frequent updates"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded bg-orange-900/30 text-orange-400 flex items-center justify-center border border-orange-500/30 flex-shrink-0">
                                <Check size={12} />
                            </div>
                            <span className="text-gray-300">{item}</span>
                        </div>
                    ))}
                </div>

                <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ18t82AxggzpAnyxiF2fZEKpnWRb20HaTP4IDRhZ1EppW1Khfccy1O483Tm8xHqxq1ZPM18TToJ" target="_blank" rel="noopener noreferrer" className="w-full bg-[#222] text-white border border-white/10 rounded-2xl py-3 flex items-center justify-center gap-3 font-medium hover:bg-[#333] transition-colors">
                    <span className="pl-2">Book a Call</span>
                </a>
            </motion.div>

            {/* Card 2: Webflow Development */}
            <motion.div 
                className="bg-[#111] rounded-2xl p-8 md:p-10 border border-white/10 hover:border-white/20 transition-colors flex flex-col"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="flex justify-between items-start mb-6">
                    <h3 className="text-3xl md:text-4xl font-medium tracking-tight">Branding & Identity Design</h3>
                     <span className="inline-block px-3 py-1 bg-orange-900/30 text-orange-400 text-xs font-mono rounded border border-orange-500/30 whitespace-nowrap">
                        Starts at $1k
                    </span>
                </div>
                
                <p className="text-gray-400 mb-10 text-lg">
                Your brand, elevated. Ideal for businesses needing a cohesive, premium identity.
                </p>
                
                <div className="space-y-4 mb-12 flex-1">
                    {[
                        "Logo design + variations",
                        "Color palette & typography system",
                        "Brand assets (icons, patterns, mockups)",
                        "Brand guidelines (delivered as PDF)",
                        "Social brand kit (optional)",
                        "Structured process with clear revision rounds"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded bg-orange-900/30 text-orange-400 flex items-center justify-center border border-orange-500/30 flex-shrink-0">
                                <Check size={12} />
                            </div>
                            <span className="text-gray-300">{item}</span>
                        </div>
                    ))}
                </div>

                <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ18t82AxggzpAnyxiF2fZEKpnWRb20HaTP4IDRhZ1EppW1Khfccy1O483Tm8xHqxq1ZPM18TToJ" target="_blank" rel="noopener noreferrer" className="w-full bg-[#222] text-white border border-white/10 rounded-2xl py-3 flex items-center justify-center gap-3 font-medium hover:bg-[#333] transition-colors">
                    <span className="pl-2">Book a Call</span>
                </a>
            </motion.div>

        </div>
      </div>
    </section>
  );
};
