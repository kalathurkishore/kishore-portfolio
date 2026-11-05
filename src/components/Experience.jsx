import React from "react";
import { motion } from "framer-motion";
import profile from "../data/profileData.json";

export default function Experience() {
  const { experience } = profile;

  return (
    <section id="experience-section" className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 text-center">
          <span className="section-tag mb-3">Industry Leadership</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A track record of engineering contributions spanning autonomous perception at Valeo, enterprise GenAI at Wipro, edge vision R&D at HCLTech, and high-throughput data systems at TCS.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-sky-500 before:via-slate-300 dark:before:via-slate-800 before:to-transparent">
          {experience.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={item.company + idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col sm:flex-row items-start ${
                  isEven ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline node icon */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-slate-950 border-2 border-sky-600 dark:border-cyan-400 shadow-md shadow-sky-500/20 z-10 text-sky-600 dark:text-cyan-400 font-bold text-xs">
                  {idx + 1}
                </div>

                {/* Card Container */}
                <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                  <div className="glass-card glass-card-hover p-6 sm:p-7 border border-slate-200 dark:border-slate-800">
                    
                    {/* Header info */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800/80">
                      <div>
                        <span className="text-[0.68rem] font-mono uppercase tracking-wider text-sky-600 dark:text-cyan-400 font-bold">
                          {item.period} • {item.location}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-1">
                          {item.role}
                        </h3>
                        <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                          {item.company}
                        </div>
                      </div>
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 dark:bg-cyan-950/60 border border-sky-200 dark:border-cyan-800/60 text-sky-700 dark:text-cyan-300">
                        {item.badge}
                      </span>
                    </div>

                    {/* Focus Summary */}
                    <div className="mt-3 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                      <span className="text-slate-400 dark:text-slate-500 font-normal">Domain Focus: </span>
                      {item.focus}
                    </div>

                    {/* Responsibilities */}
                    <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      {item.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5">
                          <span className="text-sky-600 dark:text-cyan-400 mt-1 flex-shrink-0 text-xs">▸</span>
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack Chips */}
                    <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex flex-wrap gap-1.5">
                      {item.tech_stack.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-[0.7rem] font-mono rounded-md bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}