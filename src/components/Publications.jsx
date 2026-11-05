import React, { useState } from "react";
import { motion } from "framer-motion";
import profile from "../data/profileData.json";

export default function Publications() {
  const { publications, thesis } = profile;
  const [expandedAbstracts, setExpandedAbstracts] = useState({});

  const toggleAbstract = (id) => {
    setExpandedAbstracts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="publications-section" className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 text-center">
          <span className="section-tag mb-3">Research & Industry Publications</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Peer-Reviewed Papers & White Papers
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Formal research contributions in massive multi-agent systems, long-horizon automotive robotics, and spatiotemporal routing optimization.
          </p>
          
          {/* Quick Profile Badges */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://scholar.google.com/citations?user=vsBFI_YAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-xs font-semibold text-sky-700 dark:text-cyan-400 hover:border-sky-500 shadow-sm transition-colors"
            >
              <span>🎓 Google Scholar Citations Profile</span>
              <span>↗</span>
            </a>
            <a
              href="https://www.alphaxiv.org/@kalathur-chenchu-kishore-kumar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-xs font-semibold text-indigo-700 dark:text-indigo-400 hover:border-indigo-500 shadow-sm transition-colors"
            >
              <span>🔬 Kalathur Chenchu Kishore Kumar on alphaXiv</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Publications Column */}
          <div className="lg:col-span-8 space-y-8">
            {publications.map((pub, idx) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-6 sm:p-8 border border-slate-200 dark:border-slate-800 relative"
              >
                {/* Badge & Links */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-1 text-xs font-mono font-bold rounded-md bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-700/60 text-indigo-700 dark:text-indigo-300">
                      {pub.type}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                      {pub.venue} • {pub.year}
                    </span>
                  </div>

                  {/* Action Link Buttons */}
                  <div className="flex items-center gap-2 flex-wrap">
                    {pub.primaryLink && (
                      <a
                        href={pub.primaryLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-sky-600 dark:bg-cyan-500 text-white dark:text-slate-950 hover:bg-sky-500 dark:hover:bg-cyan-400 transition-colors shadow-sm"
                      >
                        <span>{pub.primaryLinkLabel || "View Publication"}</span>
                        <span>↗</span>
                      </a>
                    )}
                    {pub.pdfDownload && (
                      <a
                        href={import.meta.env.BASE_URL + pub.pdfDownload}
                        download
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-300 dark:border-slate-700"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>Download PDF</span>
                      </a>
                    )}
                    {pub.scholarLink && (
                      <a
                        href={pub.scholarLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-cyan-400 transition-colors"
                        title="Google Scholar Citation"
                      >
                        <span>Scholar</span>
                        <span>↗</span>
                      </a>
                    )}
                    {pub.arxivLink && (
                      <a
                        href={pub.arxivLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-lg text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-cyan-400 transition-colors"
                        title="arXiv Preprint"
                      >
                        <span>arXiv</span>
                        <span>↗</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="mt-4 text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
                  {pub.title}
                </h3>

                {/* Authors */}
                <div className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  <span className="text-slate-500 font-medium">Authors: </span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">
                    {pub.authors.join(", ")}
                  </span>
                </div>

                {/* Abstract Preview */}
                <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-sky-700 dark:text-cyan-400 font-semibold">
                      Executive Abstract
                    </span>
                    <button
                      onClick={() => toggleAbstract(pub.id)}
                      className="text-xs font-semibold text-sky-600 dark:text-cyan-400 hover:underline transition-colors"
                    >
                      {expandedAbstracts[pub.id] ? "Collapse ▲" : "Read Full Abstract ▼"}
                    </button>
                  </div>
                  <p
                    className={`mt-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed ${
                      expandedAbstracts[pub.id] ? "" : "line-clamp-3"
                    }`}
                  >
                    {pub.abstract}
                  </p>
                </div>

                {/* Key Contributions */}
                {pub.contributions && (
                  <div className="mt-5">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-2">
                      Key Architectural Contributions
                    </h4>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      {pub.contributions.map((c, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2">
                          <span className="text-sky-600 dark:text-cyan-400 mt-1 flex-shrink-0 text-xs">▸</span>
                          <span className="leading-relaxed">{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tags */}
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-1.5">
                  {pub.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </motion.div>
            ))}
          </div>

          {/* Thesis Sidebar Card */}
          <div className="lg:col-span-4">
            {thesis && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass-card p-6 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-xl"
              >
                <div className="inline-block px-2.5 py-1 text-[0.68rem] font-mono font-bold rounded-md bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-700/60 text-emerald-700 dark:text-emerald-300 mb-3">
                  IIT Jodhpur • Master's Thesis
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                  {thesis.title}
                </h3>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">
                  {thesis.institute} • {thesis.year}
                </div>

                <p className="mt-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {thesis.summary}
                </p>

                <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <div className="text-xs font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-semibold mb-2">
                    Verified Thesis Outcomes
                  </div>
                  <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                    {thesis.impact.map((imp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-600 dark:text-emerald-400 mt-0.5 text-xs">✓</span>
                        <span>{imp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200 dark:border-slate-800/80 text-[0.68rem] text-slate-500 dark:text-slate-400 font-mono">
                  M.Tech in Artificial Intelligence (CGPA: 7.56/10)
                </div>
              </motion.div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
