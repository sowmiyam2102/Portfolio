import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    const homeSection = document.querySelector('#home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#060415] border-t border-slate-900/60 py-8 relative z-10">
      <div className="max-w-[92%] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">

        {/* Left Side: Copyright */}
        <p className="text-xs tracking-wide text-slate-500 font-medium">
          &copy; {new Date().getFullYear()} <span className="text-slate-400 font-semibold">Sowmiya M</span>. Built with React & Tailwind.
        </p>

        {/* Right Side: Back to Top Button */}
        <a
          href="#home"
          onClick={scrollToTop}
          className="group flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-slate-400 hover:text-violet-400 transition-colors duration-200"
        >
          Back to top
          <div className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-violet-500/40 group-hover:bg-violet-500/5 transition-all duration-200">
            <ArrowUp className="w-3.5 h-3.5 transform group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </a>

      </div>
    </footer>
  );
}