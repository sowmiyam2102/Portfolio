import React, { useState, useEffect, useRef } from 'react';
import { Mail, ArrowRight, Download, Terminal, ChevronRight } from 'lucide-react';
import { Github, Linkedin } from '../components/BrandIcons';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import Button from '../components/Button';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { name, title, subTitle, github, linkedin, email } = portfolioData.personalInfo;

  // Scroll progress for page
  const { scrollYProgress } = useScroll();

  // Typing animation roles
  const roles = ["Full-Stack Developer", "Software Engineer", "MCA Graduate"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Mouse tracking and dynamic spark trail arrays
  const [mouse, setMouse] = useState({ x: -200, y: -200 });
  const [sparks, setSparks] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const newX = e.clientX - rect.left;
      const newY = e.clientY - rect.top;

      // Update strong attraction focal point position
      setMouse({ x: newX, y: newY });

      // Generate spark trail on mouse move
      if (Math.random() > 0.3) {
        const id = Math.random().toString(36).substring(2, 9);
        const newSpark = {
          id,
          x: newX,
          y: newY,
          size: Math.random() * 5 + 2, // Varied sizes for standard depth
          tx: (Math.random() - 0.5) * 45, // Directional drift power X
          ty: (Math.random() - 0.5) * 45, // Directional drift power Y
        };

        setSparks((prev) => [...prev.slice(-25), newSpark]); // Keep pool size highly optimized
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let timer;
    const activeRole = roles[currentRoleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(activeRole.substring(0, currentText.length - 1));
        setTypingSpeed(50);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setCurrentText(activeRole.substring(0, currentText.length + 1));
        setTypingSpeed(100);
      }, typingSpeed);
    }

    if (!isDeleting && currentText === activeRole) {
      timer = setTimeout(() => setIsDeleting(true), 2000); // pause at full text
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const socialLinks = [
    { icon: Github, href: github, label: 'GitHub' },
    { icon: Linkedin, href: linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${email}`, label: 'Email' },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-violet-500 via-indigo-500 to-fuchsia-500 z-[100] origin-left"
      />

      <section
        ref={sectionRef}
        id="home"
        className="min-h-screen flex items-center justify-center pt-28 pb-16 relative overflow-hidden bg-cyber-bg-dark text-white"
      >
        {/* DYNAMIC STRONG ATTRACTOR FOCAL POINT LIGHTING */}
        <div
          className="absolute inset-0 pointer-events-none opacity-45 z-0 hidden lg:block"
          style={{
            background: `radial-gradient(180px circle at ${mouse.x}px ${mouse.y}px, rgba(192, 132, 252, 0.18), transparent 80%)`
          }}
        />

        {/* LIVE KINETIC SPARK TRAIL LAYER */}
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

        {/* Neon Ambient Glows */}
        <div className="absolute top-1/4 left-1/12 w-72 h-72 md:w-96 md:h-96 rounded-full bg-violet-600/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/12 w-72 h-72 md:w-96 md:h-96 rounded-full bg-fuchsia-600/10 blur-3xl pointer-events-none delay-1000" />
        <div className="absolute top-1/3 right-1/3 w-80 h-80 rounded-full bg-cyan-600/5 blur-3xl pointer-events-none delay-500" />

        {/* Cyber Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-100 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column - Intro Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col gap-6 text-left"
          >
            {/* Status Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex self-start items-center gap-2 px-3 py-1 rounded-full border border-violet-500/25 bg-violet-500/5 text-violet-400 font-display font-semibold text-xs tracking-wider uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-violet-500 animate-ping" />
              Open for opportunities
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white leading-tight"
            >
              Hi, I'm <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">{name}</span>
            </motion.h1>

            {/* Dynamic Typing Role */}
            <motion.h2
              variants={itemVariants}
              className="font-display font-bold text-2xl sm:text-3xl text-slate-200 flex items-center h-[40px] md:h-[48px]"
            >
              <span className="text-glow-violet text-violet-400 mr-2">&lt;</span>
              <span>{currentText}</span>
              <span className="w-1.5 h-6 md:h-8 bg-violet-400 ml-1.5 animate-pulse inline-block" />
              <span className="text-glow-violet text-violet-400 ml-2">/&gt;</span>
            </motion.h2>

            {/* Short Bio */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-slate-400 max-w-xl leading-relaxed mt-2"
            >
              {subTitle}
            </motion.p>

            {/* CTA Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mt-4"
            >
              {/* View Projects */}
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl
    bg-gradient-to-r from-violet-600 to-fuchsia-600
    text-white font-semibold text-lg
    shadow-[0_0_30px_rgba(139,92,246,0.4)]
    hover:scale-105 transition-all duration-300"
              >
                View Projects
                <ArrowRight size={20} />
              </a>

              {/* Contact */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="inline-flex items-center justify-center
    px-8 py-4 rounded-2xl
    border border-violet-500/50
    text-white font-semibold text-lg
    hover:bg-violet-500/10
    hover:border-violet-400
    transition-all duration-300"
              >
                Contact Me
              </a>

              {/* Resume */}
              <a
                href="/SOWMIYA_M_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2
    px-8 py-4 rounded-2xl
    border border-violet-500/50
    text-white font-semibold text-lg
    hover:bg-violet-500/10
    hover:border-violet-400
    transition-all duration-300"
              >
                Resume
                <Download size={20} />
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-5 mt-6"
            >
              {socialLinks.map((social, index) => {
                const IconComp = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-slate-800 bg-slate-950/60 text-slate-400 hover:text-violet-400 hover:border-violet-500/30 transition-all duration-300 shadow-md cursor-pointer"
                    aria-label={social.label}
                    whileHover={{ y: -4, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComp className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Column - Glowing Interactive IDE Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="grid grid-cols-2 gap-5">

              <div className="glass-card p-6 rounded-3xl">
                <h3 className="text-4xl font-bold text-violet-400">
                  7+
                </h3>
                <p className="text-white font-semibold mt-2">
                  Projects
                </p>
                <span className="text-slate-400 text-sm">
                  Successfully Built
                </span>
              </div>

              <div className="glass-card p-6 rounded-3xl">
                <h3 className="text-4xl font-bold text-fuchsia-400">
                  1
                </h3>
                <p className="text-white font-semibold mt-2">
                  Internship
                </p>
                <span className="text-slate-400 text-sm">
                  Industry Experience
                </span>
              </div>

              <div className="glass-card p-6 rounded-3xl">
                <h3 className="text-4xl font-bold text-cyan-400">
                  5+
                </h3>
                <p className="text-white font-semibold mt-2">
                  Certifications
                </p>
                <span className="text-slate-400 text-sm">
                  Continuous Learning
                </span>
              </div>

              <div className="glass-card p-6 rounded-3xl">
                <h3 className="text-4xl font-bold text-green-400">
                  MCA
                </h3>
                <p className="text-white font-semibold mt-2">
                  Graduate
                </p>
                <span className="text-slate-400 text-sm">
                  Full-Stack Developer
                </span>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Floating Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-slate-800 flex justify-center p-1.5">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1.5 h-1.5 rounded-full bg-violet-400 text-glow-violet"
            />
          </div>
        </motion.div>
      </section>
    </>
  );
}