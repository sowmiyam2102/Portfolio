import React from 'react';
import { motion } from 'framer-motion';

export default function Card({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={`rounded-3xl p-8
bg-slate-950/60
backdrop-blur-xl
border border-violet-500/20
shadow-[0_0_40px_rgba(139,92,246,0.08)]
hover:border-violet-500/40
transition-all duration-300
relative overflow-hidden
${className}`}
    >
      {/* Subtle interior glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
