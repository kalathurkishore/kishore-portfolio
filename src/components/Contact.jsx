import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const linkedinURL =
      "https://www.linkedin.com/in/kalathurchenchukishorekumar/";

    const finalMessage = `
Name: ${form.name}
Email: ${form.email}
Subject: ${form.subject}
Message: ${form.message}
    `;

    // Copy message to clipboard
    navigator.clipboard.writeText(finalMessage).then(() => {
      alert(
        "Your message has been copied! You will be redirected to my LinkedIn page. Please paste and send it there."
      );
      window.open(linkedinURL, "_blank");
    });
  };

  return (
    <section
      id="contact-section"
      className="py-16 md:py-20 bg-slate-50 border-t border-slate-200"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-10 text-center relative">
          <div className="section-title-big absolute -top-6 left-1/2 -translate-x-1/2 opacity-30 select-none">
            Contact
          </div>
          <h2 className="section-title-main relative inline-block">Contact</h2>
          <p className="mt-2 text-sm text-slate-600 max-w-xl mx-auto">
            Open to roles in Computer Vision, Generative AI, and ML Engineering,
            as well as collaborations on research-oriented projects.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Left Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="space-y-3 text-sm text-slate-700"
          >
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Email
              </div>
              <a
                href="mailto:kumarkishorekalathur@gmail.com"
                className="text-sky-600 hover:text-sky-700"
              >
                kumarkishorekalathur@gmail.com
              </a>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Phone
              </div>
              <a
                href="tel:+916301883597"
                className="text-slate-700 hover:text-slate-900"
              >
                +91-6301883597
              </a>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                LinkedIn
              </div>
              <a
                href="https://www.linkedin.com/in/kalathurchenchukishorekumar/"
                target="_blank"
                rel="noreferrer"
                className="text-sky-600 hover:text-sky-700"
              >
                linkedin.com/in/kalathurchenchukishorekumar
              </a>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                GitHub
              </div>
              <a
                href="https://github.com/kalathurkishore"
                target="_blank"
                rel="noreferrer"
                className="text-sky-600 hover:text-sky-700"
              >
                github.com/kalathurkishore
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 rounded-3xl bg-white p-6 shadow-sm border border-slate-100"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-600">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-600">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                placeholder="What would you like to discuss?"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-600">
                Message
              </label>
              <textarea
                rows="4"
                name="message"
                value={form.message}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                placeholder="Write your message here..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-sky-600 py-2 text-sm font-medium text-white shadow-sm hover:bg-sky-700"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
