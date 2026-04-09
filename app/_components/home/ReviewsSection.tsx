"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollReveal } from "@/components/scroll-reveal";

const reviews = [
  {
    name: "Sophie M.",
    origin: "Parigi, Francia",
    rating: 5,
    text: "Un posto straordinario. Siamo arrivati tardi dal traghetto e ci hanno accolto con calore e professionalità. La camera era impeccabile. Torneremo sicuramente!",
    platform: "Booking.com",
    date: "Settembre 2025",
    initial: "S",
    avatarClass: "bg-sea",
  },
  {
    name: "Marco R.",
    origin: "Milano, Italia",
    rating: 5,
    text: "Posizione perfetta, a 5 minuti dall'aeroporto. Dopo un lungo volo, trovare una camera così curata e un host così disponibile è stato meraviglioso. Colazione sarda da sogno.",
    platform: "Airbnb",
    date: "Agosto 2025",
    initial: "M",
    avatarClass: "bg-sea-light",
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
    avatarClass: "bg-navy-500",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? "text-gold" : "text-cream/20"}>★</span>
      ))}
    </div>
  );
}

function Header({ avg, count }: { avg: number; count: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-px bg-gold" />
          <Badge>Recensioni</Badge>
        </div>
        <h2 className="font-display text-cream font-light text-[clamp(2rem,5vw,3.5rem)] leading-tight">
          Cosa dicono i
          <br />
          <em className="text-gold">nostri ospiti</em>
        </h2>
      </div>

      <div className="glass px-8 py-6 text-center">
        <div className="font-display text-gold text-6xl font-light leading-none mb-1">
          {avg.toFixed(1)}
        </div>
        <StarRating count={Math.round(avg)} />
        <p className="font-body text-cream/50 text-xs mt-3">
          su {count * 10}+ recensioni
        </p>
      </div>
    </motion.div>
  );
}

export default function ReviewsSection() {
  const avg = reviews.reduce((s, r) => s + r.rating, 0) / reviews.length;

  return (
    <section className="relative py-28 bg-navy overflow-hidden">
      <div className="absolute top-0 inset-x-0 pointer-events-none">
        <svg viewBox="0 0 1440 70" className="w-full" preserveAspectRatio="none" aria-hidden>
          <path d="M0,0 C480,70 960,0 1440,50 L1440,0 Z" className="fill-navy" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <Header avg={avg} count={reviews.length} />

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <ScrollReveal key={r.name} from="bottom" delay={i * 0.15} duration={0.7}>
              <div
                className={`relative p-8 border transition-all duration-500 group ${
                  r.featured
                    ? "border-gold/40 bg-navy-600 shadow-xl shadow-gold/10"
                    : "border-gold/10 bg-navy-700 hover:border-gold/25 hover:bg-navy-600"
                }`}
              >
                <div className="font-display text-7xl text-gold/10 leading-none -mt-2 mb-2 select-none">
                  &ldquo;
                </div>
                <StarRating count={r.rating} />
                <p className="font-body text-cream/65 text-sm leading-relaxed mt-4 mb-6 italic">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="flex items-center gap-4 pt-5 border-t border-gold/10">
                  <Avatar>
                    <AvatarFallback className={r.avatarClass}>{r.initial}</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <p className="font-body text-cream text-sm font-semibold">{r.name}</p>
                    <p className="font-body text-cream/40 text-xs">{r.origin}</p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="font-body text-gold/70 text-[10px] tracking-wide">{r.platform}</p>
                    <p className="font-body text-cream/30 text-[10px]">{r.date}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
