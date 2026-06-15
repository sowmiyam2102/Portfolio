import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../components/Card';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
  const experiences = portfolioData.experience;
  const education = portfolioData.education;

  // Mouse tracking and dynamic spark trail states
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

      // Generate matching interactive spark trail on movement
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

  return (
    <section
      ref={sectionRef}
      id="experience"
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
            <Briefcase className="w-3.5 h-3.5" />
            Experience & Education
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-3xl md:text-5xl tracking-tight text-white"
          >
            Professional <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">Journey</span>
          </motion.h2>
        </div>

        {/* Two-Column Symmetrical Card Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* LEFT SIDE CONTAINER: Internship Experience */}
          <Card className="h-full bg-slate-950/40 border border-slate-800/60 p-6 md:p-8 backdrop-blur-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 text-left">
                <Briefcase className="w-6 h-6 text-violet-400" />
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Internship Experience
                </h3>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent mb-8" />

              <div className="flex flex-col gap-8">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-violet-500/50 pl-5 text-left relative"
                  >
                    {/* Tiny accent timeline node dot */}
                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-violet-400 shadow-sm shadow-violet-400/50" />

                    <p className="text-violet-400 text-xs font-semibold tracking-wide mb-1">
                      {exp.duration}
                    </p>

                    <h4 className="text-xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h4>

                    <p className="text-sm text-slate-400 font-medium mt-0.5 mb-4">
                      Bilight Solutions | Chennai
                    </p>

                    <ul className="list-disc pl-4 space-y-3 text-sm text-slate-300 leading-relaxed text-justify">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="marker:text-violet-400/70">
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Interactive Technology Pill Tags */}
                    <div className="flex flex-wrap gap-2 mt-5">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-lg text-xs border border-slate-800/80 bg-slate-900 text-slate-300 font-medium transition-all duration-300 hover:border-violet-500/40 hover:text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* RIGHT SIDE CONTAINER: Education Workspace */}
          <Card className="h-full bg-slate-950/40 border border-slate-800/60 p-6 md:p-8 backdrop-blur-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 text-left">
                <GraduationCap className="w-6 h-6 text-violet-400" />
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Education
                </h3>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent mb-8" />

              <div className="flex flex-col gap-8">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-violet-500/50 pl-5 text-left relative"
                  >
                    {/* Tiny accent timeline node dot */}
                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-violet-400 shadow-sm shadow-violet-400/50" />

                    <p className="text-violet-400 text-xs font-semibold tracking-wide mb-1">
                      {edu.duration}
                    </p>

                    <h4 className="text-xl font-bold text-white tracking-tight">
                      {edu.degree}
                    </h4>

                    <p className="text-sm text-slate-400 font-medium mt-0.5 mb-3">
                      {edu.institution}
                    </p>

                    <p className="text-sm text-slate-400 font-medium">
                      Percentage:{" "}
                      <span className="text-violet-400 font-bold">
                        {edu.percentage}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
}