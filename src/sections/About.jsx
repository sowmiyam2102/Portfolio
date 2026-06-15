import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../components/Card';
import { portfolioData } from '../data/portfolioData';
import {
  User,
  Cpu,
  Code2,
  Database,
  Server,
  Brain,
  BarChart3,
  Wrench,
  Cloud
} from "lucide-react";

export default function About() {
  const { aboutSection, skillGroups } = portfolioData;

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

      // Generate matching interactive spark trail on movement
      if (Math.random() > 0.3) {
        const id = Math.random().toString(36).substring(2, 9);
        const newSpark = {
          id,
          x: newX,
          y: newY,
          size: Math.random() * 5 + 2,
          tx: (Math.random() - 0.5) * 45,
          ty: (Math.random() - 0.5) * 45,
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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const highlights = [
    {
      title: "Location",
      detail: "Chennai, TN, India",
    },
    {
      title: "Focus",
      detail: "Full-Stack Development",
    },
    {
      title: "Passion",
      detail: "Building Scalable Solutions",
    },
    {
      title: "Goal",
      detail: "Create Impactful Products",
    },
  ];

  const skillIcons = {
    "Frontend Development": Code2,
    "Backend Development": Server,
    "Databases": Database,
    "Data Engineering": Cloud,
    "Analytics & BI": BarChart3,
    "Machine Learning": Brain,
    "Tools & Platforms": Wrench,
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 relative overflow-hidden bg-[#060415]"
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

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/25 bg-violet-500/5 text-violet-400 font-display font-semibold text-xs tracking-wider uppercase mb-3"
          >
            <User className="w-3.5 h-3.5" />
            About Me
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-3xl md:text-5xl tracking-tight text-white"
          >
            Get To Know <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">More About Me</span>
          </motion.h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

          {/* Left Side: Bio & Highlights */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            {/* Bio Card */}
            <Card className="flex flex-col gap-4 flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-violet-500/10">
                  <User className="w-6 h-6 text-violet-400" />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  About Me
                </h3>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent mb-6" />
              <div className="flex flex-col gap-5 text-slate-400 leading-8 text-sm md:text-base text-justify">
                {aboutSection.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </Card>

            {/* Quick Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="h-full min-h-[140px] rounded-[24px] border border-violet-500/10 bg-slate-950/40 backdrop-blur-xl p-4 flex flex-col justify-center items-center text-center transition-all duration-300 hover:border-violet-500/30 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]"
                >
                  <h4 className="text-white font-semibold text-base mb-3">
                    {item.title}
                  </h4>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Skill Grid */}
          <div className="lg:col-span-6 flex">
            <Card className="flex-1 flex flex-col">

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-violet-500/10">
                  <Cpu className="w-6 h-6 text-violet-400" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Technical Skills
                  </h3>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent mb-8" />

              <div className="grid md:grid-cols-2 gap-5">
                {skillGroups
                  .filter((category) => category.title !== "Tools & Platforms")
                  .map((category, idx) => {
                    return (
                      <div
                        key={idx}
                        className="rounded-[20px] border border-violet-500/10 bg-slate-950/40 p-5 hover:border-violet-500/30 transition-all duration-300"
                      >
                        <h4 className="font-semibold text-white mb-4">
                          {category.title}
                        </h4>

                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill, skillIdx) => (
                            <span
                              key={skillIdx}
                              className="px-3 py-1.5 text-sm rounded-lg border border-slate-800/80 bg-slate-900 text-slate-300 hover:text-white hover:border-violet-500/40 transition-all"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}

                {/* Tools & Platforms Full Width */}
                <div className="md:col-span-2 rounded-[20px] border border-violet-500/10 bg-slate-950/40 p-5 hover:border-violet-500/30 transition-all duration-300">
                  <h4 className="font-semibold text-white mb-4">
                    Tools & Platforms
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {skillGroups
                      .find((skill) => skill.title === "Tools & Platforms")
                      ?.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 text-sm rounded-lg border border-slate-800/80 bg-slate-900 text-slate-300 hover:text-white hover:border-violet-500/40 transition-all"
                        >
                          {skill}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}