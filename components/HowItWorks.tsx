
import React from 'react';
import { motion } from 'framer-motion';
import { Video, Mic, MessageSquare, Hand, Settings, Rocket } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-[#F3F4F6] text-black py-20 md:py-24 px-6 md:px-12 relative overflow-hidden font-sans rounded-t-[2rem]">
      <div className="container mx-auto relative z-10">
        {/* Tag - Aligned to Intro */}
        <div className="inline-flex items-center gap-2 border border-orange-200 rounded-lg px-3 py-1 text-xs uppercase tracking-wider text-orange-700 bg-orange-50 font-mono mb-5 md:ml-[120px]">
            <span className="opacity-50">4</span>
            <span>Our Process</span>
        </div>
        
        {/* Header Section - Grid Layout for Tablet/Desktop to prevent overlap */}
        <motion.div 
            className="grid grid-cols-1 md:grid-cols-12 gap-y-6 gap-x-4 mb-20 items-start md:ml-[120px]"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
            {/* Title & Subtitle - Spans remaining width, left aligned */}
            <div className="md:col-span-12 flex flex-col items-start text-left">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-4 leading-tight text-black tracking-tight whitespace-nowrap">
                    How we work together
                </h2>
                <p className="text-lg text-gray-500">
                    Seamless kick-off, seamless collaboration
                </p>
            </div>
        </motion.div>


        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Step 1 */}
            <motion.div 
                className="flex flex-col group"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="relative mb-8">
                    <div className="absolute -top-6 left-10 md:left-1/2 md:transform md:-translate-x-1/2 bg-orange-100 text-orange-800 text-lg font-medium px-3 py-1 rounded-b-lg z-20 shadow-sm font-mono">01</div>
                    
                    <div className="bg-white rounded-2xl p-2 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-white aspect-[4/3] relative overflow-hidden group-hover:shadow-[0_30px_60px_-15px_rgba(251,146,60,0.15)] transition-shadow duration-500">
                         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-50 via-white to-gray-100"></div>
                         
                         {/* Mockup Content: Video Call */}
                         <div className="absolute inset-0 flex items-center justify-center scale-75 md:scale-90 lg:scale-100 origin-center transition-transform duration-500">
                            {/* Main Circle */}
                            <div className="w-32 h-32 rounded-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] flex items-center justify-center relative z-10 border border-gray-50">
                                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-orange-300">
                                    <Video size={24} fill="currentColor" />
                                </div>
                                {/* Ripples */}
                                <div className="absolute inset-0 rounded-full border border-gray-100 scale-125"></div>
                                <div className="absolute inset-0 rounded-full border border-gray-50 scale-150"></div>
                            </div>

                            {/* Avatar US (DigitiNexus) */}
                            <motion.div 
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-8 left-8 bg-white p-2 rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.08)] flex flex-col items-center gap-1 z-20 w-20 border border-gray-50"
                            >
                                <img src="/logoDN.webp" className="w-10 h-10 object-contain p-1 bg-gray-50 rounded-xl" alt="DigitiNexus" />
                                <span className="text-[10px] font-medium text-gray-500 uppercase tracking-wide mt-1">US</span>
                            </motion.div>

                            {/* Avatar You */}
                            <motion.div 
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-12 right-8 bg-white p-2 rounded-xl shadow-[0_8px_16px_rgba(0,0,0,0.08)] flex flex-col items-center gap-1 z-20 w-20 border border-gray-50"
                            >
                                <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-400">
                                    <div className="w-4 h-4 rounded-full border-2 border-current"></div>
                                </div>
                                <span className="text-[10px] font-medium text-gray-500 uppercase tracking-wide mt-1">You</span>
                            </motion.div>

                            {/* Bottom Bar */}
                            <div className="absolute bottom-6 bg-white/90 backdrop-blur px-4 py-2 rounded-2xl shadow-sm border border-gray-100 flex gap-4 text-gray-300 z-20">
                                <Mic size={14} />
                                <Video size={14} className="text-orange-500" />
                                <MessageSquare size={14} />
                                <Hand size={14} />
                                <Settings size={14} />
                            </div>
                         </div>
                    </div>
                </div>

                <h3 className="text-2xl font-semibold mb-3 text-gray-900">Book a quick call</h3>
                <p className="text-gray-500 leading-relaxed text-base mb-4 pr-4">
                    We start with a quick call to understand your goals, audience, and priorities. No commitments + you'll know what to do next.
                </p>
                <span className="inline-block px-3 py-1 bg-orange-500/5 text-orange-700 text-xs font-mono rounded border border-orange-500/20 w-fit">~30 min</span>
            </motion.div>

             {/* Step 2 */}
            <motion.div 
                className="flex flex-col group"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="relative mb-8">
                     <div className="absolute -top-6 left-10 md:left-1/2 md:transform md:-translate-x-1/2 bg-orange-100 text-orange-800 text-lg font-medium px-3 py-1 rounded-b-lg z-20 shadow-sm font-mono">02</div>
                    
                    <div className="bg-white rounded-2xl p-2 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-white aspect-square md:aspect-[4/3] relative overflow-hidden group-hover:shadow-[0_30px_60px_-15px_rgba(251,146,60,0.15)] transition-shadow duration-500">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-50 via-white to-gray-100"></div>
                         
                        {/* Mockup Content: 3 Cards Fan */}
                        <div className="absolute inset-0 flex items-end justify-center p-6 overflow-hidden mb-4 scale-[0.95] sm:scale-90 md:scale-90 lg:scale-95 origin-bottom transition-transform duration-500">
                             
                             {/* Left Card (Wireframe) */}
                             <motion.div 
                                className="absolute bottom-4 w-44 h-60 bg-white rounded-xl border border-gray-200 shadow-sm p-4 opacity-80 origin-bottom-right"
                                initial={{ x: 0, rotate: -10 }}
                                whileInView={{ x: -50, rotate: -12 }}
                                whileHover={{ x: -70, rotate: -15 }}
                                transition={{ type: "spring", stiffness: 200 }}
                             >
                                 <div className="w-full h-3 bg-gray-100 rounded-full mb-4"></div>
                                 <div className="space-y-3">
                                    <div className="w-full h-10 bg-gray-50 rounded border border-dashed border-gray-200"></div>
                                    <div className="flex gap-2">
                                        <div className="w-1/2 h-20 bg-gray-50 rounded border border-dashed border-gray-200"></div>
                                        <div className="w-1/2 h-20 bg-gray-50 rounded border border-dashed border-gray-200"></div>
                                    </div>
                                 </div>
                                 <div className="absolute bottom-3 left-4 text-[9px] text-gray-400 font-mono">Wireframe</div>
                             </motion.div>

                             {/* Right Card (Code) */}
                             <motion.div 
                                className="absolute bottom-4 w-44 h-60 bg-white rounded-xl border border-gray-200 shadow-sm p-4 opacity-80 origin-bottom-left"
                                initial={{ x: 0, rotate: 10 }}
                                whileInView={{ x: 50, rotate: 12 }}
                                whileHover={{ x: 70, rotate: 15 }}
                                transition={{ type: "spring", stiffness: 200 }}
                             >
                                 <div className="space-y-2 font-mono text-[7px] text-gray-400 leading-tight">
                                    <div className="flex gap-1"><span className="text-orange-400">const</span><span>App = () =&gt; {"{"}</span></div>
                                    <div className="pl-2">return (</div>
                                    <div className="pl-4 text-green-600">{"<Header />"}</div>
                                    <div className="pl-4 text-green-600">{"<Hero />"}</div>
                                    <div className="pl-4 text-green-600">{"<Footer />"}</div>
                                    <div className="pl-2">)</div>
                                    <div>{"}"}</div>
                                 </div>
                                 <div className="absolute bottom-3 right-4 text-[9px] text-gray-400 font-mono">Code</div>
                             </motion.div>

                             {/* Front Card (UI Design) */}
                             <motion.div 
                                className="relative w-52 h-72 bg-white rounded-xl border border-gray-200 shadow-lg p-5 z-10 origin-bottom"
                                whileHover={{ y: -5, scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                             >
                                 <div className="flex justify-between items-center mb-5">
                                    <div className="flex items-center gap-1.5 bg-orange-50 px-2.5 py-1 rounded-2xl">
                                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse"></div>
                                        <span className="text-[9px] text-orange-700 font-medium uppercase tracking-wide">UI Design</span>
                                    </div>
                                 </div>
                                 
                                 <div className="w-full h-28 bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg mb-4 relative overflow-hidden">
                                     <div className="absolute top-3 left-3 w-8 h-8 bg-white/60 rounded-full backdrop-blur-sm"></div>
                                 </div>

                                 <div className="space-y-3">
                                     <div className="w-3/4 h-2.5 bg-gray-100 rounded-full"></div>
                                     <div className="w-1/2 h-2.5 bg-gray-100 rounded-full"></div>
                                 </div>
                             </motion.div>
                        </div>
                    </div>
                </div>

                <h3 className="text-2xl font-semibold mb-3 text-gray-900">Design & Development</h3>
                <p className="text-gray-500 leading-relaxed text-base mb-4 pr-4">
                    We explore ideas, create moodboards, and align on visual identity and tone. We build your website with constant updates.

                </p>
                <span className="inline-block px-3 py-1 bg-orange-500/5 text-orange-700 text-xs font-mono rounded border border-orange-500/20 w-fit">2-6 weeks</span>
            </motion.div>

             {/* Step 3 */}
             <motion.div 
                className="flex flex-col group"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="relative mb-8">
                     <div className="absolute -top-6 left-10 md:left-1/2 md:transform md:-translate-x-1/2 bg-orange-100 text-orange-800 text-lg font-medium px-3 py-1 rounded-b-lg z-20 shadow-sm font-mono">03</div>
                    
                    <div className="bg-white rounded-2xl p-2 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-white aspect-[4/3] relative overflow-hidden group-hover:shadow-[0_30px_60px_-15px_rgba(251,146,60,0.15)] transition-shadow duration-500">
                         <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"></div>
                         
                         {/* Mockup Content: Launch */}
                         <div className="absolute inset-0 flex items-center justify-center scale-90 md:scale-100 transition-transform duration-500">
                            <div className="w-[90%] sm:w-[85%] bg-white/60 backdrop-blur-md rounded-2xl p-2 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-white relative">
                                {/* Inner Track */}
                                <div className="bg-gray-50/80 rounded-2xl h-12 md:h-14 flex items-center px-4 relative overflow-hidden shadow-inner">
                                    {/* Ticks */}
                                    <div className="absolute inset-0 flex justify-between items-center px-6 opacity-10">
                                        {[...Array(25)].map((_, i) => (
                                            <div key={i} className="w-[1px] h-4 bg-black"></div>
                                        ))}
                                    </div>
                                    
                                    {/* Progress Glow */}
                                    <div className="absolute left-0 top-0 bottom-0 w-[70%] bg-gradient-to-r from-transparent via-orange-400/5 to-orange-400/10"></div>

                                    {/* Rocket */}
                                    <motion.div 
                                        className="ml-auto mr-8 relative z-10 text-orange-500"
                                        animate={{ x: [0, 3, 0], y: [0, -2, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        <Rocket size={22} className="transform rotate-45" fill="currentColor" fillOpacity={0.2} strokeWidth={2} />
                                    </motion.div>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>

                <h3 className="text-2xl font-semibold mb-3 text-gray-900">Launch, build trust, convert more</h3>
                <p className="text-gray-500 leading-relaxed text-base mb-4 pr-4">
                    We go live and monitor your site’s performance, offering post-launch support and optimization. 

                </p>
                <span className="inline-block px-3 py-1 bg-orange-500/5 text-orange-700 text-xs font-mono rounded border border-orange-500/20 w-fit">On-going support available</span>
            </motion.div>

        </div>
      </div>
    </section>
  );
};
