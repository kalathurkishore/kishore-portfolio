import React from "react";
import { motion } from "framer-motion";
import profile from "../data/profileData.json";

export default function Hero() {
  const { name, subheading, tagline, roles, location } = profile.hero;
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2200);
    return () => clearInterval(id);
  }, [roles.length]);

  return (
    <section
      id="home-section"
      className="hero-bg min-h-screen flex items-center"
    >
      <div className="mx-auto flex max-w-6xl flex-col px-4 pt-24 pb-16 md:flex-row md:items-center md:px-6">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              {subheading}
            </div>
            <h1 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900">
              {name}
            </h1>
            <div className="mt-3 text-lg md:text-2xl text-slate-700">
              I&apos;m a{" "}
              <span className="relative inline-flex h-8 overflow-hidden align-baseline">
                <motion.span
                  key={roles[index]}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="font-semibold text-sky-600"
                >
                  {roles[index]}
                </motion.span>
              </span>
            </div>
            <p className="mt-4 max-w-xl text-sm md:text-base text-slate-600 mx-auto md:mx-0">
              {tagline}
            </p>
            <p className="mt-2 max-w-xl text-xs md:text-sm text-slate-500 mx-auto md:mx-0">
              Currently focused on 3D computer vision, unsafe-driving analytics, document understanding
              and GenAI-powered agents for enterprise workflows.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start text-xs">
              <span className="rounded-full bg-white/80 px-4 py-2 shadow-sm border border-slate-200 text-slate-600">
                {location}
              </span>
              <a
                href="#contact-section"
                className="rounded-full bg-sky-600 px-5 py-2 text-white shadow-md hover:bg-sky-700"
              >
                Let&apos;s Connect
              </a>
              <a
                href={import.meta.env.BASE_URL + "Kalathur_Chenchu_Kishore_Kumar.pdf"}
                download
                className="rounded-full border border-sky-500 px-4 py-2 text-sky-600 hover:bg-sky-50"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
        <div className="mt-10 flex-1 md:mt-0 md:flex md:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="relative h-64 w-64 md:h-80 md:w-80"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sky-400/30 via-violet-300/20 to-emerald-300/30 blur-2xl" />
            <div className="relative flex h-full w-full items-center justify-center rounded-3xl border border-white/70 bg-white/90 shadow-xl">
              <div className="h-40 w-40 md:h-52 md:w-52 rounded-full overflow-hidden border-4 border-sky-100 bg-slate-100">
                {/* PLACEHOLDER PROFILE IMAGE
                   Replace /profile.jpg with your own image by:
                   1. Putting profile.jpg into the public/ folder of this project
                   2. Or changing the src below to your filename in public/
                */}
                <img
  src={import.meta.env.BASE_URL + "Kalathur_Chenchu_Kishore_Kumar.jpg"}
  alt="Kishore Kumar"
  className="h-full w-full object-cover object-top scale-110"
/>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}