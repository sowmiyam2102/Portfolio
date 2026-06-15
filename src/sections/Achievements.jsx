import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import { portfolioData } from '../data/portfolioData';
import { Trophy, Star, Award, Calendar } from 'lucide-react';

export default function Achievements() {
  const achievements = portfolioData.achievements;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 1, ease: 'easeInOut' },
    },
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-cyber-bg-dark">
      {/* Decorative gradient blur background */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full bg-fuchsia-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/25 bg-violet-500/5 text-violet-400 font-display font-semibold text-xs tracking-wider uppercase mb-3"
          >
            <Trophy className="w-3.5 h-3.5" />
            Achievements
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-3xl md:text-5xl tracking-tight text-white"
          >
            Honors & <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">Recognitions</span>
          </motion.h2>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical timeline line */}
          <motion.div 
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute left-4 md:left-1/2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-fuchsia-500 to-violet-500 origin-top transform md:-translate-x-1/2"
          />

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-12"
          >
            {achievements.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row items-stretch ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline point dot with animated star */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full border-4 border-[#060415] bg-[#0d0a27] transform -translate-x-[14px] md:-translate-x-4 z-20 flex items-center justify-center shadow-xs shadow-fuchsia-500/50">
                    <Star className="w-3.5 h-3.5 text-fuchsia-450 fill-fuchsia-500 animate-pulse" />
                  </div>

                  {/* Card Container */}
                  <div className={`w-full md:w-[calc(50%-2rem)] pl-12 md:pl-0 ${
                    isEven ? 'md:pr-8 md:text-right' : 'md:pl-8'
                  }`}>
                    <Card delay={index * 0.15}>
                      {/* Year & Badge */}
                      <div className={`flex items-center gap-2 mb-2 text-xs font-semibold text-fuchsia-400 ${
                        isEven ? 'md:justify-end' : ''
                      }`}>
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.year}</span>
                      </div>

                      <h3 className="font-display font-bold text-lg text-white mb-2 leading-tight">
                        {item.title}
                      </h3>

                      <p className="text-sm text-slate-400 leading-relaxed text-left">
                        {item.description}
                      </p>
                    </Card>
                  </div>

                  {/* Empty space filler for desktop alignment */}
                  <div className="hidden md:block w-[calc(50%-2rem)]" />
                </div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
