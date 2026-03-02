import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface WorkItem {
    id: number;
    title: string;
    category: string;
    image: string;
    url: string;
}

const workItems: WorkItem[] = [
    { id: 1, title: 'Mark Harford Law', category: 'Law Firm', image: '/portfolio/mark harford.webp', url: 'https://markharfordlaw.com' },
    { id: 2, title: "Phil's Finest", category: 'Food Products', image: "/portfolio/phils finest.webp", url: 'https://www.philsfinest.com/?ref=httpster.net' },
    { id: 3, title: 'Voldz Law', category: 'Law Firm', image: '/portfolio/Voldz law.webp', url: 'https://voldzlaw.com' },
    { id: 4, title: 'The Antler Room', category: 'Restaurant', image: '/portfolio/the antler room.webp', url: 'https://www.theantlerroomkc.com' },
    { id: 5, title: 'Bombance Paris', category: 'Restaurant', image: '/portfolio/bombace.webp', url: 'https://www.bombanceparis.fr' },
    { id: 6, title: 'Delizia Trattoria', category: 'Restaurant', image: '/portfolio/delizia trattoria.webp', url: 'https://www.deliziatrattoria.com' },
];

export const RecentWork: React.FC = () => {
  return (
    <section id="work" className="bg-black text-white py-20 md:py-24 px-6 md:px-12 border-t border-white/5">
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
                <span className="opacity-50">3</span>
                <span>Work</span>
            </div>
            
            {/* Header Layout - Title Below */}
            <div className="mb-16 md:mb-15 md:ml-[120px]">
                {/* Heading - Single Line */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-none text-left">
                    Recent success stories
                </h2>
            </div>
        </motion.div>

        {/* Bento Grid 3x2 (3 per riga, 2 righe) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {workItems.map((item) => (
                <motion.a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, delay: item.id * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer border border-white/10 bg-[#111] block"
                >
                    {/* Full Image Background */}
                    <div className="absolute inset-0 w-full h-full overflow-hidden">
                        <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                    </div>

                    {/* Top 2/3 Overlay */}
                    <div className="h-[66%] w-full relative z-10">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                        
                        {/* Hover Arrow */}
                        <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 backdrop-blur-md p-2 rounded-full">
                            <ArrowUpRight className="text-white" size={20} />
                        </div>
                    </div>

                    {/* Bottom 1/3 Content with Blur */}
                    <div className="h-[34%] w-full flex flex-col items-center justify-center border-t border-white/5 relative z-10 backdrop-blur-md bg-black/30 group-hover:bg-black/40 transition-all duration-300">
                        <span className="text-2xl font-bold tracking-tight text-white/90 group-hover:text-white transition-colors mb-2">
                            {item.title}
                        </span>
                        <span className="text-xs font-mono text-gray-300 uppercase tracking-widest opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                            {item.category}
                        </span>
                    </div>
                </motion.a>
            ))}
        </div>
      </div>
    </section>
  );
};