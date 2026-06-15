import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../components/Card';
import { portfolioData } from '../data/portfolioData';
import { Mail, MessageSquare, Phone, MapPin } from 'lucide-react';
import { Github, Linkedin } from '../components/BrandIcons';

export default function Contact() {
  const { email, phone, location, github, linkedin } = portfolioData.personalInfo;

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

      // Generate spark trail on mouse movement
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

        setSparks((prev) => [...prev.slice(-25), newSpark]); // Optimized pool cap
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

  const contactMethods = [
    { icon: Mail, label: 'Email', value: email, href: `mailto:${email}` },
    { icon: Phone, label: 'Phone', value: phone, href: `tel:${phone}` },
    { icon: MapPin, label: 'Location', value: location, href: null },
    { icon: Github, label: 'GitHub', value: 'sowmiyam2102', href: github },
    { icon: Linkedin, label: 'LinkedIn', value: 'Sowmiya M', href: linkedin },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
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

      {/* Background radial highlight */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-violet-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Heading Label Tag */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/25 bg-violet-500/5 text-violet-400 font-display font-semibold text-xs tracking-wider uppercase mb-3"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Contact
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-3xl md:text-5xl tracking-tight text-white"
          >
            Let's Start A <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">Conversation</span>
          </motion.h2>
        </div>

        {/* Centered Get In Touch Layout block */}
        <div className="max-w-xl mx-auto text-center">
          <h3 className="font-display font-bold text-2xl text-white mb-3 tracking-tight">
            Get in Touch
          </h3>

          <p className="text-sm md:text-base text-slate-400 leading-relaxed mb-8 max-w-lg mx-auto">
            Feel free to reach out for internship inquiries, collaboration, or simply to say hello. I'll do my best to respond within 24 hours.
          </p>

          {/* Contact Methods Stack aligned to center column container */}
          <div className="flex flex-col gap-4 w-full text-left">
            {contactMethods.map((method, idx) => {
              const IconComp = method.icon;
              const isLink = !!method.href;
              const cardContent = (
                <Card className="p-4! hover:-translate-y-1 hover:border-violet-500/30 transition-transform duration-350 bg-slate-900/10 backdrop-blur-xs">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-violet-500/10 text-violet-400 text-glow-violet shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col gap-0.5 text-left">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">
                        {method.label}
                      </span>
                      <span className="text-sm md:text-base font-semibold text-slate-200">
                        {method.value}
                      </span>
                    </div>
                  </div>
                </Card>
              );

              return isLink ? (
                <a
                  key={idx}
                  href={method.href}
                  target={method.label !== 'Email' && method.label !== 'Phone' ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="w-full text-left cursor-pointer block"
                >
                  {cardContent}
                </a>
              ) : (
                <div key={idx} className="w-full block">
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}