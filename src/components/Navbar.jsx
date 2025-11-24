import React from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "resume", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const handleClick = (id) => {
    const el = document.getElementById(id + "-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 bg-white/85 backdrop-blur shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-[0.6rem] font-semibold text-slate-600">
            KK
          </div>
          <div>
            <div className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-slate-500">
              Computer Vision & GenAI
            </div>
            <div className="text-xs font-medium text-slate-700">
              Kishore Kumar
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-4 text-xs md:text-sm font-medium text-slate-600">
            {links.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleClick(link.id)}
                  className="px-2 py-1 hover:text-slate-900 hover:underline underline-offset-4"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <a
            href={import.meta.env.BASE_URL + "Kalathur_Chenchu_Kishore_Kumar.pdf"}
            download
            className="rounded-full bg-sky-600 px-3 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-sky-700"
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
}