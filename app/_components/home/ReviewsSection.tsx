"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "Sophie M.",
    origin: "Parigi, Francia",
    rating: 5,
    text: "Un posto straordinario. Siamo arrivati tardi dal traghetto e ci hanno accolto con calore e professionalità. La camera era impeccabile. Torneremo sicuramente!",
    platform: "Booking.com",
    date: "Settembre 2025",
    initial: "S",
    color: "#1B6CA8",
  },
  {
    name: "Marco R.",
    origin: "Milano, Italia",
    rating: 5,
    text: "Posizione perfetta, a 5 minuti dall'aeroporto. Dopo un lungo volo, trovare una camera così curata e un host così disponibile è stato meraviglioso. Colazione sarda da sogno.",
    platform: "Airbnb",
    date: "Agosto 2025",
    initial: "M",
    color: "#B85C38",
    featured: true,
  },
  {
    name: "Anna K.",
    origin: "Berlino, Germania",
    rating: 5,
    text: "Eravamo di passaggio per la Costa Smeralda. La struttura è elegante, pulitissima e il rapporto qualità-prezzo è eccellente. Consigliatissimo per chi cerca comfort e posizione.",
    platform: "Google",
    date: "Luglio 2025",
    initial: "A",
    color: "#3A6B28",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? "text-gold" : "text-cream/20"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const avg = reviews.reduce((s, r) => s + r.rating, 0) / reviews.length;

  return (
    <section className="relative py-28 bg-navy-800 overflow-hidden">
      {/* Top wave */}
      <div className="absolute top-0 inset-x-0 pointer-events-none">
        <svg viewBox="0 0 1440 70" className="w-full" preserveAspectRatio="none" aria-hidden>
          <path d="M0,0 C480,70 960,0 1440,50 L1440,0 Z" fill="#08192E" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-gold" />
              <span className="font-body text-[10px] tracking-[0.3em] uppercase text-gold font-semibold">
                Recensioni
              </span>
            </div>
            <h2 className="font-display text-cream font-light text-[clamp(2rem,5vw,3.5rem)] leading-tight">
              Cosa dicono i
              <br />
              <em className="text-gold">nostri ospiti</em>
            </h2>
          </div>

          {/* Score */}
          <div className="glass px-8 py-6 text-center">
            <div className="font-display text-gold text-6xl font-light leading-none mb-1">
              {avg.toFixed(1)}
            </div>
            <StarRating count={Math.round(avg)} />
            <p className="font-body text-cream/50 text-xs mt-3">
              su {reviews.length * 10}+ recensioni
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              className={`relative p-8 border transition-all duration-500 group ${
                r.featured
                  ? "border-gold/40 bg-navy-600 shadow-xl shadow-gold/10"
                  : "border-gold/10 bg-navy-700 hover:border-gold/25 hover:bg-navy-600"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
            >
              {/* Quote mark */}
              <div className="font-display text-7xl text-gold/10 leading-none -mt-2 mb-2 select-none">
                "
              </div>

              <StarRating count={r.rating} />

              <p className="font-body text-cream/65 text-sm leading-relaxed mt-4 mb-6 italic">
                "{r.text}"
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-4 pt-5 border-t border-gold/10">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-body font-semibold flex-shrink-0"
                  style={{ background: r.color }}
                >
                  {r.initial}
                </div>
                <div className="min-w-0">
                  <p className="font-body text-cream text-sm font-semibold">{r.name}</p>
                  <p className="font-body text-cream/40 text-xs">{r.origin}</p>
                </div>
                <div className="ml-auto text-right">
                  <p className="font-body text-gold/70 text-[10px] tracking-wide">{r.platform}</p>
                  <p className="font-body text-cream/30 text-[10px]">{r.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
