"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Beranda", href: "#home" },
  { label: "Kategori", href: "#category" },
  { label: "Mobil", href: "#cars" },
  { label: "Testimoni", href: "#testimonial" },
  { label: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 🔥 scroll handler (smooth + offset)
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (!el) return;

    const yOffset = -90; // tinggi navbar
    const y = (el as HTMLElement).getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-[#070B1A]/80 backdrop-blur-lg border-b border-white/10 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
            : "bg-transparent"
        }
      `}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <div
          onClick={() => handleScroll("#home")}
          className="cursor-pointer text-base md:text-lg font-semibold text-white"
        >
          AutoDrive
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => handleScroll(l.href)}
              className="text-sm cursor-pointer text-white/60 hover:text-cyan-400 transition"
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => handleScroll("#contact")}
          className="
    hidden md:inline-flex items-center justify-center
    px-5 py-2.5 rounded-lg text-sm font-semibold
    border border-cyan-500 text-cyan-400
    bg-transparent
    hover:bg-cyan-500/10 hover:text-cyan-300
    transition-all duration-300
    hover:scale-[1.03] active:scale-95
  "
        >
          Book Now
        </button>

        {/* BURGER */}
        <button className="md:hidden flex flex-col gap-1.5" onClick={() => setMenuOpen(!menuOpen)}>
          <span
            className={`block w-5 h-0.5 bg-white transition ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span className={`block w-5 h-0.5 bg-white transition ${menuOpen ? "opacity-0" : ""}`} />
          <span
            className={`block w-5 h-0.5 bg-white transition ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="bg-[#070B1A]/95 backdrop-blur-lg border-t border-white/10 px-6 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => handleScroll(l.href)}
              className="text-sm text-white/70 hover:text-cyan-400 transition text-left"
            >
              {l.label}
            </button>
          ))}

          <button
            onClick={() => handleScroll("#contact")}
            className="mt-2 bg-cyan-500 text-black text-sm font-semibold px-4 py-2 rounded-lg"
          >
            Book Now
          </button>
        </div>
      </div>
    </header>
  );
}
