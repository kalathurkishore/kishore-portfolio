import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profile from "../data/profileData.json";

export default function Hero() {
  const { name, tagline, roles, location, stats } = profile.hero;
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [roles.length]);

  const resumeUrl = import.meta.env.BASE_URL + "Kalathur_Chenchu_Kishore_Kumar.pdf";

  return (
    <section
      id="home-section"
      className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden"
    >
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-sky-400/10 via-cyan-400/10 to-indigo-400/10 dark:from-cyan-500/15 dark:via-sky-500/10 dark:to-indigo-500/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 -right-20 w-[350px] h-[350px] bg-indigo-400/10 dark:bg-indigo-500/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Positioning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 shadow-sm mb-5">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-slate-900 dark:text-slate-100">Perception Engineer @ Valeo</span>
              <span className="text-slate-400 dark:text-slate-600">•</span>
              <span className="text-sky-600 dark:text-cyan-400 font-semibold">IIT Jodhpur AI M.Tech</span>
            </div>

            {/* Name */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {name}
            </h1>

            {/* Steady Role Rotator: Ample line height, zero vertical displacement, NO clipping */}
            <div className="mt-4 min-h-[4.2rem] sm:min-h-[3rem] flex flex-wrap items-baseline justify-center lg:justify-start gap-x-2.5 text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-100 overflow-visible">
              <span className="shrink-0 text-slate-700 dark:text-slate-300">I specialize in</span>
              <div className="relative inline-flex items-baseline overflow-visible">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[roleIndex]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="gradient-accent font-extrabold inline-block pb-1.5 pt-0.5 leading-snug"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Tagline */}
            <p className="mt-5 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {tagline}
            </p>

            {/* Domain Badges */}
            <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="px-2.5 py-1 text-[0.72rem] font-medium rounded-md bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                3D Object Detection (DLA-34)
              </span>
              <span className="px-2.5 py-1 text-[0.72rem] font-medium rounded-md bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                GPU Acceleration (TF32 / cuDNN)
              </span>
              <span className="px-2.5 py-1 text-[0.72rem] font-medium rounded-md bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                LangGraph Multi-Agent Workflows
              </span>
              <span className="px-2.5 py-1 text-[0.72rem] font-medium rounded-md bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                OpenVINO 60 FPS Edge AI
              </span>
              <span className="px-2.5 py-1 text-[0.72rem] font-medium rounded-md bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                NeRF & Diffusion Models
              </span>
            </div>

            {/* Action CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm">
              <a
                href="#projects-section"
                className="rounded-xl bg-gradient-to-r from-sky-600 to-cyan-600 dark:from-cyan-500 dark:to-sky-600 px-6 py-3 font-semibold text-white dark:text-slate-950 shadow-md shadow-sky-600/20 dark:shadow-cyan-500/25 hover:from-sky-500 hover:to-cyan-500 hover:scale-[1.02] transition-all"
              >
                Explore Projects
              </a>
              <a
                href="#experience-section"
                className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-5 py-3 font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-sm"
              >
                View Experience
              </a>
              <a
                href={resumeUrl}
                download="Kalathur_Chenchu_Kishore_Kumar.pdf"
                className="rounded-xl bg-sky-50 dark:bg-slate-900/70 border border-sky-300 dark:border-cyan-800/60 px-5 py-3 font-medium text-sky-700 dark:text-cyan-400 hover:bg-sky-100 dark:hover:bg-cyan-950/40 transition-all inline-flex items-center gap-2 shadow-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
              <a
                href="#contact-section"
                className="rounded-xl px-4 py-3 font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Contact Me →
              </a>
            </div>

            {/* Work-Specific Engineering Metric Cards (Replacing generic stat strip) */}
            <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800/80">
              <div className="text-[0.68rem] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 text-left">
                Key Technical Benchmarks & Publications
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
                {stats.map((st) => (
                  <div
                    key={st.badge}
                    className="p-3 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800 shadow-sm text-left flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-[0.68rem] font-mono uppercase tracking-wider text-sky-600 dark:text-cyan-400 font-bold mb-1 truncate">
                        {st.badge}
                      </div>
                      <div className="text-sm font-extrabold text-slate-900 dark:text-slate-100 font-mono tracking-tight">
                        {st.value}
                      </div>
                    </div>
                    <div className="text-[0.68rem] text-slate-500 dark:text-slate-400 mt-2 font-medium">
                      {st.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Elaborative Profile Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm">
              {/* Radial gradient rings */}
              <div className="absolute inset-0 -m-3 rounded-3xl bg-gradient-to-tr from-sky-400/20 via-cyan-400/15 to-indigo-400/20 dark:from-cyan-500/20 dark:via-sky-500/10 dark:to-indigo-500/25 blur-xl opacity-75" />
              
              {/* Glass Card */}
              <div className="relative glass-card p-6 shadow-xl border border-slate-200 dark:border-slate-800">
                {/* Header pill */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5 font-mono text-sky-600 dark:text-cyan-400 font-bold text-[0.7rem]">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    PERCEPTION & AI SYSTEMS
                  </span>
                  <span>{location}</span>
                </div>

                {/* Avatar Frame */}
                <div className="relative my-4 mx-auto h-48 w-48 rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-700/80 bg-slate-100 dark:bg-slate-900 shadow-inner group">
                  <img
                    src={import.meta.env.BASE_URL + "Kalathur_Chenchu_Kishore_Kumar.jpg"}
                    alt="Kalathur Chenchu Kishore Kumar"
                    className="h-full w-full object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-3 right-3 text-left">
                    <div className="text-xs font-bold text-white">Kalathur Kishore Kumar</div>
                    <div className="text-[0.68rem] text-cyan-300">IIT Jodhpur AI • M.Tech</div>
                  </div>
                </div>

                {/* Elaborative, Specific Core Stack Breakdown */}
                <div className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300 pt-2 border-t border-slate-200 dark:border-slate-800">
                  
                  {/* Current Position */}
                  <div className="flex justify-between items-center py-0.5">
                    <span className="text-slate-500 font-medium">Role:</span>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">Perception Engineer @ Valeo</span>
                  </div>

                  {/* 3D Perception & Vision Stack */}
                  <div className="pt-1">
                    <div className="text-[0.68rem] font-mono uppercase tracking-wider text-sky-600 dark:text-cyan-400 font-bold">
                      3D Perception & Vision:
                    </div>
                    <div className="text-[0.7rem] font-mono text-slate-600 dark:text-slate-300 mt-0.5 leading-snug">
                      DLA-34 • 3D Bounding Boxes • BEV Evaluation • NeRF • COLMAP
                    </div>
                  </div>

                  {/* GenAI & Agent Stack */}
                  <div className="pt-1">
                    <div className="text-[0.68rem] font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold">
                      GenAI & Agent Architectures:
                    </div>
                    <div className="text-[0.7rem] font-mono text-slate-600 dark:text-slate-300 mt-0.5 leading-snug">
                      LangGraph • DALL-E 3 • Vision-Language Models • ControlNet • RAG
                    </div>
                  </div>

                  {/* GPU & Edge Systems Stack */}
                  <div className="pt-1">
                    <div className="text-[0.68rem] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold">
                      GPU Acceleration & Edge Systems:
                    </div>
                    <div className="text-[0.7rem] font-mono text-slate-600 dark:text-slate-300 mt-0.5 leading-snug">
                      TF32 • cuDNN Tuning • CUDA Streams • OpenVINO (INT8) • Modern C++
                    </div>
                  </div>

                </div>

                {/* Research Profiles Links Strip */}
                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-around text-xs font-semibold">
                  <a
                    href="https://scholar.google.com/citations?user=vsBFI_YAAAAJ&hl=en"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-600 dark:text-cyan-400 hover:underline flex items-center gap-1 transition-colors"
                  >
                    <span>Scholar</span>
                    <span>↗</span>
                  </a>
                  <span className="text-slate-300 dark:text-slate-700">•</span>
                  <a
                    href="https://www.alphaxiv.org/@kalathur-chenchu-kishore-kumar"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-600 dark:text-cyan-400 hover:underline flex items-center gap-1 transition-colors"
                  >
                    <span>alphaXiv</span>
                    <span>↗</span>
                  </a>
                  <span className="text-slate-300 dark:text-slate-700">•</span>
                  <a
                    href="https://github.com/kalathurkishore"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    <span>GitHub</span>
                  </a>
                  <span className="text-slate-300 dark:text-slate-700">•</span>
                  <a
                    href="https://www.linkedin.com/in/kalathurchenchukishorekumar/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    <span>LinkedIn</span>
                  </a>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}