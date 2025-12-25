import React from "react";
import { motion } from "framer-motion";
import profile from "../data/profileData.json";

export default function Experience() {
  const { experience, education, thesis } = profile;

  return (
    <section id="resume-section" className="py-16 md:py-20 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 text-center relative">
          <div className="section-title-big absolute -top-6 left-1/2 -translate-x-1/2 opacity-30 select-none">
            Experience
          </div>
          <h2 className="section-title-main relative inline-block">
            Experience & Education
          </h2>
          <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto">
            A quick overview of my journey across Computer Vision, Generative AI and data-driven optimization.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-[1.4fr,1fr]">
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Professional Experience
            </h3>
            <div className="space-y-4">
              {experience.map((item, idx) => (
                <motion.div
                  key={item.company + idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="rounded-2xl bg-white p-4 shadow-sm border border-slate-100"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <div className="text-xs font-semibold text-sky-600">
                        {item.period} • {item.location}
                      </div>
                      <h4 className="mt-1 text-sm md:text-base font-semibold text-slate-900">
                        {item.role}
                      </h4>
                      <div className="text-xs text-slate-500">{item.company}</div>
                    </div>
                    <span className="rounded-full bg-sky-50 px-3 py-1 text-[0.7rem] text-sky-700">
                      {item.focus}
                    </span>
                  </div>
                  <ul className="mt-3 space-y-1.5 text-xs md:text-sm text-slate-700">
                    {item.responsibilities.map((r) => (
                      <li key={r}>• {r}</li>
                    ))}
                  </ul>
                  <div className="mt-3 flex flex-wrap gap-1.5 text-[0.7rem] text-slate-600">
                    {item.tech_stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-slate-50 px-2.5 py-1 border border-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {item.publications && item.publications.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <div className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate-500 mb-2">
                        📄 Publications
                      </div>
                      {item.publications.map((pub) => (
                        <div key={pub.arxivId} className="bg-gradient-to-r from-sky-50 to-indigo-50 rounded-xl p-3 border border-sky-100">
                          <a
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold text-sky-700 hover:text-sky-900 hover:underline transition-colors"
                          >
                            {pub.title}
                          </a>
                          <div className="text-xs text-slate-600 mt-1">
                            {pub.authors.join(", ")} • {pub.venue} ({pub.year})
                          </div>
                          <p className="text-xs text-slate-700 mt-2 leading-relaxed">
                            {pub.summary}
                          </p>
                          <div className="mt-2">
                            <a
                              href={pub.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[0.7rem] font-medium text-sky-600 hover:text-sky-800 transition-colors"
                            >
                              arXiv:{pub.arxivId} →
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Education
              </h3>
              <div className="space-y-4">
                {education.map((e, idx) => (
                  <motion.div
                    key={e.degree}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="rounded-2xl bg-white p-4 shadow-sm border border-slate-100 text-sm"
                  >
                    <div className="text-xs font-semibold text-emerald-600">
                      {e.period}
                    </div>
                    <div className="mt-1 font-semibold text-slate-900">
                      {e.degree}
                    </div>
                    <div className="text-xs text-slate-500">{e.institute}</div>
                    <ul className="mt-2 space-y-1 text-xs text-slate-700">
                      {e.details.map((d) => (
                        <li key={d}>• {d}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Masters Thesis
              </h3>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl bg-white p-4 shadow-sm border border-slate-100 text-sm"
              >
                <div className="font-semibold text-slate-900">{thesis.title}</div>
                <p className="mt-2 text-slate-700 text-xs md:text-sm">
                  {thesis.summary}
                </p>
                <div className="mt-3">
                  <div className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Problem
                  </div>
                  <p className="mt-1 text-xs text-slate-700">{thesis.problem}</p>
                </div>
                <div className="mt-3">
                  <div className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Approach
                  </div>
                  <ul className="mt-1 space-y-1 text-xs text-slate-700">
                    {thesis.approach.map((a) => (
                      <li key={a}>• {a}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-3">
                  <div className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Impact
                  </div>
                  <ul className="mt-1 space-y-1 text-xs text-slate-700">
                    {thesis.impact.map((a) => (
                      <li key={a}>• {a}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}