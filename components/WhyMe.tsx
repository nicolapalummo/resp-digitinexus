
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Award, Smartphone, Layout, Code2, Layers, Palette, Box, Fingerprint, Lightbulb } from 'lucide-react';

export const WhyMe: React.FC = () => {
  const features = [
    {
      title: "A Curated Network of Experts",
      desc: "Every project is built around the right people. From motion and 3D designers to developers and brand strategists, we assemble a custom team that fits your goals, industry, and creative vision.",
      icon: <Layers size={24} />,
      visual: (
        <div className="w-full h-full flex items-center justify-center relative group cursor-pointer bg-gray-50/50 overflow-hidden">
             {/* Background Grid */}
             <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>

             {/* Central Sun (DN Logo) */}
             <motion.div 
                className="relative z-20 w-14 h-14 bg-white rounded-full shadow-[0_0_30px_rgba(251,146,60,0.3)] flex items-center justify-center border border-orange-100"
                whileHover={{ scale: 1.1, boxShadow: "0 0 40px rgba(251,146,60,0.5)" }}
                transition={{ type: "spring", stiffness: 300 }}
             >
                <img src="/logoDN.webp" className="w-8 h-8 object-contain" alt="DN" />
             </motion.div>

             {/* Orbit 1 (Inner) - Design & 3D */}
             <motion.div 
                className="absolute w-32 h-32 rounded-full border border-orange-200/30 z-10"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             >
                {/* Planet 1: Design */}
                <motion.div 
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 bg-white rounded-full shadow-sm border border-orange-100 flex items-center justify-center"
                    style={{ rotate: -360 }} // Counter-rotate to keep icon upright
                >
                    <Palette size={12} className="text-purple-500" />
                </motion.div>
                 {/* Planet 2: 3D */}
                 <motion.div 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-7 h-7 bg-white rounded-full shadow-sm border border-orange-100 flex items-center justify-center"
                    style={{ rotate: -360 }}
                >
                    <Box size={12} className="text-pink-500" />
                </motion.div>
             </motion.div>

             {/* Orbit 2 (Outer) - Coding, Strategy, Branding */}
             <motion.div 
                className="absolute w-56 h-56 rounded-full border border-orange-200/20 z-0"
                animate={{ rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
             >
                {/* Planet 3: Coding (3 o'clock) */}
                <motion.div 
                    className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md border border-orange-100 flex items-center justify-center"
                    style={{ rotate: 360 }} 
                >
                     <Code2 size={14} className="text-blue-500" />
                </motion.div>

                 {/* Planet 4: Strategy (9 o'clock) */}
                 <motion.div 
                    className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md border border-orange-100 flex items-center justify-center"
                    style={{ rotate: 360 }}
                >
                    <Lightbulb size={14} className="text-yellow-500" />
                </motion.div>

                {/* Planet 5: Branding (6 o'clock) */}
                <motion.div 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md border border-orange-100 flex items-center justify-center"
                    style={{ rotate: 360 }}
                >
                    <Fingerprint size={14} className="text-orange-500" />
                </motion.div>
             </motion.div>
             
             {/* Hover Effect: Pause/Slowdown */}
             <div className="absolute inset-0 z-30" />
        </div>
      )
    },
    {
      title: "Animation Pro",
      desc: "We use advanced motion design to turn static pages into immersive experiences that elevate your brand’s presence.",
      icon: <Zap size={24} />,
      visual: (
        <div className="w-full h-full bg-gray-50 flex items-center justify-center relative overflow-hidden group perspective-1000">
             {/* Background Grid */}
             <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
             
             {/* 3D Cube Container */}
             <motion.div 
                className="relative w-24 h-24"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                whileHover={{ scale: 1.2 }}
             >
                {/* Cube Faces */}
                {[
                    { rotateY: 0, translateZ: 48, color: "bg-orange-500/10 border-orange-500/30" }, // Front
                    { rotateY: 180, translateZ: 48, color: "bg-orange-500/10 border-orange-500/30" }, // Back
                    { rotateY: 90, translateZ: 48, color: "bg-orange-400/10 border-orange-400/30" }, // Right
                    { rotateY: -90, translateZ: 48, color: "bg-orange-400/10 border-orange-400/30" }, // Left
                    { rotateX: 90, translateZ: 48, color: "bg-orange-300/10 border-orange-300/30" }, // Top
                    { rotateX: -90, translateZ: 48, color: "bg-orange-300/10 border-orange-300/30" }, // Bottom
                ].map((face, i) => (
                    <div 
                        key={i}
                        className={`absolute inset-0 border ${face.color} backdrop-blur-[1px] flex items-center justify-center`}
                        style={{ 
                            transform: `rotateX(${face.rotateX || 0}deg) rotateY(${face.rotateY || 0}deg) translateZ(${face.translateZ}px)`,
                            backfaceVisibility: 'visible'
                        }}
                    >
                        <div className="w-2 h-2 bg-orange-500 rounded-full opacity-50"></div>
                    </div>
                ))}
                
                {/* Inner Core */}
                <div className="absolute inset-0 m-auto w-12 h-12 bg-orange-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
             </motion.div>
        </div>
      )
    },
    {
      title: "Conversion-Driven Design",
      desc: "We design with purpose, combining visual excellence and strategic thinking to build websites that attract, engage, and convert.",
      icon: <Code2 size={24} />,
      visual: (
        <div className="w-full h-full bg-gray-50 flex items-center justify-center p-6 relative overflow-hidden group">
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, #000 25%, #000 26%, transparent 27%, transparent 74%, #000 75%, #000 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #000 25%, #000 26%, transparent 27%, transparent 74%, #000 75%, #000 76%, transparent 77%, transparent)', backgroundSize: '30px 30px' }}></div>
            
            {/* Interactive Bar Chart */}
            <div className="relative flex items-end gap-3 h-32 w-full max-w-[200px]">
                {[35, 55, 45, 70, 60, 90].map((height, i) => (
                    <motion.div 
                        key={i}
                        className="w-full bg-orange-200 rounded-t-md relative group/bar"
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                        whileHover={{ height: `${height + 10}%`, backgroundColor: "#fb923c" }} // Grow and color change on hover
                    >
                        {/* Tooltip on individual bar hover */}
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                            {height}%
                        </div>
                    </motion.div>
                ))}

                {/* Floating Growth Badge */}
                <motion.div 
                    className="absolute top-0 right-0 bg-white border border-orange-100 shadow-lg rounded-lg px-3 py-1.5 flex items-center gap-2 z-20"
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: -10, opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-bold text-gray-700">+127%</span>
                </motion.div>
            </div>
        </div>
      )
    },
    {
      title: "Tailored to Your Industry",
      desc: "Whether you run a restaurant, a professional practice, or a creative studio, we adapt our process to your tone, audience, and business needs.",
      icon: <Award size={24} />,
      visual: (
        <div className="w-full h-full bg-gray-50 flex items-center justify-center relative overflow-hidden group">
             <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

             {/* Cards Container */}
             <div className="relative w-32 h-40">
                {/* Card 1: Restaurant (Left/Back) */}
                <motion.div 
                    className="absolute inset-0 bg-white rounded-xl border border-orange-100 shadow-sm flex flex-col items-center justify-center p-2"
                    style={{ transformOrigin: "bottom center", rotate: -10, x: -20, zIndex: 1 }}
                    whileHover={{ rotate: -15, x: -40, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <div className="w-8 h-8 bg-orange-50 rounded-full flex items-center justify-center mb-2 text-orange-500">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>
                    </div>
                    <div className="w-12 h-1 bg-gray-100 rounded-full mb-1"></div>
                    <div className="w-8 h-1 bg-gray-100 rounded-full"></div>
                </motion.div>

                {/* Card 2: Professional (Right/Back) */}
                <motion.div 
                    className="absolute inset-0 bg-white rounded-xl border border-orange-100 shadow-sm flex flex-col items-center justify-center p-2"
                    style={{ transformOrigin: "bottom center", rotate: 10, x: 20, zIndex: 2 }}
                    whileHover={{ rotate: 15, x: 40, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                     <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center mb-2 text-blue-500">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                    </div>
                    <div className="w-12 h-1 bg-gray-100 rounded-full mb-1"></div>
                    <div className="w-8 h-1 bg-gray-100 rounded-full"></div>
                </motion.div>

                {/* Card 3: Creative (Center/Front) */}
                <motion.div 
                    className="absolute inset-0 bg-white rounded-xl border border-orange-200 shadow-md flex flex-col items-center justify-center p-2"
                    style={{ zIndex: 3 }}
                    whileHover={{ y: -10, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                     <div className="w-8 h-8 bg-purple-50 rounded-full flex items-center justify-center mb-2 text-purple-500">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>
                    </div>
                    <div className="w-12 h-1.5 bg-gray-200 rounded-full mb-1"></div>
                    <div className="w-8 h-1.5 bg-gray-200 rounded-full"></div>
                    
                    {/* Badge */}
                    <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full shadow-sm">
                        New
                    </div>
                </motion.div>
             </div>
        </div>
      )
    },
    {
      title: "Mobile-First by Design",
      desc: "We design from mobile upward, optimizing layouts, speed, and interactions for the devices people use most. This ensures a seamless, fast, and high-converting experience across all screens.",
      icon: <Smartphone size={24} />,
      visual: (
         <div className="w-full h-full bg-gray-50 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '12px 12px' }}></div>
            
            {/* Mobile Mockup */}
            <motion.div 
                className="relative w-24 h-44 bg-white rounded-[1.5rem] border-[4px] border-gray-500 shadow-xl overflow-hidden z-10"
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-3 bg-gray-500 rounded-b-lg z-20"></div>
                
                {/* Screen Content (Scrolling) */}
                <div className="absolute inset-0 bg-gray-50 overflow-hidden pt-4">
                    <motion.div
                        className="w-full px-2"
                        animate={{ y: ["0%", "-50%"] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    >
                        {/* Content Block 1 */}
                        <div className="flex flex-col gap-2 pb-2">
                            <div className="w-full h-16 bg-orange-100 rounded-lg mb-1"></div>
                            <div className="flex gap-1">
                                <div className="w-1/2 h-12 bg-gray-200 rounded-lg"></div>
                                <div className="w-1/2 h-12 bg-gray-200 rounded-lg"></div>
                            </div>
                            <div className="w-full h-24 bg-gray-200 rounded-lg"></div>
                            <div className="w-full h-8 bg-orange-500 rounded-lg"></div>
                        </div>

                        {/* Content Block 2 (Duplicate for Loop) */}
                        <div className="flex flex-col gap-2 pb-2">
                            <div className="w-full h-16 bg-orange-100 rounded-lg mb-1"></div>
                            <div className="flex gap-1">
                                <div className="w-1/2 h-12 bg-gray-200 rounded-lg"></div>
                                <div className="w-1/2 h-12 bg-gray-200 rounded-lg"></div>
                            </div>
                            <div className="w-full h-24 bg-gray-200 rounded-lg"></div>
                            <div className="w-full h-8 bg-orange-500 rounded-lg"></div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Background devices (Tablet/Desktop hints) */}
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-32 h-56 bg-white border-4 border-gray-200 rounded-xl opacity-50 -rotate-6 z-0"></div>
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-40 h-32 bg-white border-4 border-gray-200 rounded-xl opacity-30 rotate-6 z-0"></div>
         </div>
      )
    },
    {
      title: "Built for the Long Run",
      desc: "Our relationships don’t end at launch. We stay close to our clients with ongoing updates, creative refinements, and proactive support to keep their websites growing and performing over time.",
      icon: <Layout size={24} />,
      visual: (
        <div className="w-full h-full bg-gray-50 flex items-center justify-center p-6 overflow-hidden group">
            <div className="relative w-full max-w-[220px] h-full flex flex-col justify-center">
                {/* Infinite Line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                <motion.div 
                    className="absolute left-4 top-0 bottom-0 w-0.5 bg-orange-400"
                    initial={{ height: "0%" }}
                    whileInView={{ height: "100%" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                ></motion.div>

                {/* Milestones */}
                <div className="flex flex-col gap-6 relative z-10">
                    {/* Launch */}
                    <motion.div 
                        className="flex items-center gap-3"
                        initial={{ x: -10, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ x: 5 }}
                    >
                        <div className="w-8 h-8 rounded-full bg-white border-2 border-orange-400 flex items-center justify-center shadow-sm">
                            <div className="w-2.5 h-2.5 bg-orange-500 rounded-full"></div>
                        </div>
                        <div className="bg-white px-3 py-1.5 rounded-lg shadow-sm border border-gray-100 text-[10px] font-semibold text-gray-700">
                            Launch
                        </div>
                    </motion.div>

                    {/* Update 1 */}
                    <motion.div 
                        className="flex items-center gap-3"
                        initial={{ x: -10, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        whileHover={{ x: 5 }}
                    >
                        <div className="w-8 h-8 rounded-full bg-white border-2 border-orange-300 flex items-center justify-center shadow-sm">
                             <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-orange-400"><path d="M12 5v14M5 12h14"/></svg>
                        </div>
                        <div className="bg-white px-3 py-1.5 rounded-lg shadow-sm border border-gray-100 text-[10px] font-medium text-gray-500">
                            Updates
                        </div>
                    </motion.div>

                     {/* Growth */}
                    <motion.div 
                        className="flex items-center gap-3"
                        initial={{ x: -10, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.4 }}
                        whileHover={{ x: 5 }}
                    >
                        <div className="w-8 h-8 rounded-full bg-white border-2 border-orange-300 flex items-center justify-center shadow-sm">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-orange-400"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                        </div>
                         <div className="bg-white px-3 py-1.5 rounded-lg shadow-sm border border-gray-100 text-[10px] font-medium text-gray-500">
                            Optimization
                        </div>
                    </motion.div>
                </div>

                 {/* Floating Future Badge */}
                 <motion.div 
                    className="absolute -right-2 bottom-4 bg-orange-500 text-white text-[9px] font-bold px-2 py-1 rounded-full shadow-md"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                 >
                    Always on
                 </motion.div>
            </div>
        </div>
      )
    }
  ];

  return (
    <section id="why-me" className="bg-[#F3F4F6] text-black pt-20 md:pt-24 pb-24 md:pb-32 px-6 md:px-12 font-sans rounded-b-[2rem]">
      <div className="container mx-auto">
        {/* Header Group */}
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
            {/* Tag - Aligned to Intro */}
            <div className="inline-flex items-center gap-2 border border-orange-200 rounded-lg px-3 py-1 text-xs uppercase tracking-wider text-orange-700 bg-orange-50 font-mono mb-5 md:ml-[120px]">
                <span className="opacity-50">5</span>
                <span>Why us</span>
            </div>
            
            {/* Header */}
            <div className="mb-16 md:ml-[120px]">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-black tracking-tight">
                    Why work with us
                </h2>
            </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-shadow duration-300 flex flex-col"
                >
                    {/* Visual Top */}
                    <div className="h-48 w-full border-b border-gray-50 relative bg-gray-50/50">
                        {feature.visual}
                    </div>

                    {/* Content Bottom */}
                    <div className="p-8 flex-1 flex flex-col">
                        <h3 className="text-xl font-semibold mb-3 text-gray-900 tracking-tight">{feature.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
};
