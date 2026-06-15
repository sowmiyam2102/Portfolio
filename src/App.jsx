import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors duration-300">
      {/* Navigation bar */}
      <Navbar />

      {/* Main Container */}
      <main className="w-full">
        {/* Hero Landing Section */}
        <Hero />

        {/* About & Skills Section */}
        <About />

        {/* Professional Experience Section */}
        <Experience />

        {/* Portfolio Projects Gallery */}
        <Projects />

        {/* Portfolio Certifications and acheivements section*/}
        <Certifications />

        {/* Interactive Contact Form Section */}
        <Contact />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
