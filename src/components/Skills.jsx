import React from "react";
import { motion } from "framer-motion";
import profile from "../data/profileData.json";

export default function Skills() {
  const { skills } = profile;

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 text-center relative">
          <div className="section-title-big absolute -top-6 left-1/2 -translate-x-1/2 opacity-30 select-none">
            Skills
          </div>
          <h2 className="section-title-main relative inline-block">
            Skills & Stack
          </h2>
          <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto">
            A closer look at the tools, frameworks, and concepts I use across computer vision,
            generative modeling and agentic systems.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(skills).map(([group, items], idx) => (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="rounded-2xl bg-slate-50 p-5 shadow-sm border border-slate-100 text-sm"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {group}
              </div>
              <ul className="mt-3 space-y-1 text-xs md:text-sm text-slate-700">
                {items.map((s) => (
                  <li key={s}>• {s}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}