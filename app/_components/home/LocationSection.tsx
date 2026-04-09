"use client";

import { motion } from "framer-motion";
import { Building2, MapPin, Palmtree, Plane, Sailboat, Ship, Umbrella, type LucideIcon } from "lucide-react";

const attractions: { name: string; dist: string; Icon: LucideIcon }[] = [
  { name: "Aeroporto Olbia-Costa Smeralda", dist: "5 min", Icon: Plane },
  { name: "Porto di Olbia", dist: "8 min", Icon: Ship },
  { name: "Centro storico di Olbia", dist: "10 min", Icon: Building2 },
  { name: "Spiaggia di San Teodoro", dist: "25 min", Icon: Umbrella },
  { name: "Costa Smeralda (Porto Cervo)", dist: "30 min", Icon: Sailboat },
  { name: "La Maddalena (Arcipelago)", dist: "45 min", Icon: Palmtree },
];

export default function LocationSection() {
  return (
    <section className="relative py-28 bg-navy overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left – content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-gold" />
              <span className="font-body text-[10px] tracking-[0.3em] uppercase text-gold font-semibold">
                Dove siamo
              </span>
            </div>

            <h2 className="font-display text-cream font-light text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-4">
              Al centro di
              <br />
              <em className="text-gold">tutto il bello</em>
            </h2>
            <p className="font-body text-cream/55 text-base leading-relaxed mb-10">
              Via Alessandria 12, Olbia — a pochi passi dal centro, con accesso
              rapido a tutte le destinazioni chiave della Gallura.
            </p>

            {/* Attractions list */}
            <div className="space-y-3">
              {attractions.map((a, i) => (
                <motion.div
                  key={a.name}
                  className="flex items-center gap-4 py-3 border-b border-gold/8 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <a.Icon className="h-5 w-5 text-gold/80 shrink-0" aria-hidden />
                  <span className="font-body text-cream/65 text-sm flex-1 group-hover:text-cream transition-colors duration-200">
                    {a.name}
                  </span>
                  <span className="font-body text-gold text-sm font-medium shrink-0">
                    {a.dist}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right – map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square max-w-lg">
              {/* Map placeholder */}
              <div
                className="absolute inset-0 border border-gold/15 overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #0B2D50 0%, #071B32 40%, #0F3460 70%, #071B32 100%)",
                }}
              >
                {/* Grid lines – fake map */}
                <svg className="absolute inset-0 w-full h-full opacity-15" aria-hidden>
                  <defs>
                    <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M40 0 L0 0 0 40" fill="none" stroke="#C9A84C" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#map-grid)" />
                </svg>

                {/* Fake roads */}
                <svg className="absolute inset-0 w-full h-full opacity-25" aria-hidden>
                  <line x1="0"   y1="50%" x2="100%" y2="50%" stroke="#4A9CC7" strokeWidth="1.5" />
                  <line x1="40%" y1="0"   x2="40%"  y2="100%" stroke="#4A9CC7" strokeWidth="1.5" />
                  <line x1="0"   y1="30%" x2="100%" y2="65%"  stroke="#C9A84C" strokeWidth="1" strokeDasharray="6,4" />
                  <line x1="0"   y1="70%" x2="80%"  y2="20%"  stroke="#C9A84C" strokeWidth="0.8" strokeDasharray="4,6" />
                </svg>

                {/* Pin */}
                <motion.div
                  className="absolute top-1/2 left-2/5 -translate-x-1/2 -translate-y-full"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="relative flex flex-col items-center">
                    <div className="w-5 h-5 rounded-full bg-gold border-2 border-white shadow-lg shadow-gold/40 animate-pulse-glow" />
                    <div className="w-px h-6 bg-gold/60" />
                    <div className="w-2 h-2 rounded-full bg-gold/30 blur-sm" />
                  </div>
                </motion.div>

                {/* Label */}
                <div className="absolute top-1/2 left-2/5 mt-6 -translate-x-1/2">
                  <div className="bg-navy-800/90 border border-gold/30 px-3 py-1.5 whitespace-nowrap">
                    <p className="font-body text-cream text-xs font-semibold">Olbia Home Sardinia</p>
                    <p className="font-body text-cream/50 text-[10px]">Via Alessandria 12</p>
                  </div>
                </div>

                {/* Compass */}
                <div className="absolute top-4 right-4 opacity-40">
                  <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden>
                    <circle cx="16" cy="16" r="14" fill="none" stroke="#C9A84C" strokeWidth="1" />
                    <polygon points="16,4 13,16 16,14 19,16" fill="#C9A84C" />
                    <polygon points="16,28 13,16 16,18 19,16" fill="#4A9CC7" />
                    <text x="16" y="8.5" textAnchor="middle" fill="#C9A84C" fontSize="5" fontFamily="sans-serif" fontWeight="bold">N</text>
                  </svg>
                </div>
              </div>

              {/* Decorative border accent */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-gold/20 pointer-events-none" />
            </div>

            {/* Address card */}
            <motion.div
              className="glass mt-6 p-6 flex items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <MapPin className="h-5 w-5 text-gold mt-0.5" aria-hidden />
              <div>
                <p className="font-body text-cream font-semibold text-sm">Via Alessandria 12</p>
                <p className="font-body text-cream/50 text-sm">07026 Olbia OT, Sardegna</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-gold text-xs tracking-wide hover:text-gold-light transition-colors mt-2 inline-block border-b border-gold/30"
                >
                  Apri in Google Maps →
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
