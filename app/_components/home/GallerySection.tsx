"use client";

import { motion } from "framer-motion";

// Placeholder gallery items with Mediterranean-evocative gradients
const galleryItems = [
  { gradient: "from-[#0B2D50] via-[#1B6CA8] to-[#4A9CC7]", label: "Vista Mare",       aspect: "aspect-[4/3]" },
  { gradient: "from-[#1A2A0A] via-[#2E5D1C] to-[#4A8C30]", label: "Giardino",         aspect: "aspect-square" },
  { gradient: "from-[#3A1A0A] via-[#8B3A1C] to-[#C9A84C]", label: "Tramonto",         aspect: "aspect-[3/4]" },
  { gradient: "from-[#071B32] via-[#0F2A4A] to-[#1B6CA8]", label: "Camera Azzurra",   aspect: "aspect-[4/3]" },
  { gradient: "from-[#2A1A0A] via-[#B85C38] to-[#E8A080]", label: "Suite Corallo",    aspect: "aspect-square" },
  { gradient: "from-[#071B32] via-[#1A3A5C] to-[#2E6B8A]", label: "Terrazza",         aspect: "aspect-[4/3]" },
];

export default function GallerySection() {
  return (
    <section className="relative py-28 bg-navy-800 overflow-hidden">
      {/* Top wave */}
      <div className="absolute top-0 inset-x-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none" aria-hidden>
          <path d="M0,30 C720,60 1080,0 1440,30 L1440,0 L0,0 Z" fill="#08192E" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gold/50" />
            <span className="font-body text-[10px] tracking-[0.3em] uppercase text-gold font-semibold">
              Galleria
            </span>
            <div className="w-12 h-px bg-gold/50" />
          </div>
          <h2 className="font-display text-cream font-light text-[clamp(2rem,5vw,3.5rem)] leading-tight">
            Un assaggio di <em className="text-gold">Sardegna</em>
          </h2>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              className={`relative ${item.aspect} overflow-hidden group cursor-pointer`}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              {/* Gradient placeholder (replace with <Image> when ready) */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-700 group-hover:scale-105`}
              />

              {/* Dot texture overlay */}
              <div className="absolute inset-0 dot-bg opacity-20" />

              {/* Hover label overlay */}
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/50 transition-all duration-400 flex items-center justify-center">
                <span className="font-body text-cream text-sm tracking-[0.2em] uppercase font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {item.label}
                </span>
              </div>

              {/* Gold border on hover */}
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/30 transition-all duration-400" />
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center font-body text-cream/35 text-xs tracking-widest uppercase mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Foto illustrative · le immagini reali verranno inserite dal proprietario
        </motion.p>
      </div>
    </section>
  );
}
