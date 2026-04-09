"use client";

import { motion } from "framer-motion";

const stats = [
  { icon: "✈️", label: "Aeroporto",       value: "5 min",         sub: "in auto" },
  { icon: "🚢", label: "Porto di Olbia",   value: "8 min",         sub: "in auto" },
  { icon: "🌊", label: "Costa Smeralda",   value: "30 min",        sub: "in auto" },
  { icon: "🔑", label: "Check-in",         value: "Flessibile",    sub: "H24" },
];

export default function StatsBar() {
  return (
    <section className="relative bg-navy-700 border-y border-gold/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className={`relative flex flex-col items-center justify-center px-6 py-10 text-center group ${
                i < stats.length - 1
                  ? "border-b md:border-b-0 md:border-r border-gold/10"
                  : ""
              } ${i % 2 === 0 && i === stats.length - 2 ? "border-b border-gold/10 md:border-b-0" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {/* Hover bg */}
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 transition-colors duration-500" />

              <span className="text-3xl mb-3" role="img" aria-label={stat.label}>
                {stat.icon}
              </span>
              <p className="font-body text-[9px] tracking-[0.3em] uppercase text-gold mb-2 font-semibold">
                {stat.label}
              </p>
              <p className="font-display text-cream text-2xl font-light">
                {stat.value}
              </p>
              <p className="font-body text-cream/40 text-xs mt-1">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
