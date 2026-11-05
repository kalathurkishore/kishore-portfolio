import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profile from "../data/profileData.json";

const CaseStudyModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.3 }}
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Header */}
        <div className="pr-10">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold bg-sky-50 dark:bg-cyan-950/60 border border-sky-200 dark:border-cyan-800/60 text-sky-700 dark:text-cyan-300 mb-2">
            {project.domain}
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            {project.title}
          </h2>
          <div className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {project.organization} • {project.role} • {project.period}
          </div>
        </div>

        {/* Problem Section */}
        <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-sky-700 dark:text-cyan-400">
            Problem Statement
          </h3>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* Technical Approach */}
        <div className="mt-6">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-sky-700 dark:text-cyan-400">
            Technical Architecture & Approach
          </h3>
          <ul className="mt-2 space-y-2 text-sm text-slate-700 dark:text-slate-300">
            {project.approach.map((a, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-sky-600 dark:text-cyan-400 mt-1 flex-shrink-0 text-xs">▸</span>
                <span className="leading-relaxed">{a}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Measurable Impact */}
        <div className="mt-6">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-sky-700 dark:text-cyan-400">
            Results & Measurable Outcomes
          </h3>
          <ul className="mt-2 space-y-2 text-sm text-slate-700 dark:text-slate-300">
            {project.impact.map((imp, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0 text-xs">✓</span>
                <span className="leading-relaxed font-medium text-slate-800 dark:text-slate-200">{imp}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            Close Case Study
          </button>
        </div>

      </motion.div>
    </div>
  );
};

export default function Projects() {
  const { projects } = profile;
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("All");

  const filterTabs = [
    "All",
    "Computer Vision & Perception",
    "Generative AI & LLMs",
    "AI Infrastructure & Optimization",
    "Research & Systems",
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects-section" className="py-24 relative bg-slate-100/50 dark:bg-slate-950/60 border-t border-slate-200 dark:border-slate-900 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="section-tag mb-3">Portfolio Highlights</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured AI & Engineering Projects
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Deep technical case studies demonstrating end-to-end model development, GPU acceleration, generative AI pipelines, and edge deployments.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === tab
                  ? "bg-sky-600 dark:bg-cyan-500 text-white dark:text-slate-950 shadow-md shadow-sky-600/20 dark:shadow-cyan-500/20"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-200 dark:border-slate-800 shadow-sm"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass-card glass-card-hover p-6 border border-slate-200 dark:border-slate-800 flex flex-col justify-between group"
            >
              <div>
                {/* Top Badge Strip */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[0.68rem] font-mono text-sky-600 dark:text-cyan-400 font-bold tracking-wider uppercase">
                    {p.domain}
                  </span>
                  <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">
                    {p.period}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-cyan-400 transition-colors">
                  {p.title}
                </h3>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                  {p.organization} • {p.role}
                </div>

                {/* Problem snippet */}
                <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                  {p.problem}
                </p>

                {/* Impact Highlight */}
                {p.impact && p.impact.length > 0 && (
                  <div className="mt-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80">
                    <div className="text-[0.68rem] uppercase font-mono tracking-wider text-emerald-700 dark:text-emerald-400 mb-1 font-bold">
                      Key Benchmark
                    </div>
                    <div className="text-xs text-slate-800 dark:text-slate-200 font-medium line-clamp-2">
                      {p.impact[0]}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Tech & Action Bar */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[0.68rem] font-mono rounded bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {p.techStack.length > 4 && (
                    <span className="px-1.5 py-0.5 text-[0.68rem] font-mono text-slate-400 dark:text-slate-500">
                      +{p.techStack.length - 4}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(p)}
                  className="w-full py-2.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-sky-600 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-slate-950 hover:border-transparent transition-all flex items-center justify-center gap-2 group/btn shadow-sm"
                >
                  <span>View Technical Case Study</span>
                  <span className="group-hover/btn:translate-x-0.5 transition-transform">→</span>
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}