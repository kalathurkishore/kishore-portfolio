import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import profile from "../data/profileData.json";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/40 px-4 py-8">
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl border border-slate-200 p-6">
        <button
          className="absolute right-4 top-4 rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500 hover:bg-slate-200"
          onClick={onClose}
        >
          Close
        </button>
        <h2 className="text-lg font-semibold text-slate-900">
          {project.title}
        </h2>
        <div className="mt-1 text-xs text-slate-500">
          {project.organization} • {project.role} • {project.period}
        </div>
        <div className="mt-3 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
          Domain
        </div>
        <div className="text-xs text-slate-700">{project.domain}</div>
        <div className="mt-4">
          <div className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
            Problem
          </div>
          <p className="mt-1 text-sm text-slate-700">{project.problem}</p>
        </div>
        <div className="mt-4">
          <div className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
            Approach
          </div>
          <ul className="mt-1 space-y-1.5 text-sm text-slate-700">
            {project.approach.map((a) => (
              <li key={a}>• {a}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <div className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
            Impact
          </div>
          <ul className="mt-1 space-y-1.5 text-sm text-slate-700">
            {project.impact.map((a) => (
              <li key={a}>• {a}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 text-[0.8rem]">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-sky-50 px-3 py-1 text-sky-700 border border-sky-100"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-[0.8rem] text-slate-600">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-slate-100 px-3 py-1 text-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const { projects } = profile;
  const [selected, setSelected] = React.useState(null);

  return (
    <section id="projects-section" className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 text-center relative">
          <div className="section-title-big absolute -top-6 left-1/2 -translate-x-1/2 opacity-30 select-none">
            Projects
          </div>
          <h2 className="section-title-main relative inline-block">
            Computer Vision & GenAI Projects
          </h2>
          <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto">
            A selection of projects spanning 3D reconstruction, unsafe driving analytics,
            diffusion-based generation, incremental detection and audio-visual generative models.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.button
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => setSelected(p)}
              className="group flex flex-col rounded-2xl bg-slate-50 p-4 text-left shadow-sm border border-slate-100 hover:border-sky-300 hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm font-semibold text-slate-900">
                  {p.title}
                </h3>
                <span className="text-[0.7rem] text-slate-500">{p.period}</span>
              </div>
              <div className="mt-1 text-[0.75rem] text-slate-500">
                {p.organization} • {p.domain}
              </div>
              <p className="mt-2 line-clamp-3 text-[0.8rem] text-slate-700">
                {p.problem}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.tags.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-sky-50 px-2 py-1 text-[0.7rem] text-sky-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-3 flex items-center justify-between text-[0.75rem] text-sky-600">
                <span className="inline-flex items-center gap-1">
                  View details
                  <span className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
                <span className="text-slate-400">
                  {p.techStack.slice(0, 2).join(" • ")}
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ProjectModal project={selected} onClose={() => setSelected(null)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}