import React from "react";
import { motion } from "framer-motion";
import profile from "../data/profileData.json";

export default function Achievements() {
  const { education, achievements } = profile;

  return (
    <section id="education-section" className="py-24 relative bg-slate-100/60 dark:bg-slate-950/70 border-t border-slate-200 dark:border-slate-900 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 text-center">
          <span className="section-tag mb-3">Academic Foundations</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education & Honors
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Advanced degrees in Artificial Intelligence and Computer Science, supplemented by national competitive excellence and academic leadership.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card glass-card-hover p-7 border border-slate-200 dark:border-slate-800"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <span className="text-xs font-mono font-bold text-sky-700 dark:text-cyan-400 uppercase tracking-wider">
                  {edu.period}
                </span>
                <span className="px-2.5 py-0.5 text-xs font-mono font-bold rounded bg-sky-50 dark:bg-cyan-950 border border-sky-200 dark:border-cyan-800/60 text-sky-700 dark:text-cyan-300">
                  {edu.grade}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-4">
                {edu.degree}
              </h3>
              <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">
                {edu.institute}
              </div>

              <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                {edu.details.map((d, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2">
                    <span className="text-sky-600 dark:text-cyan-400 mt-0.5 text-xs">▸</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Honors and Accomplishments */}
        <div className="glass-card p-8 border border-slate-200 dark:border-slate-800">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <span className="text-sky-600 dark:text-cyan-400">★</span>
            Honors, Teaching & Community Leadership
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((ach, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80"
              >
                <div className="h-6 w-6 rounded-md bg-sky-100 dark:bg-cyan-950/80 border border-sky-200 dark:border-cyan-800/50 flex items-center justify-center text-sky-700 dark:text-cyan-400 text-xs font-bold flex-shrink-0 mt-0.5 font-mono">
                  {idx + 1}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {ach}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}