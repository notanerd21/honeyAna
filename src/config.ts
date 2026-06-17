/* ══════════════════════════════════════════════════════════════════════
   ⭐  CENTRALNA KONFIGURACIJA  /  CENTRAL CONFIG  ⭐
   ──────────────────────────────────────────────────────────────────────
   SR: Promenite SAMO ovaj fajl da prilagodite sajt — ime brenda, telefon,
       email, cene, društvene mreže. Sve ostalo se ažurira automatski.
   EN: Edit ONLY this file to customise the site — brand name, phone, email,
       prices, social links. Everything else updates automatically.
   ══════════════════════════════════════════════════════════════════════ */

export type Lang = "sr" | "en";
export type LocalString = { sr: string; en: string };

export const config = {
  /* ─── OSNOVNO / BASICS ──────────────────────────────────────────── */
  brandName: "Zlatni Saće",
  tagline: {
    sr: "Pravi domaći med, direktno od pčelara",
    en: "Real homemade honey, straight from the beekeeper",
  } as LocalString,
  region: "Fruška gora", // region porekla / origin region
  familyName: {
    sr: "porodica Petrović",
    en: "the Petrović family",
  } as LocalString,
  beekeeperName: "Milan Petrović",
  yearsTradition: 25, // godina tradicije / years of tradition

  /* ─── KONTAKT / CONTACT ─────────────────────────────────────────── */
  phoneDisplay: "+381 64 123 4567", // kako se prikazuje / shown text
  phone: "+381641234567",           // tel: link (sa +, bez razmaka)
  whatsapp: "381641234567",         // SAMO cifre / digits only (wa.me)
  viber: "+381641234567",           // viber:// link
  email: "kontakt@zlatnisace.rs",
  address: {
    sr: "Glavna 12, Sremski Karlovci, Srbija",
    en: "Glavna 12, Sremski Karlovci, Serbia",
  } as LocalString,
  mapUrl: "https://maps.google.com/?q=Sremski+Karlovci",

  /* Unapred popunjena poruka za WhatsApp/Viber / prefilled message */
  contactPrefill: {
    sr: "Zdravo! Zanima me vaš med. Da li je dostupan?",
    en: "Hello! I'm interested in your honey. Is it available?",
  } as LocalString,

  /* ─── RADNO VREME / HOURS ───────────────────────────────────────── */
  hours: {
    sr: "Pon–Sub: 08–18h",
    en: "Mon–Sat: 8am–6pm",
  } as LocalString,

  /* ─── DRUŠTVENE MREŽE / SOCIAL (prazno "" = sakriveno / empty = hidden) */
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    tiktok: "",
  },

  /* ─── KONTAKT FORMA / CONTACT FORM ──────────────────────────────── */
  // SR: Besplatno na web3forms.com — napravite "Access Key" i nalepite ovde.
  // EN: Free at web3forms.com — create an Access Key and paste it here.
  // Ako je prazno, forma vodi korisnika na Viber/telefon.
  web3formsKey: "",

  /* ─── ISPORUKA & PLAĆANJE / DELIVERY & PAYMENT ──────────────────── */
  freeDeliveryFromRsd: 4000, // 0 = bez praga / no free-delivery threshold

  /* ─── VALUTA / CURRENCY ─────────────────────────────────────────── */
  currency: { rsd: "RSD", eur: "€" },
  showEur: true, // prikaži i cenu u evrima / also show EUR price

  /* ─── PROIZVODI / PRODUCTS ──────────────────────────────────────── */
  // Slike idu u /public/images/ . Ako slika ne postoji, prikazuje se
  // elegantna med-gradient zamena automatski.
  products: [
    {
      id: "bagrem",
      name: { sr: "Bagremov med", en: "Acacia honey" },
      note: {
        sr: "Najtraženiji — blag, svetao i dugo ostaje tečan.",
        en: "Most popular — mild, light and stays liquid for long.",
      },
      priceRsd: 1200,
      priceEur: 11,
      tag: { sr: "Najtraženiji", en: "Bestseller" },
      image: "/images/product-bagrem.jpg",
      tone: "#e9b949", // boja zamene / placeholder tint
    },
    {
      id: "livada",
      name: { sr: "Livadski med", en: "Meadow honey" },
      note: {
        sr: "Klasičan, uravnotežen ukus iz cvetnih livada.",
        en: "Classic, balanced taste from flowering meadows.",
      },
      priceRsd: 1000,
      priceEur: 9,
      tag: { sr: "", en: "" },
      image: "/images/product-livada.jpg",
      tone: "#d99a2b",
    },
    {
      id: "lipa",
      name: { sr: "Lipov med", en: "Linden honey" },
      note: {
        sr: "Aromatičan i osvežavajuć — savršen uz čaj.",
        en: "Aromatic and refreshing — perfect with tea.",
      },
      priceRsd: 1300,
      priceEur: 12,
      tag: { sr: "", en: "" },
      image: "/images/product-lipa.jpg",
      tone: "#c98b2e",
    },
    {
      id: "sumski",
      name: { sr: "Šumski med", en: "Forest honey" },
      note: {
        sr: "Taman i bogat, intenzivnog ukusa za prave gurmane.",
        en: "Dark and rich, intense flavour for true gourmets.",
      },
      priceRsd: 1500,
      priceEur: 14,
      tag: { sr: "Premium", en: "Premium" },
      image: "/images/product-sumski.jpg",
      tone: "#8a531a",
    },
  ],

  /* ─── UTISCI KUPACA / TESTIMONIALS ──────────────────────────────── */
  testimonials: [
    {
      name: "Jelena, Novi Sad",
      text: {
        sr: "Najbolji med koji smo probali. Deca ga obožavaju!",
        en: "The best honey we've ever tried. The kids love it!",
      },
    },
    {
      name: "Marko, Beograd",
      text: {
        sr: "Naručujem već treću godinu. Pravi, domaći ukus.",
        en: "Ordering for the third year now. Real, homemade taste.",
      },
    },
    {
      name: "Ana, Subotica",
      text: {
        sr: "Brza isporuka, a med se prirodno ušećerio — dokaz da je pravi.",
        en: "Fast delivery, and the honey crystallised naturally — proof it's real.",
      },
    },
  ],

  /* ─── SLIKE SEKCIJA / SECTION IMAGES (opciono / optional) ───────── */
  images: {
    hero: "/images/hero.jpg",
    story: "/images/beekeeper.jpg",
    lifestyle: "/images/lifestyle.jpg",
    honeycomb: "/images/honeycomb.jpg",
    proof: "/images/pour.jpg",
  },

  /* ─── VIDEO (opciono / optional) ───────────────────────────────────
     Ostavite "" da prikažete sliku umesto videa.
     Leave "" to show the image instead of a video. */
  videos: {
    hero: "/videos/hero.mp4",
    proof: "", // dodajte /videos/proof.mp4 kad bude generisan / add when generated
  },
} as const;

export type Product = (typeof config.products)[number];
