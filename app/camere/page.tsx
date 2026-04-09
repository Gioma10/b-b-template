"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";

const rooms = [
  {
    name: "Camera Azzurra",
    type: "Standard Matrimoniale",
    price: 80,
    size: "18 m²",
    capacity: "2 ospiti",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1600&q=80",
    features: [
      "Letto matrimoniale 160×200",
      "Vista sul cortile interno",
      "Aria condizionata",
      "WiFi fibra ottica",
      "Bagno privato con doccia",
      "TV Smart 40\"",
      "Mini-frigo",
      "Cassaforte",
    ],
    desc: "Un rifugio intimo e raffinato, avvolto nei toni del mare. Perfetta per coppie in transito o per un soggiorno breve.",
  },
  {
    name: "Suite Corallo",
    type: "Junior Suite",
    price: 130,
    size: "32 m²",
    capacity: "2 ospiti",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=80",
    featured: true,
    features: [
      "King size bed 180×200",
      "Soggiorno separato",
      "Bagno en-suite con vasca",
      "Balconcino privato",
      "Aria condizionata",
      "WiFi fibra ottica",
      "TV Smart 55\"",
      "Colazione inclusa",
    ],
    desc: "Il nostro fiore all'occhiello. Spazi ampi, colori caldi del tramonto sardo e ogni comfort per un soggiorno indimenticabile.",
  },
  {
    name: "Camera Ginepro",
    type: "Doppia Comfort",
    price: 95,
    size: "22 m²",
    capacity: "2 ospiti",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1600&q=80",
    features: [
      "2 letti singoli separati",
      "Balconcino con vista giardino",
      "Aria condizionata",
      "WiFi fibra ottica",
      "Bagno privato con doccia",
      "TV Smart 40\"",
      "Scrivania da lavoro",
      "Cassaforte",
    ],
    desc: "Ideale per colleghi in trasferta o amici viaggiatori. Funzionale, elegante e confortevole.",
  },
  {
    name: "Camera Granito",
    type: "Singola Superior",
    price: 65,
    size: "14 m²",
    capacity: "1 ospite",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1600&q=80",
    features: [
      "Letto singolo 120×200",
      "Vista cortile",
      "Aria condizionata",
      "WiFi fibra ottica",
      "Bagno privato con doccia",
      "TV Smart 32\"",
      "Scrivania compatta",
    ],
    desc: "Compatta ed efficiente per il viaggiatore solo. Tutto il necessario senza compromessi sul comfort.",
  },
];


export default function CamerePage() {
  return (
    <div className="min-h-screen bg-navy pt-24">
      {/* Page header */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-theme-page-header" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-px bg-gold" />
              <Badge>Alloggi</Badge>
            </div>
            <h1 className="font-display text-cream font-light text-[clamp(2.5rem,6vw,5rem)] leading-tight mb-4">
              Le nostre <em className="text-gold">Camere</em>
            </h1>
            <p className="font-body text-cream/55 text-lg max-w-xl leading-relaxed">
              Ogni camera è pensata per offrirti il massimo del comfort,
              con dettagli che richiamano la tradizione sarda.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Rooms */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-8">
        {rooms.map((room, i) => (
          <ScrollReveal key={room.name} from="bottom" delay={i * 0.08} duration={0.7}>
          <div
            className={`grid md:grid-cols-2 gap-0 border overflow-hidden ${
              room.featured ? "border-gold/40 shadow-xl shadow-gold/10" : "border-gold/10"
            }`}
          >
            {/* Image */}
            <div
              className={`relative h-64 md:h-auto bg-linear-to-br from-navy-700 via-sea to-sea-light ${
                i % 2 === 1 ? "md:order-2" : ""
              }`}
            >
              <Image
                src={room.image}
                alt={room.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy/75 via-navy/30 to-transparent" />
              <div className="absolute inset-0 dot-bg opacity-15" />
              {room.featured && (
                <Badge variant="outline" className="absolute top-4 left-4 bg-gold text-navy border-0 px-3 py-1.5 rounded-none">
                  Più richiesta
                </Badge>
              )}
              <div className="absolute bottom-4 right-4 flex gap-2">
                <div className="bg-black/40 backdrop-blur-sm border border-white/10 px-3 py-1">
                  <span className="font-body text-cream/80 text-xs">{room.size}</span>
                </div>
                <div className="bg-black/40 backdrop-blur-sm border border-white/10 px-3 py-1">
                  <span className="font-body text-cream/80 text-xs">{room.capacity}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="bg-navy-700 p-10 flex flex-col justify-between">
              <div>
                <p className="font-body text-[9px] tracking-[0.3em] uppercase text-gold mb-2 font-semibold">
                  {room.type}
                </p>
                <h2 className="font-display text-cream text-3xl font-light mb-4">{room.name}</h2>
                <p className="font-body text-cream/55 text-sm leading-relaxed mb-6">{room.desc}</p>

                <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-8">
                  {room.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-gold shrink-0" />
                      <span className="font-body text-cream/55 text-xs">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gold/10">
                <div>
                  <p className="font-body text-cream/40 text-xs">a partire da</p>
                  <p className="font-display text-gold text-3xl font-light">
                    €{room.price}
                    <span className="text-base text-gold/60 font-body font-light">/notte</span>
                  </p>
                </div>
                <Button
                  asChild
                  variant={room.featured ? "gold" : "outline"}
                  size="lg"
                  className="hover:-translate-y-0.5"
                >
                  <Link href="/contatti">Prenota</Link>
                </Button>
              </div>
            </div>
          </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center py-20 border-t border-gold/10">
        <p className="font-body text-cream/50 text-sm mb-4">
          Hai bisogno di qualcosa di specifico? Contattaci, troviamo insieme la soluzione.
        </p>
        <Button asChild variant="ghost" size="sm">
          <Link href="/contatti">Scrivici →</Link>
        </Button>
      </div>
    </div>
  );
}
