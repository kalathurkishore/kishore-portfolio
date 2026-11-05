import React, { useState } from "react";
import { motion } from "framer-motion";
import profile from "../data/profileData.json";

export default function Skills() {
  const { skills } = profile;
  const categories = Object.keys(skills);
  const [activeCategory, setActiveCategory] = useState("all");

  const categoryIcons = {
    "Machine Learning & Applied AI": (
      <svg className="w-5 h-5 text-sky-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    "Generative AI & LLM Engineering": (
      <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    "Deep Learning & Computer Vision": (
      <svg className="w-5 h-5 text-cyan-600 dark:text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    "AI Infrastructure & MLOps": (
      <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    "Software & Systems Engineering": (
      <svg className="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  };

  const displayedCategories =
    activeCategory === "all"
      ? categories
      : categories.filter((c) => c === activeCategory);

  return (
    <section id="skills-section" className="py-24 relative bg-slate-100/60 dark:bg-slate-950/70 border-t border-slate-200 dark:border-slate-900 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="section-tag mb-3">Technical Repertoire</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Core AI Expertise & Systems Stack
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Organized into five broad engineering domains—grounded in verified production experience, research publications, and optimization benchmarks.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeCategory === "all"
                ? "bg-sky-600 dark:bg-cyan-500 text-white dark:text-slate-950 shadow-md shadow-sky-600/20 dark:shadow-cyan-500/20"
                : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-200 dark:border-slate-800 shadow-sm"
            }`}
          >
            All Disciplines ({categories.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-sky-600 dark:bg-cyan-500 text-white dark:text-slate-950 shadow-md shadow-sky-600/20 dark:shadow-cyan-500/20"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-200 dark:border-slate-800 shadow-sm"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((cat, idx) => {
            const items = skills[cat];
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-card glass-card-hover p-6 border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                      {categoryIcons[cat]}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">
                        {cat}
                      </h3>
                      <span className="text-[0.68rem] text-slate-500 font-mono">
                        {items.length} verified technologies
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 mt-4">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2 group"
                      >
                        <span className="text-sky-600 dark:text-cyan-400 text-xs mt-0.5">•</span>
                        <span className="group-hover:text-sky-700 dark:group-hover:text-cyan-300 transition-colors">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-[0.68rem] text-slate-500 font-mono">
                  <span>DISCIPLINE {idx + 1} OF 5</span>
                  <span className="text-sky-600 dark:text-cyan-400 font-semibold">VERIFIED STACK</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}