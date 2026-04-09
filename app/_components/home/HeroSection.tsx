"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* ── Background gradient – Mediterranean sea at dusk ── */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 50% 0%, #0D3A6E 0%, transparent 70%),
              radial-gradient(ellipse 60% 50% at 80% 80%, #071830 0%, transparent 60%),
              linear-gradient(175deg, #040D1A 0%, #071B32 30%, #0B2D50 55%, #0A2040 80%, #040D1A 100%)
            `,
          }}
        />

        {/* Shimmer light rays */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              radial-gradient(ellipse 40% 60% at 70% 30%, rgba(201,168,76,0.25) 0%, transparent 60%),
              radial-gradient(ellipse 30% 40% at 25% 70%, rgba(27,108,168,0.3) 0%, transparent 50%)
            `,
          }}
        />

        {/* Animated horizon glow */}
        <motion.div
          className="absolute inset-x-0 bottom-1/3 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.15) 30%, rgba(27,108,168,0.25) 70%, transparent 100%)",
            boxShadow: "0 0 60px 20px rgba(27,108,168,0.1)",
          }}
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Stars / particles */}
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px bg-cream rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top:  `${Math.random() * 60}%`,
              opacity: Math.random() * 0.5 + 0.1,
            }}
            animate={{ opacity: [0.1, 0.6, 0.1] }}
            transition={{
              duration: 2 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </motion.div>

      {/* ── Wave divider bottom ── */}
      <div className="absolute bottom-0 inset-x-0 pointer-events-none z-10">
        <svg viewBox="0 0 1440 90" className="w-full" preserveAspectRatio="none" aria-hidden>
          <path d="M0,45 C320,90 780,0 1440,55 L1440,90 L0,90 Z" fill="#08192E" />
        </svg>
      </div>

      {/* ── Content ── */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-36 pt-40"
        style={{ opacity }}
      >
        {/* Breadcrumb */}
        <motion.div
          className="flex items-center gap-4 mb-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-14 h-px bg-gold" />
          <span className="font-body text-[10px] tracking-[0.35em] uppercase text-gold">
            Olbia · Sardegna · Costa Smeralda
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="font-display leading-[0.92] mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="block text-cream font-light text-[clamp(3rem,9vw,8rem)]">
            Il tuo{" "}
            <em className="text-gold not-italic gold-shimmer">rifugio</em>
          </span>
          <span className="block text-cream font-light text-[clamp(3rem,9vw,8rem)]">
            nel cuore di Olbia
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="font-body text-cream/55 text-base sm:text-lg leading-relaxed max-w-lg mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          Camere accoglienti a pochi minuti dall'aeroporto e dal porto.
          <br className="hidden sm:block" />
          Perfette per soggiorni brevi, arrivi notturni e partenze all'alba.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col xs:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="/contatti"
            className="inline-flex items-center justify-center bg-gold text-navy text-[11px] tracking-[0.25em] uppercase font-body font-semibold px-10 py-4 hover:bg-gold-light transition-all duration-300 hover:shadow-xl hover:shadow-gold/25 hover:-translate-y-0.5"
          >
            Contattaci
          </Link>
          <Link
            href="/camere"
            className="inline-flex items-center justify-center border border-cream/25 text-cream text-[11px] tracking-[0.25em] uppercase font-body font-semibold px-10 py-4 hover:border-gold hover:text-gold transition-all duration-300 hover:-translate-y-0.5"
          >
            Scopri le Camere
          </Link>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator (right) ── */}
      <motion.div
        className="absolute right-8 md:right-12 bottom-24 flex flex-col items-center gap-3 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        <span
          className="font-body text-cream/35 text-[8px] tracking-[0.35em] uppercase"
          style={{ writingMode: "vertical-rl" }}
        >
          Scorri
        </span>
        <motion.div
          className="w-px bg-gradient-to-b from-gold/50 to-transparent"
          animate={{ height: [40, 60, 40] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
