import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Expertise" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "publications", label: "Research & Papers" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleClick = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id + "-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const resumeUrl = import.meta.env.BASE_URL + "Kalathur_Chenchu_Kishore_Kumar.pdf";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-950/85 backdrop-blur-xl border-b border-slate-200/90 dark:border-slate-800/80 transition-colors duration-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        {/* Brand / Logo */}
        <button
          onClick={() => handleClick("home")}
          className="flex items-center gap-3 text-left group"
        >
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-sky-500 via-cyan-500 to-indigo-600 flex items-center justify-center text-xs font-bold text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
            KK
          </div>
          <div>
            <div className="text-sm font-bold text-slate-900 dark:text-slate-100 tracking-tight group-hover:text-sky-600 dark:group-hover:text-cyan-400 transition-colors">
              Kishore Kumar
            </div>
            <div className="text-[0.68rem] font-semibold tracking-wider uppercase text-sky-600 dark:text-cyan-400">
              AI Engineer
            </div>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs font-medium text-slate-600 dark:text-slate-300">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleClick(link.id)}
                className="px-3 py-1.5 rounded-lg hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Action Buttons & Theme Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          
          {/* Light / Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-cyan-400 transition-colors shadow-sm"
            title={theme === "dark" ? "Switch to Light Theme" : "Switch to Dark Theme"}
          >
            {theme === "dark" ? (
              // Sun icon for dark theme
              <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              // Moon icon for light theme
              <svg className="w-4 h-4 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* LinkedIn Profile */}
          <a
            href="https://www.linkedin.com/in/kalathurchenchukishorekumar/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="hidden sm:inline-flex items-center justify-center h-8 w-8 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-cyan-400 hover:border-sky-300 dark:hover:border-cyan-700 transition-colors shadow-sm"
            title="LinkedIn Profile"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>

          {/* GitHub Profile */}
          <a
            href="https://github.com/kalathurkishore"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="hidden sm:inline-flex items-center justify-center h-8 w-8 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-cyan-400 hover:border-sky-300 dark:hover:border-cyan-700 transition-colors shadow-sm"
            title="GitHub Profile"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          </a>

          {/* Research Profiles (Google Scholar & alphaXiv) */}
          <a
            href="https://scholar.google.com/citations?user=vsBFI_YAAAAJ&hl=en"
            target="_blank"
            rel="noreferrer"
            aria-label="Google Scholar"
            className="hidden sm:inline-flex items-center justify-center h-8 px-2.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[0.7rem] font-semibold text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-cyan-400 transition-colors shadow-sm"
            title="Google Scholar Profile"
          >
            Scholar
          </a>

          <a
            href="https://www.alphaxiv.org/@kalathur-chenchu-kishore-kumar"
            target="_blank"
            rel="noreferrer"
            aria-label="alphaXiv Profile"
            className="hidden sm:inline-flex items-center justify-center h-8 px-2.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[0.7rem] font-semibold text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-cyan-400 transition-colors shadow-sm"
            title="alphaXiv Profile"
          >
            alphaXiv
          </a>

          {/* Resume Download Button */}
          <a
            href={resumeUrl}
            download="Kalathur_Chenchu_Kishore_Kumar.pdf"
            className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-600 dark:from-cyan-500 dark:to-sky-600 px-3.5 py-1.5 text-xs font-semibold text-white dark:text-slate-950 shadow-md shadow-sky-600/20 dark:shadow-cyan-500/20 hover:from-sky-500 hover:to-cyan-500 transition-all"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Resume</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 px-4 pt-3 pb-6 space-y-2">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className="block w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-sky-600 dark:hover:text-cyan-400"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 flex flex-wrap gap-2">
            <a
              href="https://scholar.google.com/citations?user=vsBFI_YAAAAJ&hl=en"
              target="_blank"
              rel="noreferrer"
              className="flex-1 text-center py-2 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
            >
              Google Scholar
            </a>
            <a
              href="https://www.alphaxiv.org/@kalathur-chenchu-kishore-kumar"
              target="_blank"
              rel="noreferrer"
              className="flex-1 text-center py-2 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
            >
              alphaXiv
            </a>
            <a
              href="https://github.com/kalathurkishore"
              target="_blank"
              rel="noreferrer"
              className="flex-1 text-center py-2 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kalathurchenchukishorekumar/"
              target="_blank"
              rel="noreferrer"
              className="flex-1 text-center py-2 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}