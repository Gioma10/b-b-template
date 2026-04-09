import BookingCTA from "../_components/home/BookingCTA";
import LocationSection from "../_components/home/LocationSection";

export default function PosizionePage() {
  return (
    <div className="min-h-screen bg-navy pt-24">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-theme-page-header" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-px bg-gold" />
            <span className="font-body text-[10px] tracking-[0.3em] uppercase text-gold font-semibold">
              Posizione
            </span>
          </div>
          <h1 className="font-display text-cream font-light text-[clamp(2.5rem,6vw,5rem)] leading-tight mb-4">
            Dove siamo
          </h1>
          <p className="font-body text-cream/55 text-lg max-w-xl leading-relaxed">
            In posizione strategica tra aeroporto, porto e Costa Smeralda. Ideale per
            arrivi serali, partenze all&apos;alba e soggiorni comodi.
          </p>
        </div>
      </section>

      <LocationSection />
      <BookingCTA />
    </div>
  );
}
