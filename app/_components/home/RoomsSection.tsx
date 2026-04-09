"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const rooms = [
  {
    name: "Camera Azzurra",
    type: "Standard Matrimoniale",
    price: "da €80/notte",
    features: ["Letto matrimoniale", "Vista cortile", "AC + WiFi", "Bagno privato"],
    size: "18 m²",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Suite Corallo",
    type: "Junior Suite",
    price: "da €130/notte",
    features: ["King size bed", "Soggiorno", "AC + WiFi", "Bagno en-suite con vasca"],
    size: "32 m²",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Camera Ginepro",
    type: "Doppia Comfort",
    price: "da €95/notte",
    features: ["2 letti singoli", "Balconcino", "AC + WiFi", "Bagno privato"],
    size: "22 m²",
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function RoomsSection() {
  return (
    <section className="relative py-28 bg-navy-800 overflow-hidden">
      {/* Top wave */}
      <div className="absolute top-0 inset-x-0 pointer-events-none">
        <svg viewBox="0 0 1440 70" className="w-full" preserveAspectRatio="none" aria-hidden>
          <path d="M0,35 C360,70 1080,0 1440,35 L1440,0 L0,0 Z" className="fill-navy" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gold/50" />
            <span className="font-body text-[10px] tracking-[0.3em] uppercase text-gold font-semibold">
              Alloggi
            </span>
            <div className="w-12 h-px bg-gold/50" />
          </div>
          <h2 className="font-display text-cream font-light text-[clamp(2rem,5vw,3.5rem)] leading-tight">
            Le nostre <em className="text-gold">Camere</em>
          </h2>
          <p className="font-body text-cream/50 text-base mt-4 max-w-md mx-auto leading-relaxed">
            Ogni spazio è stato pensato per offrirti il massimo del comfort
            nel cuore di Olbia.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {rooms.map((room, i) => (
            <motion.div
              key={room.name}
              className={`relative group rounded-none overflow-hidden border transition-all duration-500 ${
                room.featured
                  ? "border-gold/40 shadow-2xl shadow-gold/10 md:-mt-4 md:mb-4"
                  : "border-gold/10 hover:border-gold/25"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
            >
              {/* Illustrative room photo */}
              <div className="relative h-52 bg-linear-to-br from-navy-700 via-sea to-sea-light overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy/70 via-navy/20 to-transparent" />
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-20 dot-bg" />

                {/* Room size badge */}
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm px-3 py-1 border border-white/10">
                  <span className="font-body text-cream/80 text-xs">{room.size}</span>
                </div>

                {/* Featured badge */}
                {room.featured && (
                  <div className="absolute top-4 left-4 bg-gold text-navy text-[10px] tracking-[0.2em] uppercase font-body font-bold px-3 py-1">
                    Più richiesta
                  </div>
                )}

                {/* Decorative circle */}
                <div
                  className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-20"
                  style={{ background: "radial-gradient(circle, var(--color-sea-light), transparent)" }}
                />
              </div>

              {/* Content */}
              <div className="bg-navy-700 p-7 group-hover:bg-navy-600 transition-colors duration-500">
                <p className="font-body text-[9px] tracking-[0.3em] uppercase text-gold mb-2 font-semibold">
                  {room.type}
                </p>
                <h3 className="font-display text-cream text-2xl font-light mb-4">
                  {room.name}
                </h3>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {room.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 font-body text-cream/55 text-sm">
                      <span className="w-1 h-1 rounded-full bg-gold shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Price + CTA */}
                <div className="flex items-center justify-between">
                  <span className="font-display text-gold text-xl font-light">
                    {room.price}
                  </span>
                  <Link
                    href="/contatti"
                    className={`font-body text-[10px] tracking-[0.2em] uppercase font-semibold px-5 py-2.5 transition-all duration-300 ${
                      room.featured
                        ? "bg-gold text-navy hover:bg-gold-light"
                        : "border border-gold/40 text-gold hover:bg-gold hover:text-navy"
                    }`}
                  >
                    Prenota
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* All rooms link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href="/camere"
            className="font-body text-gold text-sm tracking-widest uppercase hover:text-gold-light transition-colors border-b border-gold/30 pb-1 hover:border-gold"
          >
            Vedi tutte le camere →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
