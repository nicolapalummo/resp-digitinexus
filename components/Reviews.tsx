
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const reviews = [
    {
        id: 1,
        company: "Voldz Law",
        logo: "V",
        quote: "Our priority was to give clients a sense of trust and professionalism from the very first click. The new website is elegant and highly functional. Potential clients can finally understand who we are and what we offer in just a few seconds. A significant step forward.",
        highlight: "understand who we are and what we offer in just a few seconds",
        author: "Mila Anderson",
        role: "Client Relations Director – Voldz Law P.C.",
        image: "/avatar/Mila Anderson.webp"
    },
    {
        id: 2,
        company: "The Antler Room",
        logo: "A",
        quote: "Capturing the soul of a restaurant is no easy task, yet the new website does it perfectly. The photography stands out, the navigation is smooth, and everything communicates our culinary identity. Online reservations have increased, and many guests tell us they discovered us thanks to the website.",
        highlight: "Online reservations have increased",
        author: "Sarah Whitmore",
        role: "General Manager – The Antler Room",
        image: "/avatar/Sarah Whitmore.webp"
    },
    {
        id: 3,
        company: "Delizia Trattoria",
        logo: "D",
        quote: "We wanted a website that felt as welcoming as our restaurant. The design is warm, clean, and showcases our dishes beautifully. Guests often tell us that the first impression they got from the website convinced them to visit in person — and that means everything to us.",
        highlight: "first impression they got from the website convinced them to visit in person",
        author: "Julien Caradec",
        role: "Owner – Delizia Trattoria",
        image: "/avatar/Julien Caradec.webp"
    },
    {
        id: 4,
        company: "Mark Harford Law",
        logo: "M",
        quote: "The new website has completely transformed how clients perceive us. The structure is clear, modern, and conveys real authority. Thanks to this redesign, consultation requests increased by 25% in the first few weeks. Our online presence finally reflects the quality of our firm.",
        highlight: "consultation requests increased by 25% in the first few weeks",
        author: "Erin Matthews",
        role: "Operations Manager – Mark Harford Law",
        image: "/avatar/Erin Matthews.webp"
    }
];

export const Reviews: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="bg-[#F3F4F6] text-black pt-24 pb-12 px-0 overflow-hidden font-sans border-t border-gray-200 relative">
      <motion.div 
        className="container mx-auto max-w-[1400px] px-6 relative z-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        
        {/* Mobile: Horizontal Scroll Container */}
        <div className="md:hidden overflow-x-auto snap-x snap-mandatory -mx-6 px-6 pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="flex gap-6" style={{ width: 'max-content' }}>
            {reviews.map((review) => (
              <motion.div
                key={review.id}
                className="flex-shrink-0 w-[85vw] max-w-[400px] bg-white rounded-2xl p-8 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] border border-white snap-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {/* Card Content */}
                <div className="flex flex-col h-full justify-between min-h-[450px]">
                  {/* Quote */}
                  <div className="text-center mb-8">
                    <p className="text-lg leading-relaxed text-gray-800 font-light">
                      "{review.quote.split(review.highlight)[0]} 
                      {review.highlight && <strong className="font-bold text-black">{review.highlight}</strong>}
                      {review.quote.split(review.highlight)[1]}"
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-white shadow-md">
                      <img 
                        src={review.image} 
                        alt={review.author} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-lg text-black">{review.author}</h4>
                      <p className="text-sm text-gray-500 font-medium">{review.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop: Carousel Container */}
        <div className="hidden md:block relative h-[420px] flex items-center justify-center perspective-1000">
            <AnimatePresence initial={false}>
                {reviews.map((review, index) => {
                    // Calculate visual offset relative to active card
                    let offset = index - activeIndex;
                    // Handle wrapping for 4 items
                    if (offset > reviews.length / 2) offset -= reviews.length;
                    if (offset < -reviews.length / 2) offset += reviews.length;

                    // Determine state
                    const isActive = offset === 0;
                    const isNext = offset === 1 || (offset === -3); // Visual right
                    const isPrev = offset === -1 || (offset === 3); // Visual left
                    const isHidden = Math.abs(offset) >= 2; // Behind

                    return (
                        <motion.div
                            key={review.id}
                            className={`absolute top-0 w-[800px] bg-white rounded-2xl p-14 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] border border-white cursor-grab active:cursor-grabbing overflow-hidden
                                ${isActive ? 'z-30' : 'z-10'}
                            `}
                            initial={false}
                            animate={{
                                // Positioning logic:
                                // Center: -50% (exact center)
                                // Right (Next): 55% (closer gap)
                                // Left (Prev): -155% (closer gap)
                                x: isActive ? '-50%' : offset > 0 ? '55%' : '-155%',
                                scale: isActive ? 1 : 0.9,
                                opacity: isActive ? 1 : isHidden ? 0 : 0.6,
                                filter: isActive ? 'blur(0px)' : 'blur(2px)', // Light blur
                                zIndex: isActive ? 30 : 10,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 25,
                                duration: 0.6
                            }}
                            style={{
                                left: '50%',
                                top: '50%', 
                                translateY: '-50%' 
                            }}
                            onClick={() => {
                                if (isNext) nextSlide();
                                if (isPrev) prevSlide();
                            }}
                        >
                            {/* Card Content */}
                            <div className={`flex flex-col h-full justify-between transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-80'}`}>
                                {/* Quote */}
                                <div className="text-center mb-10">
                                    <p className="text-2xl leading-relaxed text-gray-800 font-light">
                                        "{review.quote.split(review.highlight)[0]} 
                                        {review.highlight && <strong className="font-bold text-black">{review.highlight}</strong>}
                                        {review.quote.split(review.highlight)[1]}"
                                    </p>
                                </div>

                                {/* Author */}
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-white shadow-md">
                                        <img 
                                            src={review.image} 
                                            alt={review.author} 
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <h4 className="font-bold text-lg text-black">{review.author}</h4>
                                        <p className="text-sm text-gray-500 font-medium">{review.role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </div>

        {/* Minimal Navigation Buttons (Desktop Only) */}
        <div className="hidden md:flex justify-center gap-8 mt-12 relative z-40">
            <button 
                onClick={prevSlide}
                className="flex items-center justify-center text-gray-400 hover:text-black transition-colors duration-300 transform hover:-translate-x-1"
                aria-label="Previous Review"
            >
                <ArrowLeft size={24} strokeWidth={1} />
            </button>
            <button 
                onClick={nextSlide}
                className="flex items-center justify-center text-gray-400 hover:text-black transition-colors duration-300 transform hover:translate-x-1"
                aria-label="Next Review"
            >
                <ArrowRight size={24} strokeWidth={1} />
            </button>
        </div>

      </motion.div>
    </section>
  );
};
