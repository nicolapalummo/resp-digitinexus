import React from 'react';
import { motion } from 'framer-motion';
import { X, ArrowRight, Pencil } from 'lucide-react';

export const Problem: React.FC = () => {
  return (
    <section id="problems" className="bg-black text-white py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 gap-x-16">
            
            {/* 1. Header Content (Mobile: Top, Desktop: Right Top) */}
            <motion.div 
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
                className="order-1 lg:col-start-2 lg:row-start-1 md:ml-[120px]"
            >
                <div className="inline-flex items-center gap-2 border border-white/20 rounded-lg px-3 py-1 text-xs uppercase tracking-wider mb-8 text-red-400 font-mono bg-white/5">
                    <span className="opacity-50">1</span>
                    <span>Problems</span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-4 leading-tight">
                    You have traction but your website still looks MVP
                </h2>
                <p className="text-lg text-gray-400">
                    There's a gap between how your product looks and how you present it
                </p>
            </motion.div>

            {/* 2. Visual Mockup (Mobile: Middle, Desktop: Left Full Height) */}
            <div className="order-2 lg:col-start-1 lg:row-start-1 lg:row-span-2 relative flex items-center justify-center">
                {/* Glow effect */}
                <div className="absolute w-64 h-64 bg-red-900/20 rounded-full blur-[100px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                
                {/* Abstract UI Mockup */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9, y: 60 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-full max-w-xl aspect-[3/4]"
                >
                     {/* Wireframe Container (Clipped) */}
                     <div className="absolute inset-0 border border-white/10 rounded-[2rem] bg-black/40 backdrop-blur-xl p-6 flex flex-col gap-6 shadow-2xl overflow-hidden">
                         {/* Top Gradient Line */}
                         <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>

                         {/* Wireframe Header */}
                         <div className="flex justify-between items-center mb-2 opacity-50">
                            <div className="w-8 h-8 rounded-full bg-white/10 border border-white/5"></div>
                            <div className="flex gap-2">
                                 <div className="w-8 h-1 rounded-full bg-white/20"></div>
                                 <div className="w-8 h-1 rounded-full bg-white/20"></div>
                                 <div className="w-8 h-1 rounded-full bg-white/20"></div>
                            </div>
                            <div className="w-12 h-4 rounded-full bg-white/10"></div>
                         </div>

                         {/* Wireframe Hero Area */}
                         <div className="w-full flex-1 rounded-xl border border-white/5 bg-white/5 relative overflow-hidden">
                            {/* Inner Wireframe Elements */}
                            <div className="absolute inset-0 p-8 flex flex-col items-center gap-6 opacity-40">
                                 <div className="w-full h-12 border border-white/10 rounded bg-white/5"></div>
                                 <div className="space-y-2 w-3/4">
                                     <div className="w-full h-2 bg-white/10 rounded-full"></div>
                                     <div className="w-2/3 h-2 bg-white/10 rounded-full mx-auto"></div>
                                 </div>
                                 <div className="w-24 h-8 rounded bg-white/10 mt-2"></div>
                            </div>
                         </div>

                         {/* Wireframe Content Area (Split) */}
                         <div className="grid grid-cols-2 gap-4 h-1/3">
                            <div className="rounded-xl border border-white/5 bg-white/5"></div>
                            <div className="rounded-xl border border-white/5 bg-white/5 flex flex-col gap-3 p-4 opacity-40">
                                 <div className="w-full h-3 bg-white/10 rounded-full"></div>
                                 <div className="w-full h-2 bg-white/10 rounded-full"></div>
                                 <div className="w-2/3 h-2 bg-white/10 rounded-full"></div>
                                 <div className="w-1/2 h-6 bg-white/10 rounded mt-auto"></div>
                            </div>
                         </div>
                     </div>
                     
                     {/* Floating Icons (Outside Clipped Area) */}
                     
                     {/* 1. Arrow Right (Top Right) */}
                     <motion.div 
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -right-6 top-[15%] w-20 h-20 bg-black/80 backdrop-blur-xl border border-red-500/40 rounded-[1.5rem] flex items-center justify-center shadow-[0_0_40px_-10px_rgba(220,38,38,0.5)] z-20"
                     >
                        <div className="relative flex items-center justify-center w-full h-full">
                            <ArrowRight className="text-white drop-shadow-[0_0_8px_rgba(220,38,38,1)]" size={32} strokeWidth={1.5} />
                            <div className="absolute inset-0 bg-red-500 blur-[20px] opacity-10 rounded-[1.5rem]"></div>
                        </div>
                     </motion.div>

                     {/* 2. X (Center Left) */}
                     <motion.div 
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute -left-6 top-[45%] w-20 h-20 bg-black/80 backdrop-blur-xl border border-red-500/40 rounded-[1.5rem] flex items-center justify-center shadow-[0_0_40px_-10px_rgba(220,38,38,0.5)] z-20"
                     >
                        <div className="relative flex items-center justify-center w-full h-full">
                             <X className="text-white drop-shadow-[0_0_8px_rgba(220,38,38,1)]" size={32} strokeWidth={1.5} />
                             <div className="absolute inset-0 bg-red-500 blur-[20px] opacity-10 rounded-[1.5rem]"></div>
                        </div>
                     </motion.div>

                     {/* 3. Pencil (Bottom Right) */}
                     <motion.div 
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        className="absolute -right-4 bottom-[15%] w-20 h-20 bg-black/80 backdrop-blur-xl border border-red-500/40 rounded-[1.5rem] flex items-center justify-center shadow-[0_0_40px_-10px_rgba(220,38,38,0.5)] z-20"
                     >
                        <div className="relative flex items-center justify-center w-full h-full">
                             <Pencil className="text-white drop-shadow-[0_0_8px_rgba(220,38,38,1)]" size={28} strokeWidth={1.5} />
                             <div className="absolute inset-0 bg-red-500 blur-[20px] opacity-10 rounded-[1.5rem]"></div>
                        </div>
                     </motion.div>

                </motion.div>
            </div>

            {/* 3. Bullet Points (Mobile: Bottom, Desktop: Right Bottom) */}
            <div className="order-3 lg:col-start-2 lg:row-start-2 space-y-10 md:ml-[120px]">
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="flex gap-6 group"
                    >
                        <div className="flex-shrink-0 mt-1 w-8 h-8 rounded flex items-center justify-center border border-red-900/50 text-red-500 bg-red-950/20">
                            <X size={16} />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">People don't understand what you do</h3>
                            <p className="text-gray-400 leading-relaxed">
                                If your website and marketing aren't crystal clear, potential customers won't get what you do or why it matters.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="flex gap-6 group"
                    >
                         <div className="flex-shrink-0 mt-1 w-8 h-8 rounded flex items-center justify-center border border-red-900/50 text-red-500 bg-red-950/20">
                            <X size={16} />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">You look amateur and like you're still testing</h3>
                            <p className="text-gray-400 leading-relaxed">
                                First impressions matter. A DIY or unpolished design makes users bounce 127% faster, even if your product is solid.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="flex gap-6 group"
                    >
                         <div className="flex-shrink-0 mt-1 w-8 h-8 rounded flex items-center justify-center border border-red-900/50 text-red-500 bg-red-950/20">
                            <X size={16} />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Your site isn't built to convert</h3>
                            <p className="text-gray-400 leading-relaxed">
                                You've got a good product and decent traction. Now it's time for your page structure and messaging to work as hard as you do.
                            </p>
                        </div>
                    </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
};