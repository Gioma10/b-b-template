import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const contactCards = [
  {
    title: "Indirizzo",
    value: "Via Alessandria 12, 07026 Olbia OT",
    Icon: MapPin,
  },
  {
    title: "Telefono",
    value: "+39 347 123 4567",
    Icon: Phone,
  },
  {
    title: "Email",
    value: "info@olbiahomesardinia.it",
    Icon: Mail,
  },
];

export default function ContattiPage() {
  return (
    <div className="min-h-screen bg-navy pt-24">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-theme-page-header" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-px bg-gold" />
            <span className="font-body text-[10px] tracking-[0.3em] uppercase text-gold font-semibold">
              Contatti
            </span>
          </div>
          <h1 className="font-display text-cream font-light text-[clamp(2.5rem,6vw,5rem)] leading-tight mb-4">
            Prenota il tuo soggiorno
          </h1>
          <p className="font-body text-cream/55 text-lg max-w-xl leading-relaxed">
            Scrivici o chiamaci e ti rispondiamo in poche ore. Possiamo consigliarti la
            camera piu adatta e le migliori date.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {contactCards.map((card) => (
            <div key={card.title} className="glass p-6">
              <card.Icon className="h-5 w-5 text-gold mb-4" aria-hidden />
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-gold font-semibold mb-2">
                {card.title}
              </p>
              <p className="font-body text-cream/70 text-sm leading-relaxed">{card.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="glass p-8 md:p-10">
            <h2 className="font-display text-cream text-4xl font-light mb-3">
              Richiedi disponibilita
            </h2>
            <p className="font-body text-cream/50 text-sm mb-8">
              Questa e una demo visuale: puoi collegare questo blocco al tuo form reale
              (email, WhatsApp o CRM) quando vuoi.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Nome e cognome"
                className="bg-navy-700 border border-gold/20 px-4 py-3 text-sm text-cream placeholder:text-cream/35 focus:outline-none focus:border-gold"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-navy-700 border border-gold/20 px-4 py-3 text-sm text-cream placeholder:text-cream/35 focus:outline-none focus:border-gold"
              />
            </div>
            <textarea
              rows={5}
              placeholder="Messaggio"
              className="w-full bg-navy-700 border border-gold/20 px-4 py-3 text-sm text-cream placeholder:text-cream/35 focus:outline-none focus:border-gold"
            />

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button className="bg-gold text-navy text-[11px] tracking-[0.22em] uppercase font-body font-semibold px-8 py-4 hover:bg-gold-light transition-colors">
                Invia richiesta
              </button>
              <Link
                href="/camere"
                className="border border-gold/30 text-gold text-[11px] tracking-[0.22em] uppercase font-body font-semibold px-8 py-4 hover:bg-gold hover:text-navy transition-colors text-center"
              >
                Vedi camere
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
