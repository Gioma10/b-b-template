export type AttractionKind =
  | "plane"
  | "ship"
  | "building"
  | "beach"
  | "sailboat"
  | "island";

export type CompanyProfile = {
  demo: {
    badge: string;
  };
  brand: {
    lead: string;
    accent: string;
    suffix: string;
    fullName: string;
    cityName: string;
  };
  meta: {
    title: string;
    description: string;
  };
  contacts: {
    addressLine: string;
    cityLine: string;
    phone: string;
    email: string;
    mapUrl: string;
  };
  hero: {
    breadcrumb: string;
    subtitle: string;
  };
  about: {
    strategicDesc: string;
    intro: string;
    outro: string;
  };
  position: {
    pageIntro: string;
    sectionIntro: string;
    mapTitle: string;
    mapSubtitle: string;
    attractions: Array<{ name: string; dist: string; kind: AttractionKind }>;
  };
};

const OLBIA_HOME: CompanyProfile = {
  demo: {
    badge: "Demo personalizzabile per la tua struttura",
  },
  brand: {
    lead: "Olbia",
    accent: "Home",
    suffix: "Sardinia",
    fullName: "Olbia Home Sardinia",
    cityName: "Olbia",
  },
  meta: {
    title: "Olbia Home Sardinia | B&B nel cuore di Olbia",
    description:
      "Camere accoglienti a pochi minuti dall'aeroporto e dal porto. Perfette per soggiorni brevi, arrivi notturni e partenze all'alba.",
  },
  contacts: {
    addressLine: "Via Alessandria 12, 07026 Olbia OT",
    cityLine: "07026 Olbia OT, Sardegna",
    phone: "+39 347 123 4567",
    email: "info@olbiahomesardinia.it",
    mapUrl: "https://maps.google.com",
  },
  hero: {
    breadcrumb: "Olbia · Sardegna · Costa Smeralda",
    subtitle:
      "Camere accoglienti a pochi minuti dall'aeroporto e dal porto. Perfette per soggiorni brevi, arrivi notturni e partenze all'alba.",
  },
  about: {
    strategicDesc:
      "Tra aeroporto, porto e Costa Smeralda. Ogni destinazione a portata di mano.",
    intro:
      "Olbia Home Sardinia nasce dall'amore per questa terra straordinaria. Ogni camera racconta una storia fatta di colori del mare, profumi di macchia mediterranea e calore umano autentico.",
    outro:
      "Che tu sia di passaggio o in cerca di una base per esplorare la Costa Smeralda, qui troverai il rifugio perfetto — elegante, confortevole, e sempre vicino a dove devi essere.",
  },
  position: {
    pageIntro:
      "In posizione strategica tra aeroporto, porto e Costa Smeralda. Ideale per arrivi serali, partenze all'alba e soggiorni comodi.",
    sectionIntro:
      "Via Alessandria 12, Olbia — a pochi passi dal centro, con accesso rapido a tutte le destinazioni chiave della Gallura.",
    mapTitle: "Olbia Home Sardinia",
    mapSubtitle: "Via Alessandria 12",
    attractions: [
      { name: "Aeroporto Olbia-Costa Smeralda", dist: "5 min", kind: "plane" },
      { name: "Porto di Olbia", dist: "8 min", kind: "ship" },
      { name: "Centro storico di Olbia", dist: "10 min", kind: "building" },
      { name: "Spiaggia di San Teodoro", dist: "25 min", kind: "beach" },
      { name: "Costa Smeralda (Porto Cervo)", dist: "30 min", kind: "sailboat" },
      { name: "La Maddalena (Arcipelago)", dist: "45 min", kind: "island" },
    ],
  },
};

const DEMO_GENERIC: CompanyProfile = {
  demo: {
    badge: "Template demo personalizzabile",
  },
  brand: {
    lead: "Template",
    accent: "Hospitality",
    suffix: "Demo",
    fullName: "Template Hospitality Demo",
    cityName: "la tua destinazione",
  },
  meta: {
    title: "Template Hospitality Demo | Sito personalizzabile",
    description:
      "Demo sito per strutture ricettive, facilmente personalizzabile con brand, testi, foto e contatti.",
  },
  contacts: {
    addressLine: "Via Esempio 123, CAP Citta",
    cityLine: "CAP Citta, Regione",
    phone: "+39 300 000 0000",
    email: "info@template-demo.com",
    mapUrl: "https://maps.google.com",
  },
  hero: {
    breadcrumb: "La tua citta · La tua regione · La tua area",
    subtitle:
      "Camere e suite curate, servizi premium e posizione strategica per soggiorni business e leisure.",
  },
  about: {
    strategicDesc:
      "Posizione strategica, collegamenti comodi e servizi essenziali a portata di mano.",
    intro:
      "Questa demo nasce per mostrare un sito moderno per strutture ricettive, con design elegante e conversione orientata alle prenotazioni.",
    outro:
      "Il progetto e pronto per essere personalizzato con i tuoi contenuti reali e pubblicato rapidamente.",
  },
  position: {
    pageIntro:
      "Posizione strategica tra punti di interesse principali, ideale per soggiorni comodi e senza stress.",
    sectionIntro:
      "Via Esempio 123 — area tranquilla, ben collegata e vicina ai principali servizi.",
    mapTitle: "Template Hospitality Demo",
    mapSubtitle: "Via Esempio 123",
    attractions: [
      { name: "Aeroporto", dist: "15 min", kind: "plane" },
      { name: "Porto", dist: "12 min", kind: "ship" },
      { name: "Centro citta", dist: "10 min", kind: "building" },
      { name: "Spiaggia principale", dist: "20 min", kind: "beach" },
      { name: "Marina turistica", dist: "25 min", kind: "sailboat" },
      { name: "Parco naturale", dist: "30 min", kind: "island" },
    ],
  },
};

// export const ACTIVE_COMPANY: CompanyProfile = OLBIA_HOME;
export const ACTIVE_COMPANY: CompanyProfile = DEMO_GENERIC;
