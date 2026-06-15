import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#credentials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPos = window.scrollY + 140;

      for (const link of navLinks) {
        const el = document.querySelector(link.href);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(link.href.slice(1));
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLink = (e, href) => {
    e.preventDefault();
    setIsOpen(false);

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });

      const targetPosition = target.getBoundingClientRect().top + window.scrollY;
      const navbarOffset = scrolled ? 70 : 88;

      window.scrollTo({
        top: targetPosition - navbarOffset,
        behavior: 'smooth'
      });

      setActiveSection(href.slice(1));
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? 'backdrop-blur-md bg-[#060415]/85 border-b border-slate-800/60 py-4 shadow-lg shadow-black/20'
        : 'py-6 bg-transparent'
      }`}>
      {/* Expanded width layout to pull the logo further to the left edge */}
      <div className="max-w-[92%] mx-auto flex items-center justify-between">

        {/* Logo Branding - Pushed perfectly left */}
        <a href="#home" onClick={(e) => handleLink(e, '#home')} className="flex items-center gap-2 font-display font-bold text-xl text-white group select-none">
          <span className="text-violet-500 transition-colors group-hover:text-fuchsia-400 font-mono">&lt; /&gt;</span>
          <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-fuchsia-400 bg-clip-text text-transparent tracking-tight">Sowmiya</span>
          <span className="text-violet-400 font-extrabold font-display">M</span>
        </a>

        {/* Desktop Navigation - High contrast visible links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map(link => {
              const currentSectionId = link.href.slice(1);
              const isActive = activeSection === currentSectionId;

              return (
                <li key={link.name} className="relative">
                  <a
                    href={link.href}
                    onClick={e => handleLink(e, link.href)}
                    className={`text-sm font-medium tracking-wide transition-all relative pb-1 block uppercase text-xs ${isActive
                        ? 'text-violet-400 font-semibold drop-shadow-[0_0_8px_rgba(167,139,250,0.4)]'
                        : 'text-slate-400 hover:text-white' // High-contrast clean visible link setup
                      }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full shadow-[0_0_10px_#a78bfa]"
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile Controls Trigger */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:bg-slate-800 transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Action Drawer overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-[#060415] border-b border-slate-900 overflow-hidden shadow-2xl"
          >
            <ul className="flex flex-col gap-1 px-6 py-6 font-medium">
              {navLinks.map(link => {
                const currentSectionId = link.href.slice(1);
                const isActive = activeSection === currentSectionId;

                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={e => handleLink(e, link.href)}
                      className={`block w-full py-2.5 px-3 text-sm rounded-xl uppercase tracking-wider transition-all ${isActive
                          ? 'text-violet-400 bg-violet-500/5 font-semibold'
                          : 'text-slate-400 hover:bg-slate-900/40 hover:text-white'
                        }`}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}