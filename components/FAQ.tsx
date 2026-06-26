
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const FAQ: React.FC = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = [
    {
      question: t('faq.q1.question'),
      answer: (
        <>
          <p className="mb-4">{t('faq.q1.answer1')}</p>
          <p className="mb-4">{t('faq.q1.answer2')}</p>
          <p>{t('faq.q1.answer3')}</p>
        </>
      )
    },
    {
      question: t('faq.q2.question'),
      answer: (
        <>
          <p className="mb-4">{t('faq.q2.answer1')}</p>
          <p>{t('faq.q2.answer2')}</p>
        </>
      )
    },
    {
      question: t('faq.q3.question'),
      answer: (
        <p>{t('faq.q3.answer')}</p>
      )
    },
    {
      question: t('faq.q4.question'),
      answer: (
        <>
          <p className="mb-4">{t('faq.q4.answer1')}</p>
          <p>{t('faq.q4.answer2')}</p>
        </>
      )
    },
    {
      question: t('faq.q5.question'),
      answer: (
        <>
          <p className="mb-4">{t('faq.q5.answer1')}</p>
          <p>{t('faq.q5.answer2')}</p>
        </>
      )
    },
    {
      question: t('faq.q6.question'),
      answer: (
        <>
          <p className="mb-4">{t('faq.q6.answer1')}</p>
          <p>{t('faq.q6.answer2')}</p>
        </>
      )
    }
  ];

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
                <span className="opacity-50">8</span>
                <span>{t('faq.tag')}</span>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-start mb-24 gap-12 md:ml-[120px]">
            <div className="text-left w-full md:w-auto">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] md:whitespace-nowrap">
                        {t('faq.title')}
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
                      <div className="pb-8 text-base md:text-lg text-gray-400 leading-relaxed md:max-w-none md:pr-[120px]">
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
