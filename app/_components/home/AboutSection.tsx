"use client";

import { motion } from "framer-motion";
import { ACTIVE_COMPANY } from "../../_config/companyProfile";

const values = [
  { title: "Posizione Strategica",  desc: ACTIVE_COMPANY.about.strategicDesc },
  { title: "Accoglienza Autentica", desc: "Lo spirito sardo dell'ospitalità. Caloroso, sincero, indimenticabile." },
  { title: "Comfort Garantito",     desc: "Camere curate nei minimi dettagli per un riposo perfetto in qualsiasi stagione." },
];

export default function AboutSection() {
  return (
    <section className="relative py-28 bg-navy overflow-hidden">
      {/* Dot pattern */}
      <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" />

      {/* Gold glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Left – text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-px bg-gold" />
                <span className="font-body text-[10px] tracking-[0.3em] uppercase text-gold font-semibold">
                  La nostra storia
                </span>
              </div>

              <h2 className="font-display text-cream font-light leading-tight mb-6 text-[clamp(2.2rem,5vw,4rem)]">
                Benvenuti nel cuore
                <br />
                della <em className="text-gold">Sardegna</em>
              </h2>

              <p className="font-body text-cream/55 text-base leading-relaxed mb-6">
                {ACTIVE_COMPANY.about.intro}
              </p>
              <p className="font-body text-cream/55 text-base leading-relaxed">
                {ACTIVE_COMPANY.about.outro}
              </p>

              {/* Signature quote */}
              <div className="mt-10 pl-6 border-l-2 border-gold/30">
                <p className="font-display text-gold/80 text-xl italic leading-relaxed">
                  &ldquo;Sa terra non si abbandona mai davvero.&rdquo;
                </p>
                <p className="font-body text-cream/35 text-xs tracking-widest uppercase mt-2">
                  — Proverbio Sardo
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right – values grid */}
          <div className="flex flex-col gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="glass p-7 group hover:border-gold/30 transition-all duration-500"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                <div className="flex items-start gap-5">
                  <span className="text-gold font-display text-4xl font-light opacity-30 leading-none select-none group-hover:opacity-60 transition-opacity duration-300">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-body text-cream font-semibold text-sm tracking-wide mb-2 group-hover:text-gold transition-colors duration-300">
                      {v.title}
                    </h3>
                    <p className="font-body text-cream/50 text-sm leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
