"use client";

import { motion } from "framer-motion";

// Illustrative gallery items (temporary stock photos)
const galleryItems = [
  {
    label: "Vista Mare",
    aspect: "aspect-[4/3]",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Giardino",
    aspect: "aspect-square",
    image:
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Tramonto",
    aspect: "aspect-[3/4]",
    image:
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Camera Azzurra",
    aspect: "aspect-[4/3]",
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Suite Corallo",
    aspect: "aspect-square",
    image:
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Terrazza",
    aspect: "aspect-[4/3]",
    image:
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function GallerySection() {
  return (
    <section className="relative py-28 bg-navy-800 overflow-hidden">
      {/* Top wave */}
      <div className="absolute top-0 inset-x-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none" aria-hidden>
          <path d="M0,30 C720,60 1080,0 1440,30 L1440,0 L0,0 Z" className="fill-navy" />
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
              <img
                src={item.image}
                alt={item.label}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy/70 via-navy/20 to-transparent" />

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
