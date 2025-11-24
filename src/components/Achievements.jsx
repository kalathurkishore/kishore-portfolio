import React from "react";
import { motion } from "framer-motion";
import profile from "../data/profileData.json";

export default function Achievements() {
  const { achievements } = profile;

  return (
    <section className="py-16 md:py-20 bg-slate-100">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-8 text-center relative">
          <div className="section-title-big absolute -top-6 left-1/2 -translate-x-1/2 opacity-30 select-none">
            Extras
          </div>
          <h2 className="section-title-main relative inline-block">
            Achievements & Extras
          </h2>
        </div>
        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="space-y-2 text-sm text-slate-700 max-w-3xl mx-auto"
        >
          {achievements.map((a) => (
            <li key={a}>• {a}</li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}