"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ACTIVE_COMPANY } from "../../_config/companyProfile";

const navLinks = [
  { href: "/camere",    label: "Camere" },
  { href: "/posizione", label: "Posizione" },
  { href: "/recensioni",label: "Recensioni" },
  { href: "/contatti",  label: "Contatti" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";

  return (
    <motion.nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? "bg-navy-800/95 backdrop-blur-lg border-b border-gold/10 py-3"
          : "bg-transparent py-6"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-display flex items-baseline gap-2 group" onClick={() => setMenuOpen(false)}>
          <span className="text-cream text-2xl font-light tracking-wider group-hover:text-gold transition-colors duration-300">
            {ACTIVE_COMPANY.brand.lead}
          </span>
          <span className="text-gold text-2xl font-light tracking-wider italic">
            {ACTIVE_COMPANY.brand.accent} {ACTIVE_COMPANY.brand.suffix}
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[11px] tracking-[0.22em] uppercase font-body font-medium transition-colors duration-300 group ${
                  active ? "text-gold" : "text-cream/60 hover:text-gold"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <Link
          href="/contatti"
          className="hidden md:inline-flex items-center gap-2 bg-gold text-navy text-[11px] tracking-[0.22em] uppercase font-body font-semibold px-6 py-3 hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
        >
          Prenota Ora
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5 group"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          <span
            className={`w-6 h-px bg-cream transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-[5px]" : ""
            }`}
          />
          <span
            className={`w-6 h-px bg-cream transition-all duration-300 ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`w-6 h-px bg-cream transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden"
          >
            <div className="bg-navy-800/98 backdrop-blur-xl border-t border-gold/10 px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block text-sm tracking-[0.2em] uppercase font-body font-medium transition-colors ${
                      pathname === link.href
                        ? "text-gold"
                        : "text-cream/70 hover:text-gold"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/contatti"
                onClick={() => setMenuOpen(false)}
                className="mt-2 bg-gold text-navy text-[11px] tracking-[0.22em] uppercase font-body font-semibold px-6 py-4 text-center"
              >
                Prenota Ora
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
