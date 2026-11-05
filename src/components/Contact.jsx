import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("kumarkishorekalathur@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const linkedinURL = "https://www.linkedin.com/in/kalathurchenchukishorekumar/";
    const formatted = `Name: ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject}\n\nMessage:\n${form.message}`;

    navigator.clipboard.writeText(formatted).then(() => {
      setSubmitted(true);
      setTimeout(() => {
        window.open(linkedinURL, "_blank");
      }, 1200);
    });
  };

  return (
    <section id="contact-section" className="py-24 relative overflow-hidden border-t border-slate-200 dark:border-slate-900 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 text-center">
          <span className="section-tag mb-3">Direct Engagement</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Connect & Collaborate
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Open to AI Engineer, Senior Machine Learning, Generative AI, and Perception roles, as well as high-impact engineering collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Email Card */}
            <div className="glass-card p-5 border border-slate-200 dark:border-slate-800">
              <div className="text-[0.68rem] font-mono uppercase tracking-wider text-sky-700 dark:text-cyan-400 font-bold mb-1">
                Direct Email
              </div>
              <div className="flex items-center justify-between gap-2 mt-1">
                <a
                  href="mailto:kumarkishorekalathur@gmail.com"
                  className="text-sm font-semibold text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-cyan-400 transition-colors truncate"
                >
                  kumarkishorekalathur@gmail.com
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex-shrink-0"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="glass-card p-5 border border-slate-200 dark:border-slate-800">
              <div className="text-[0.68rem] font-mono uppercase tracking-wider text-sky-700 dark:text-cyan-400 font-bold mb-1">
                Phone / WhatsApp
              </div>
              <a
                href="tel:+916301883597"
                className="text-sm font-semibold text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-cyan-400 transition-colors"
              >
                +91-6301883597
              </a>
            </div>

            {/* LinkedIn Card */}
            <div className="glass-card p-5 border border-slate-200 dark:border-slate-800">
              <div className="text-[0.68rem] font-mono uppercase tracking-wider text-sky-700 dark:text-cyan-400 font-bold mb-1">
                LinkedIn Professional Network
              </div>
              <a
                href="https://www.linkedin.com/in/kalathurchenchukishorekumar/"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-cyan-400 transition-colors flex items-center justify-between"
              >
                <span>in/kalathurchenchukishorekumar</span>
                <span>↗</span>
              </a>
            </div>

            {/* Google Scholar & alphaXiv Card */}
            <div className="glass-card p-5 border border-slate-200 dark:border-slate-800">
              <div className="text-[0.68rem] font-mono uppercase tracking-wider text-sky-700 dark:text-cyan-400 font-bold mb-1">
                Research & Academic Profiles
              </div>
              <div className="mt-2 flex flex-col gap-1.5 text-xs font-semibold">
                <a
                  href="https://scholar.google.com/citations?user=vsBFI_YAAAAJ&hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-600 dark:text-cyan-400 hover:underline flex items-center justify-between"
                >
                  <span>Google Scholar Citations</span>
                  <span>↗</span>
                </a>
                <a
                  href="https://www.alphaxiv.org/@kalathur-chenchu-kishore-kumar"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center justify-between"
                >
                  <span>alphaXiv Profile (@kalathur-chenchu-kishore-kumar)</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="glass-card p-5 border border-slate-200 dark:border-slate-800">
              <div className="text-[0.68rem] font-mono uppercase tracking-wider text-sky-700 dark:text-cyan-400 font-bold mb-1">
                GitHub Repositories
              </div>
              <a
                href="https://github.com/kalathurkishore"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-cyan-400 transition-colors flex items-center justify-between"
              >
                <span>github.com/kalathurkishore</span>
                <span>↗</span>
              </a>
            </div>

            {/* Location Pill */}
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 shadow-sm">
              <span className="text-slate-900 dark:text-slate-200 font-semibold">Location Base: </span>
              Chennai / Bengaluru, India (Open to global / hybrid opportunities)
            </div>

          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card p-7 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-2xl space-y-4"
            >
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Submitting will copy your formatted message and redirect directly to Kishore&apos;s LinkedIn messenger for quick response.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:border-sky-500 dark:focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-sky-500 dark:focus:ring-cyan-500"
                    placeholder="Engineering Leader / Recruiter"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:border-sky-500 dark:focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-sky-500 dark:focus:ring-cyan-500"
                    placeholder="name@company.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Subject / Role Discussion
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:border-sky-500 dark:focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-sky-500 dark:focus:ring-cyan-500"
                  placeholder="AI Engineer Opportunity / Research Collaboration"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Message Details
                </label>
                <textarea
                  rows="4"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:border-sky-500 dark:focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-sky-500 dark:focus:ring-cyan-500"
                  placeholder="Describe the opportunity, technical scope, or discussion topic..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-sky-600 to-cyan-600 dark:from-cyan-500 dark:to-sky-600 text-white dark:text-slate-950 shadow-md shadow-sky-600/20 dark:shadow-cyan-500/20 hover:from-sky-500 hover:to-cyan-500 transition-all font-sans"
              >
                {submitted
                  ? "✓ Copied! Redirecting to LinkedIn..."
                  : "Send Message via LinkedIn / Copy Details"}
              </button>

              {submitted && (
                <div className="p-3 rounded-xl bg-sky-50 dark:bg-cyan-950/80 border border-sky-200 dark:border-cyan-800/80 text-xs text-sky-800 dark:text-cyan-300 text-center font-medium">
                  Your message has been copied to your clipboard. You are being redirected to LinkedIn—simply paste and send!
                </div>
              )}
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
