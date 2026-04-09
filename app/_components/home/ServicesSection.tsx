"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Car, Coffee, KeyRound, Leaf, Shirt, Snowflake, Tv, Wifi, type LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/scroll-reveal";

const services: { Icon: LucideIcon; label: string; desc: string }[] = [
  { Icon: Wifi,      label: "WiFi Gratuito",      desc: "Connessione in tutta la struttura" },
  { Icon: Snowflake, label: "Aria Condizionata",   desc: "Clima perfetto in ogni stagione" },
  { Icon: Car,       label: "Parcheggio Privato",  desc: "Posto auto gratuito incluso" },
  { Icon: Coffee,    label: "Colazione",           desc: "Prodotti freschi sardi ogni mattina" },
  { Icon: KeyRound,  label: "Check-in H24",        desc: "Arrivi a qualsiasi ora, nessun problema" },
  { Icon: Tv,        label: "TV Smart 4K",         desc: "Streaming e canali internazionali" },
  { Icon: Shirt,     label: "Cambio Biancheria",   desc: "Lenzuola e asciugamani sempre freschi" },
  { Icon: Leaf,      label: "Prodotti Bio",        desc: "Amenities naturali e cosmetici locali" },
];

function Header() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="mb-16"
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-px bg-gold" />
        <Badge>Servizi inclusi</Badge>
      </div>
      <h2 className="font-display text-cream font-light text-[clamp(2rem,5vw,3.5rem)] leading-tight">
        Tutto ciò che ti serve,
        <br />
        <em className="text-gold">senza sorprese</em>
      </h2>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section className="relative py-28 bg-navy overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(201,168,76,0.03) 0%, transparent 50%, rgba(27,108,168,0.03) 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <Header />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <ScrollReveal key={s.label} from="scale" delay={i * 0.07} duration={0.5} className="h-full">
              <motion.div
                className="glass p-6 group hover:border-gold/30 hover:bg-gold/5 transition-all duration-500 cursor-default h-full"
                whileHover={{ y: -4 }}
              >
                <s.Icon className="h-8 w-8 mb-4 text-gold/90 block group-hover:scale-110 transition-transform duration-300" aria-hidden />
                <h3 className="font-body text-cream text-sm font-semibold mb-2 group-hover:text-gold transition-colors duration-300">
                  {s.label}
                </h3>
                <p className="font-body text-cream/40 text-xs leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
