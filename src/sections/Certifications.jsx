import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../components/Card';
import { portfolioData } from '../data/portfolioData';
import { Trophy, Star, Calendar, Award, ShieldCheck } from 'lucide-react';

export default function Credentials() {
  const achievements = portfolioData.achievements;
  const certifications = portfolioData.certifications;

  // Mouse tracking and live spark trail states
  const [mouse, setMouse] = useState({ x: -200, y: -200 });
  const [sparks, setSparks] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const newX = e.clientX - rect.left;
      const newY = e.clientY - rect.top;

      setMouse({ x: newX, y: newY });

      // Generate spark trail particles on movement
      if (Math.random() > 0.3) {
        const id = Math.random().toString(36).substring(2, 9);
        const newSpark = {
          id,
          x: newX,
          y: newY,
          size: Math.random() * 5 + 2,
          tx: (Math.random() - 0.5) * 45, // Directional drift X
          ty: (Math.random() - 0.5) * 45, // Directional drift Y
        };

        setSparks((prev) => [...prev.slice(-25), newSpark]);
      }
    };

    const currentRef = sectionRef.current;
    if (currentRef) {
      currentRef.addEventListener('mousemove', handleMouseMove, { passive: true });
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 1, ease: 'easeInOut' },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="credentials"
      className="py-24 relative overflow-hidden bg-[#060415] text-white"
    >
      {/* DYNAMIC TRACKING CURSOR ATTRACTION LIGHTING */}
      <div
        className="absolute inset-0 pointer-events-none opacity-45 z-0 hidden lg:block"
        style={{
          background: `radial-gradient(180px circle at ${mouse.x}px ${mouse.y}px, rgba(192, 132, 252, 0.18), transparent 80%)`
        }}
      />

      {/* LIVE KINETIC SPARK TRAIL OVERLAY */}
      <div className="absolute inset-0 z-50 pointer-events-none overflow-hidden hidden lg:block">
        <AnimatePresence>
          {sparks.map((spark) => (
            <motion.div
              key={spark.id}
              initial={{ opacity: 1, scale: 1, x: spark.x, y: spark.y }}
              animate={{
                opacity: 0,
                scale: 0.3,
                x: spark.x + spark.tx,
                y: spark.y + spark.ty
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="absolute rounded-full bg-fuchsia-400 shadow-[0_0_12px_#e879f9]"
              style={{ width: spark.size, height: spark.size }}
            />
          ))}
        </AnimatePresence>
      </div>

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
            Certifications
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-3xl md:text-5xl tracking-tight text-white"
          >
            Achievements & <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">Certifications</span>
          </motion.h2>
        </div>

        {/* Combined Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">

          {/* LEFT SIDE: Achievements Timeline */}
          <div className="lg:col-span-6 w-full">
            <h3 className="font-display font-bold text-xl text-white mb-8 text-left flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-violet-400" />
              Achievements
            </h3>

            <div className="relative pl-6">
              {/* Vertical timeline connector */}
              <motion.div
                variants={lineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="absolute left-1.5 top-2 bottom-2 w-0.5 bg-gradient-to-b from-violet-500 to-fuchsia-500 origin-top"
              />

              <div className="flex flex-col gap-6">
                {achievements.map((item, index) => (
                  <div key={index} className="relative text-left">
                    {/* Timeline structural dot node */}
                    <div className="absolute -left-[23px] top-1.5 w-4 h-4 rounded-full border-2 border-[#060415] bg-[#0d0a27] z-20 flex items-center justify-center shadow-xs shadow-violet-500/50">
                      <Star className="w-1.5 h-1.5 text-violet-400 fill-violet-400 animate-pulse" />
                    </div>

                    <Card className="p-4 bg-slate-950/40 border border-slate-800/60 backdrop-blur-xs">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-violet-400 mb-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.year}</span>
                      </div>

                      <h4 className="font-display font-bold text-base text-white mb-1.5 leading-tight">
                        {item.title}
                      </h4>

                      <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Point-Based Certifications List */}
          <div className="lg:col-span-6 w-full">
            <h3 className="font-display font-bold text-xl text-white mb-8 text-left flex items-center gap-2.5">
              <Award className="w-5 h-5 text-violet-400" />
              Certifications
            </h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-3"
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center justify-between p-4 rounded-xl border border-slate-800/80 bg-slate-950/40 backdrop-blur-xs hover:border-violet-500/20 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3.5 text-left">
                    <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-sans font-medium text-sm md:text-base text-slate-200 leading-tight">
                        {cert.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 font-medium tracking-wide uppercase mt-0.5">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] font-bold text-slate-400 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded-full shrink-0 ml-3">
                    {cert.year}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}