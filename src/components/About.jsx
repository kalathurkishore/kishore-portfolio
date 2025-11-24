import React from "react";
import { motion } from "framer-motion";
import profile from "../data/profileData.json";

export default function About() {
  const { headline, short_paragraphs, details } = profile.about;

  return (
    <section id="about-section" className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="section-title-big absolute -top-10 left-0 opacity-30 select-none">
              About
            </div>
            <h2 className="section-title-main mb-4 relative">
              {headline}
            </h2>
            <div className="space-y-3 text-sm md:text-base text-slate-600">
              {short_paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl bg-slate-50 p-5 shadow-sm border border-slate-100"
          >
            <ul className="space-y-2 text-xs md:text-sm">
  {details.map(([label, value]) => {
    let link = null;

    // Auto-detect clickables
    if (value.includes("@")) {
      link = `mailto:${value}`;
    } else if (value.startsWith("+")) {
      link = `tel:${value}`;
    } else if (value.startsWith("http") || value.includes(".com")) {
      link = value.startsWith("http") ? value : `https://${value}`;
    }

    return (
      <li key={label} className="flex gap-2">
        <span className="w-32 font-semibold text-slate-500">
          {label}:
        </span>

        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="text-sky-600 hover:text-sky-700 underline underline-offset-2"
          >
            {value}
          </a>
        ) : (
          <span className="text-slate-700">{value}</span>
        )}
      
      </li>
    );
  })}
</ul>

          </motion.div>
        </div>
      </div>
    </section>
  );
}