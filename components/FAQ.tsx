
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqData = [
  {
    question: "What services do you offer?",
    answer: (
      <>
        <p className="mb-4">We design and develop complete websites, from strategy and branding to design and launch.</p>
        <p className="mb-4">Whether you need a site for your restaurant, your studio, or your creative brand, we tailor every project to your goals.</p>
        <p>Already have a design? We can handle development and optimization too.</p>
      </>
    )
  },
  {
    question: "How long does it take?",
    answer: (
      <>
        <p className="mb-4">Most projects take between 2 to 8 weeks, depending on the number of pages, content readiness, and level of customization.</p>
        <p>Smaller sites (like professional studios) are usually ready in a few weeks, while more creative or interactive builds may take longer.</p>
      </>
    )
  },
  {
    question: "Do you also handle branding?",
    answer: (
      <p>Yes. Many of our clients start from scratch, so we offer brand identity design — logo, color palette, typography, and a mini style guide — to ensure a consistent, professional image across all touchpoints.</p>
    )
  },
  {
    question: "Do you work only with certain industries?",
    answer: (
      <>
        <p className="mb-4">We specialize in restaurants, professional studios, and creative businesses, but we also collaborate with service-based companies and startups.</p>
        <p>Our approach adapts to your tone, audience, and industry needs.</p>
      </>
    )
  },
  {
    question: "What makes DigitiNexus different from other agencies?",
    answer: (
      <>
        <p className="mb-4">Every project gets a custom-built team of designers, developers, and motion or 3D artists, selected specifically for your vision.</p>
        <p>We combine beautiful design with real strategy, your site will not only look great but also convert visitors into clients.</p>
      </>
    )
  },
  {
    question: "What happens after launch?",
    answer: (
      <>
        <p className="mb-4">We don’t disappear once your website is live.</p>
        <p>We offer continuous support, design improvements, and updates to keep your site fast, secure, and relevant as your business grows.</p>
      </>
    )
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-black text-white py-20 md:py-24 px-6 md:px-12 border-t border-white/10">
      <div className="container mx-auto">
        {/* Header Group */}
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
            {/* Tag - Aligned to Intro */}
            <div className="inline-flex items-center gap-2 border border-white/20 rounded-lg px-3 py-1 text-xs uppercase tracking-wider text-orange-400 font-mono bg-white/5 mb-5 md:ml-[120px]">
                <span className="opacity-50">7</span>
                <span>FAQs</span>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-start mb-24 gap-12 md:ml-[120px]">
            <div className="text-left w-full md:w-auto">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] md:whitespace-nowrap">
                        Your questions, answered
                    </h2>
            </div>
            </div>
        </motion.div>

        {/* Accordion List - Full Width */}
        <div className="w-full border-t border-white/10">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                key={index} 
                className="border-b border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-8 flex justify-between items-start text-left group focus:outline-none"
                >
                  <h3 className={`text-xl md:text-2xl font-medium pr-8 transition-colors duration-300 ${isOpen ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                    {item.question}
                  </h3>
                  <div className={`mt-1 flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'text-white' : 'text-gray-500 group-hover:text-white'}`}>
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: "anticipate" }}
                    >
                      <Plus size={24} strokeWidth={1.5} />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 text-base md:text-lg text-gray-400 leading-relaxed max-w-3xl">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
