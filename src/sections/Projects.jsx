import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Code2, Search, Layers } from 'lucide-react';
import { Github } from '../components/BrandIcons';

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = portfolioData.projects;

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

  // Filter projects based on search query matching title, tech stack, or description
  const searchedProjects = projects.filter((project) => {
    const query = searchQuery.toLowerCase();
    return (
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.tech.some((tech) => tech.toLowerCase().includes(query))
    );
  });

  // Separate Featured and Vault projects from filtered pool
  const featuredProjects = searchedProjects.filter(project => project.featured);
  const otherProjects = searchedProjects.filter(project => !project.featured);

  return (
    <section
      ref={sectionRef}
      id="projects"
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

        {/* Section Heading matching your original style and typography */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/25 bg-violet-500/5 text-violet-400 font-display font-semibold text-xs tracking-wider uppercase mb-3"
          >
            <Code2 className="w-3.5 h-3.5" />
            Projects
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-3xl md:text-5xl tracking-tight text-white mb-4"
          >
            My Recent <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">Creations</span>
          </motion.h2>

          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Explore academic, personal, and research projects across web development, data pipelines, and analytics.
          </p>
        </div>

        {/* Search Input matching your previous styling constants */}
        <div className="relative w-full max-w-md mx-auto mb-16">
          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
            <Search className="w-4 h-4" />
          </span>
          <input
            type="text"
            placeholder="Search projects by title, tech stack, details..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-12 py-2.5 rounded-xl border border-slate-800 bg-slate-900/40 text-sm text-white placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-300"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs text-slate-500 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* FEATURED PROJECTS GRID */}
        {featuredProjects.length > 0 && (
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white mb-8 tracking-tight flex items-center gap-3 text-left">
              <span className="w-2 h-2 rounded-full bg-violet-500 inline-block animate-pulse"></span>
              Featured Creations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {featuredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="w-full text-left"
                >
                  <div className="bg-slate-950/70 border border-violet-500/15 rounded-[24px] overflow-hidden p-5 h-full flex flex-col justify-between backdrop-blur-xs">
                    <div>
                      {/* Image Preview Window */}
                      {project.images?.length > 0 ? (
                        <div className="w-full h-[220px] rounded-[18px] overflow-hidden bg-slate-900 mb-5 relative border border-slate-800">
                          <img
                            src={`/${project.images[0]}`}
                            alt={project.title}
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                      ) : (
                        /* Fallback Container */
                        <div className="w-full h-[220px] rounded-[18px] mb-5 relative bg-gradient-to-br from-violet-950/20 via-slate-900/60 to-slate-950 border border-slate-800 flex flex-col items-center justify-center p-4 text-center">
                          <Layers className="w-8 h-8 text-violet-500/40 mb-2" />
                          <span className="text-xs text-violet-400 font-medium tracking-wide uppercase px-2 py-0.5 bg-slate-900/80 border border-slate-800 rounded">
                            {project.category}
                          </span>
                        </div>
                      )}

                      {/* Card Content Elements */}
                      <div className="px-1">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">
                          {project.title}
                        </h3>

                        <p className="text-slate-400 text-sm leading-relaxed mb-5 line-clamp-3">
                          {project.description}
                        </p>

                        {/* Tech Stack Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-0.5 text-[11px] rounded-full border border-violet-500/20 bg-slate-900 text-slate-300 font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Button Alignment Elements */}
                    <div className="flex items-center justify-between gap-2.5 pt-2 px-1">
                      <button
                        onClick={() => {
                          setSelectedProject(project);
                          setCurrentImage(0);
                        }}
                        className="flex-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:scale-[1.02] active:scale-[0.98] text-white font-medium text-sm py-2.5 rounded-full transition-all duration-200 text-center shadow-md shadow-violet-600/10"
                      >
                        View Details
                      </button>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-800 bg-slate-900/60 hover:border-violet-500/40 text-slate-400 hover:text-white transition-all shadow-sm"
                          title="GitHub Repository"
                        >
                          <Github className="w-[18px] h-[18px]" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* PROJECT VAULT */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 tracking-tight text-left">
              Project Vault
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherProjects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => {
                    setSelectedProject(project);
                    setCurrentImage(0);
                  }}
                  className="group text-left p-5 rounded-2xl border border-slate-800 bg-slate-900/30 hover:border-violet-500/40 transition-all duration-300 flex flex-col justify-between h-full shadow-xs"
                >
                  <div className="w-full">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs text-violet-400 font-medium tracking-wide uppercase">
                        {project.category}
                      </span>
                      <span className="text-slate-500 group-hover:text-violet-400 transform group-hover:translate-x-1 transition-all">
                        →
                      </span>
                    </div>
                    <h4 className="text-white font-semibold group-hover:text-violet-300 transition-colors mb-2">
                      {project.title}
                    </h4>
                    <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((t) => (
                      <span key={t} className="text-[10px] text-slate-400 px-1.5 py-0.5 bg-slate-900/50 rounded border border-slate-800/40">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && <span className="text-[10px] text-slate-500 self-center">+{project.tech.length - 3}</span>}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {searchedProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-500 text-sm">
              No projects found matching your criteria.
            </p>
          </div>
        )}
      </div>

      {/* FULL EXPANDED VIEW MODAL OVERLAY */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
          >
            <motion.div
              initial={{ scale: 0.96, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl max-h-[85vh] overflow-hidden rounded-[24px] border border-slate-800 bg-[#0d0d11] flex flex-col md:flex-row"
            >
              {/* Media Preview Drawer */}
              <div className="w-full md:w-[45%] bg-black/40 flex flex-col items-center justify-center p-6 border-b md:border-b-0 md:border-r border-slate-800">
                {selectedProject.images?.length > 0 ? (
                  <div className="w-full h-full flex flex-col justify-center items-center">
                    <img
                      src={`/${selectedProject.images[currentImage]}`}
                      alt={selectedProject.title}
                      className="max-w-full max-h-[260px] md:max-h-[380px] object-contain rounded-lg shadow-2xl"
                    />
                    {selectedProject.images.length > 1 && (
                      <div className="flex flex-wrap gap-1.5 mt-4 justify-center overflow-x-auto max-w-full py-1">
                        {selectedProject.images.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentImage(idx)}
                            className={`w-10 h-10 rounded border overflow-hidden flex-shrink-0 transition-all ${idx === currentImage ? 'border-violet-500 scale-105' : 'border-slate-800 opacity-60'}`}
                          >
                            <img src={`/${img}`} alt="" className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-slate-600 flex flex-col items-center text-center">
                    <Layers className="w-12 h-12 mb-2 opacity-40" />
                    <p className="text-xs font-mono">Documentation Only Workspace</p>
                  </div>
                )}
              </div>

              {/* Extended Details Drawer */}
              <div className="w-full md:w-[55%] overflow-y-auto p-6 md:p-8 flex flex-col justify-between text-left">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-violet-400 text-xs font-semibold tracking-wider uppercase block mb-1">
                        {selectedProject.subCategory || selectedProject.category}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                        {selectedProject.title}
                      </h2>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-slate-500 hover:text-white text-sm p-1"
                    >
                      ✕
                    </button>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>

                  {selectedProject.highlights?.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-white font-semibold text-sm mb-2.5">Key Highlights</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {selectedProject.highlights.map((item) => (
                          <li key={item} className="text-slate-300 text-xs flex items-center gap-2 bg-slate-900/40 p-2 rounded-lg border border-slate-800/60">
                            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" />
                            <span className="line-clamp-1">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-white font-semibold text-sm mb-2.5">Technologies Architecture</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs bg-slate-900 border border-slate-800 text-slate-300 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Drawer Action links */}
                {selectedProject.githubUrl && (
                  <div className="pt-4 border-t border-slate-900 mt-4">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium text-sm transition-transform hover:scale-[1.01]"
                    >
                      <Github className="w-4 h-4" /> Code Base Repository
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}