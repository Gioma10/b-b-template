import Link from "next/link";

const navLinks = [
  { href: "/camere",     label: "Camere" },
  { href: "/posizione",  label: "Posizione" },
  { href: "/recensioni", label: "Recensioni" },
  { href: "/contatti",   label: "Contatti" },
];

const contactInfo = [
  { icon: "📍", label: "Via Alessandria 12, 07026 Olbia OT" },
  { icon: "📞", label: "+39 347 123 4567" },
  { icon: "✉️", label: "info@olbiahomesardinia.it" },
];

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-gold/10">
      {/* Wave top */}
      <div className="text-navy-700 -mt-1">
        <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none" aria-hidden>
          <path d="M0,30 C480,60 960,0 1440,30 L1440,0 L0,0 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="font-display mb-4">
              <span className="text-cream text-3xl font-light tracking-wider">Olbia </span>
              <span className="text-gold text-3xl font-light tracking-wider italic">Home</span>
              <br />
              <span className="text-gold/70 text-lg font-light tracking-[0.2em] uppercase">Sardinia</span>
            </div>
            <p className="font-body text-cream/50 text-sm leading-relaxed max-w-xs">
              Il tuo rifugio nel cuore di Olbia. Camere accoglienti per soggiorni perfetti,
              vicino a tutto ciò che conta.
            </p>
            {/* Decorative line */}
            <div className="mt-6 flex items-center gap-3">
              <div className="h-px w-8 bg-gold" />
              <div className="h-px w-4 bg-gold/40" />
              <div className="h-px w-2 bg-gold/20" />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-body text-[10px] tracking-[0.3em] uppercase text-gold mb-6 font-semibold">
              Esplora
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-cream/60 text-sm hover:text-gold transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contatti"
                  className="font-body text-gold text-sm font-medium hover:text-gold-light transition-colors duration-200"
                >
                  Prenota Ora →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-body text-[10px] tracking-[0.3em] uppercase text-gold mb-6 font-semibold">
              Contatti
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-base mt-0.5">{item.icon}</span>
                  <span className="font-body text-cream/60 text-sm leading-relaxed">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>

            {/* Check-in badge */}
            <div className="mt-6 inline-flex items-center gap-2 bg-gold/10 border border-gold/20 px-4 py-2">
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="font-body text-gold text-xs tracking-wider uppercase">
                Check-in H24 disponibile
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gold/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-cream/30 text-xs tracking-wide">
            © {new Date().getFullYear()} Olbia Home Sardinia. Tutti i diritti riservati.
          </p>
          <div className="flex items-center gap-6">
            <span className="font-body text-cream/30 text-xs">Privacy Policy</span>
            <span className="font-body text-cream/30 text-xs">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
