"use client";

import { motion } from "framer-motion";
import { CircleCheckBig, Gem, KeyRound, Waves, Zap, type LucideIcon } from "lucide-react";
import Link from "next/link";

const trustSignals: { label: string; Icon: LucideIcon }[] = [
  { label: "Check-in H24", Icon: KeyRound },
  { label: "Cancellazione flessibile", Icon: CircleCheckBig },
  { label: "Prezzi trasparenti", Icon: Gem },
  { label: "Risposta rapida", Icon: Zap },
];

export default function BookingCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-navy-700 via-navy-600 to-sea" />

      {/* Gold glow center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Top wave */}
      <div className="absolute top-0 inset-x-0 pointer-events-none">
        <svg viewBox="0 0 1440 70" className="w-full" preserveAspectRatio="none" aria-hidden>
          <path d="M0,50 C480,0 960,70 1440,20 L1440,0 L0,0 Z" className="fill-navy-800" />
        </svg>
      </div>

      {/* Decorative horizontal lines */}
      <div className="absolute top-1/2 inset-x-0 -translate-y-1/2 h-px bg-linear-to-r from-transparent via-gold/15 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 border border-gold/30 flex items-center justify-center animate-pulse-glow">
              <Waves className="h-7 w-7 text-gold" aria-hidden />
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gold/50" />
            <span className="font-body text-[10px] tracking-[0.35em] uppercase text-gold font-semibold">
              Prenota il tuo soggiorno
            </span>
            <div className="w-12 h-px bg-gold/50" />
          </div>

          <h2 className="font-display text-cream font-light text-[clamp(2.5rem,6vw,5rem)] leading-tight mb-6">
            La Sardegna ti aspetta.
            <br />
            <em className="gold-shimmer">Siamo pronti per te.</em>
          </h2>

          <p className="font-body text-cream/55 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
            Scrivici o chiamaci — risponderemo entro poche ore.
            Check-in flessibile, prezzi trasparenti, nessuna sorpresa.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contatti"
              className="inline-flex items-center justify-center bg-gold text-navy text-[11px] tracking-[0.25em] uppercase font-body font-semibold px-12 py-5 hover:bg-gold-light transition-all duration-300 hover:shadow-2xl hover:shadow-gold/30 hover:-translate-y-1"
            >
              Prenota Ora
            </Link>
            <Link
              href="/camere"
              className="inline-flex items-center justify-center border border-cream/20 text-cream text-[11px] tracking-[0.25em] uppercase font-body font-semibold px-12 py-5 hover:border-gold hover:text-gold transition-all duration-300 hover:-translate-y-1"
            >
              Vedi le Camere
            </Link>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-14 pt-10 border-t border-gold/10">
            {trustSignals.map((t) => (
              <div key={t.label} className="flex items-center gap-2">
                <t.Icon className="h-4 w-4 text-gold" aria-hidden />
                <span className="font-body text-cream/50 text-xs tracking-wide">
                  {t.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
