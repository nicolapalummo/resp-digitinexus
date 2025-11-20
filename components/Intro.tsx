
import React from 'react';
import { motion } from 'framer-motion';

export const Intro: React.FC = () => {
  return (
    <section id="intro" className="bg-black text-white py-20 md:py-24 px-6 md:px-12 border-t border-white/5">
      <div className="container mx-auto ">
        <div className="inline-flex items-center gap-2 border border-white/20 rounded-2xl px-3 py-1 text-xs uppercase tracking-wider mb-12 text-orange-400 md:ml-[120px]">
            <span className="opacity-50">2</span>
            <span>Intro</span>
        </div>

        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="md:ml-[120px]"
        >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8 text-gray-200">
                If that sounds like your situation, We can help.
            </h2>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8 text-gray-200">
                DigitiNexus is a design-driven web agency that blends creativity, strategy, and technology to craft websites that truly stand out.

            </h2>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-white">
                Every project we build doesn’t just look beautiful — it performs beautifully too.
            </h2>
        </motion.div>
      </div>
    </section>
  );
};
