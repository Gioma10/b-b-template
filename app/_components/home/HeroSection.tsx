"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { ACTIVE_COMPANY } from "../../_config/companyProfile";
import { Button } from "@/components/ui/button";

const particles = Array.from({ length: 40 }, (_, i) => {
  const x = (i * 37) % 100;
  const y = (i * 17) % 60;
  const opacity = 0.12 + ((i * 11) % 45) / 100;
  const duration = 2 + ((i * 13) % 40) / 10;
  const delay = ((i * 19) % 40) / 10;

  return {
    left: `${x}%`,
    top: `${y}%`,
    opacity,
    duration,
    delay,
  };
});

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* ── Panoramic background + emerald overlays ── */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
        >
          <source src="/18052871-uhd_3840_2160_30fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-theme-hero-base" />
        <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/30 to-black/20" />

        {/* Shimmer light rays */}
        <div className="absolute inset-0 opacity-35 bg-theme-hero-rays" />

        {/* Animated horizon glow */}
        <motion.div
          className="absolute inset-x-0 bottom-1/3 h-px bg-theme-horizon"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Stars / particles */}
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px bg-cream rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
              opacity: particle.opacity,
            }}
            animate={{ opacity: [0.1, 0.6, 0.1] }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </motion.div>

      {/* ── Wave divider bottom ── */}
      <div className="absolute bottom-0 inset-x-0 pointer-events-none z-10">
        <svg viewBox="0 0 1440 90" className="w-full" preserveAspectRatio="none" aria-hidden>
          <path d="M0,45 C320,90 780,0 1440,55 L1440,90 L0,90 Z" className="fill-navy" />
        </svg>
      </div>

      {/* ── Content ── */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-36 pt-40"
        style={{ opacity }}
      >
        <motion.div
          className="mb-6 inline-flex items-center gap-2 border border-gold/35 bg-black/25 px-4 py-2 backdrop-blur-xs"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          <span className="font-body text-[10px] tracking-[0.18em] uppercase text-cream/90">
            {ACTIVE_COMPANY.demo.badge}
          </span>
        </motion.div>

        {/* Breadcrumb */}
        <motion.div
          className="flex items-center gap-4 mb-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-14 h-px bg-gold" />
          <span className="font-body text-[10px] tracking-[0.35em] uppercase text-gold drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
            {ACTIVE_COMPANY.hero.breadcrumb}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="font-display leading-[0.92] mb-8 drop-shadow-[0_4px_20px_rgba(0,0,0,0.65)]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="block text-cream font-light text-[clamp(3rem,9vw,8rem)]">
            Il tuo{" "}
            <em className="text-gold not-italic gold-shimmer">rifugio</em>
          </span>
          <span className="block text-cream font-light text-[clamp(3rem,9vw,8rem)]">
            nel cuore di {ACTIVE_COMPANY.brand.cityName}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="font-body text-cream/85 text-base sm:text-lg leading-relaxed max-w-lg mb-12 drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          {ACTIVE_COMPANY.hero.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col xs:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <Button
            asChild
            variant="gold"
            size="lg"
            className="hover:shadow-xl hover:shadow-gold/25 hover:-translate-y-0.5"
          >
            <Link href="/contatti">Contattaci</Link>
          </Button>
          <Button
            asChild
            variant="outline-cream"
            size="lg"
            className="hover:-translate-y-0.5"
          >
            <Link href="/camere">Scopri le Camere</Link>
          </Button>
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
          className="w-px bg-linear-to-b from-gold/50 to-transparent"
          animate={{ height: [40, 60, 40] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
