import React from "react";
import { motion } from "framer-motion";
import profile from "../data/profileData.json";

export default function About() {
  const { short_paragraphs, pillars, details } = profile.about;

  return (
    <section id="about-section" className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 text-center">
          <span className="section-tag mb-3">Professional Trajectory</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineering Philosophy & Breadth
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Taking complex machine intelligence problems from first-principles formulation to distributed training, GPU acceleration, and robust production inference.
          </p>
        </div>

        {/* Narrative & Quick Facts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Narrative Paragraphs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-4 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal"
          >
            {short_paragraphs.map((p, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200/90 dark:border-slate-800/70 shadow-sm"
              >
                <p>{p}</p>
              </div>
            ))}
          </motion.div>

          {/* Quick Details Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 glass-card p-6 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-xl"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-sky-700 dark:text-cyan-400 mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">
              Candidate Profile & Research
            </h3>
            <dl className="space-y-2.5 text-xs sm:text-sm">
              {details.map(([label, value]) => {
                let link = null;
                let displayValue = value;

                if (value.includes("@")) {
                  link = `mailto:${value}`;
                } else if (value.startsWith("+")) {
                  link = `tel:${value}`;
                } else if (value.startsWith("http") || value.includes(".com") || value.includes(".org")) {
                  link = value.startsWith("http") ? value : `https://${value}`;
                  if (label === "Google Scholar") {
                    displayValue = "Scholar Profile";
                  } else if (label === "alphaXiv Profile") {
                    displayValue = "alphaXiv Profile";
                  } else if (label === "LinkedIn") {
                    displayValue = "LinkedIn Profile";
                  } else if (label === "GitHub") {
                    displayValue = "github.com/kalathurkishore";
                  }
                }

                return (
                  <div
                    key={label}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2 border-b border-slate-100 dark:border-slate-800/50 gap-1 text-xs sm:text-sm"
                  >
                    <dt className="text-slate-500 dark:text-slate-400 font-medium sm:w-5/12 shrink-0">
                      {label}
                    </dt>
                    <dd className="text-slate-800 dark:text-slate-200 sm:w-7/12 sm:text-right font-medium min-w-0 flex sm:justify-end">
                      {link ? (
                        <a
                          href={link}
                          target={link.startsWith("mailto") || link.startsWith("tel") ? "_self" : "_blank"}
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-sky-600 dark:text-cyan-400 hover:text-sky-700 dark:hover:text-cyan-300 hover:underline transition-colors max-w-full break-all sm:break-normal"
                          title={value}
                        >
                          <span className="truncate">{displayValue}</span>
                          {!link.startsWith("mailto") && !link.startsWith("tel") && (
                            <svg className="w-3.5 h-3.5 shrink-0 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          )}
                        </a>
                      ) : (
                        <span className="break-words">{displayValue}</span>
                      )}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </motion.div>

        </div>

        {/* 3 Core Pillars */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pil, idx) => (
            <motion.div
              key={pil.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card glass-card-hover p-6 border border-slate-200 dark:border-slate-800 relative group"
            >
              <div className="h-10 w-10 rounded-xl bg-sky-50 dark:bg-cyan-950/80 border border-sky-200 dark:border-cyan-800/50 flex items-center justify-center text-sky-700 dark:text-cyan-400 font-bold mb-4 font-mono">
                0{idx + 1}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-cyan-400 transition-colors">
                {pil.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {pil.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}