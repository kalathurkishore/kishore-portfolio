import React from "react";
import { motion } from "framer-motion";
import profile from "../data/profileData.json";

export default function Publications() {
    const { publications } = profile;

    if (!publications || publications.length === 0) return null;

    return (
        <section id="publications-section" className="py-16 md:py-20 bg-white">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
                <div className="mb-10 text-center relative">
                    <div className="section-title-big absolute -top-6 left-1/2 -translate-x-1/2 opacity-30 select-none">
                        Research
                    </div>
                    <h2 className="section-title-main relative inline-block">
                        Publications
                    </h2>
                    <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto">
                        Academic research contributions in AI, multi-agent systems, and machine learning.
                    </p>
                </div>

                <div className="space-y-6">
                    {publications.map((pub, idx) => (
                        <motion.div
                            key={pub.arxivId}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="rounded-2xl bg-gradient-to-br from-sky-50 via-white to-indigo-50 p-6 md:p-8 shadow-sm border border-slate-100"
                        >
                            {/* Paper Title */}
                            <a
                                href={pub.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg md:text-xl font-bold text-slate-900 hover:text-sky-700 transition-colors block"
                            >
                                {pub.title}
                            </a>

                            {/* Authors & Venue */}
                            <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-slate-600">
                                <span>{pub.authors.join(", ")}</span>
                                <span className="text-slate-300">•</span>
                                <span className="font-medium text-sky-600">{pub.venue}</span>
                                <span className="text-slate-300">•</span>
                                <span>{pub.year}</span>
                            </div>

                            {/* Abstract / Summary */}
                            <div className="mt-4">
                                <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 mb-2">
                                    Abstract
                                </h4>
                                <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                                    {pub.abstract}
                                </p>
                            </div>

                            {/* Key Contributions */}
                            {pub.contributions && pub.contributions.length > 0 && (
                                <div className="mt-4">
                                    <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 mb-2">
                                        Key Contributions
                                    </h4>
                                    <ul className="space-y-1.5 text-sm text-slate-700">
                                        {pub.contributions.map((c, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="text-sky-500 mt-1">▸</span>
                                                <span>{c}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Tags & Links */}
                            <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                                <div className="flex flex-wrap gap-2">
                                    {pub.tags && pub.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-700"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={pub.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700 transition-colors"
                                >
                                    📄 View on arXiv
                                    <span className="text-sky-200">→</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
