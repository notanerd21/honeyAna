import { config, type Lang } from "./config";

/* ──────────────────────────────────────────────────────────────────────
   Sav UI tekst (naslovi sekcija, dugmad, FAQ...). Proizvodi i kontakt
   podaci su u config.ts. Copy je usklađen sa zakonom — bez medicinskih
   tvrdnji ("leči/cures" itd.), samo senzorne i tradicionalne formulacije.
   ────────────────────────────────────────────────────────────────────── */

const yrs = config.yearsTradition;

export const strings = {
  sr: {
    nav: {
      products: "Proizvodi",
      about: "Naša priča",
      why: "Zašto naš med",
      faq: "Pitanja",
      contact: "Kontakt",
    },
    langLabel: "SR",

    hero: {
      eyebrow: `${config.region} · ${yrs} godina tradicije`,
      ctaPrimary: "Poručite",
      ctaSecondary: "Pozovite nas",
      note: "Plaćanje pouzećem · Dostava na kućnu adresu",
    },

    order: {
      title: "Kako želite da poručite?",
      subtitle: "Izaberite način — poruka sa svim detaljima je već spremna.",
      messageLabel: "Vaša poruka",
      copy: "Kopiraj poruku",
      copied: "Kopirano!",
      viberHint: "Tekst se kopira — nalepite ga u Viber.",
      close: "Zatvori",
    },

    trust: [
      "100% prirodno",
      "Direktno od pčelara",
      "Bez šećera i aditiva",
      "Plaćanje pouzećem",
    ],

    story: {
      title: "Med iz naše porodice, već generacijama",
      body: [
        `Naš med dolazi sa pčelinjaka na ${config.region}, daleko od gradske vreve i zagađenja. Svaku teglu vrcamo sami, bez žurbe i bez prečica.`,
        `Ne kupujemo med od drugih i ne mešamo ga. Ono što stavimo u teglu jeste tačno ono što su naše pčele sakupile — ništa više, ništa manje.`,
      ],
      signature: `— ${config.beekeeperName}, pčelar`,
    },

    products: {
      title: "Naši proizvodi",
      subtitle: "Svaka vrsta meda ima svoj karakter — izaberite svoj.",
      order: "Naruči",
      from: "",
      perJar: "/ tegla (720g)",
    },

    why: {
      title: "Zašto baš naš med",
      items: [
        {
          t: "Direktno od pčelara",
          d: "Bez preprodavaca i bez posrednika. Med ide sa našeg pčelinjaka pravo do vaše trpeze.",
        },
        {
          t: "Bez šećernog sirupa",
          d: "Nikada ne dodajemo šećer, sirup ni aditive. Samo čist, sirov med onakav kakav je u saću.",
        },
        {
          t: "Prirodno se ušećeri",
          d: "Kristalizacija je znak pravog meda, a ne mana. Dovoljno je da teglu zagrejete u toploj vodi.",
        },
        {
          t: "Porodična tradicija",
          d: `Više od ${yrs} godina brige o pčelama i znanja koje se prenosi s kolena na koleno.`,
        },
      ],
    },

    proof: {
      title: "Kako da prepoznate pravi med?",
      subtitle: "Lažni med preplavio je tržište. Evo po čemu se naš razlikuje:",
      points: [
        "Pravi med se vremenom prirodno ušećeri (kristališe) — to je dobar znak.",
        "Sirov je i nezagrevan, pa zadržava prirodnu aromu i polen.",
        "Sa jasnim poreklom — znate sa kog pčelinjaka i iz kog kraja dolazi.",
        "Bez dodatog šećera, sirupa i aditiva.",
      ],
    },

    testimonials: { title: "Šta kažu naši kupci" },

    how: {
      title: "Kako da poručite",
      steps: [
        { t: "Javite se", d: "Pozovite nas ili pišite na Viber/WhatsApp — odgovaramo brzo." },
        { t: "Potvrda", d: "Dogovaramo vrste meda, količinu i adresu za dostavu." },
        { t: "Dostava pouzećem", d: "Med stiže na vašu adresu, a plaćate kuriru pri preuzimanju." },
      ],
    },

    faq: {
      title: "Česta pitanja",
      items: [
        {
          q: "Kako plaćam?",
          a: "Plaćanje je pouzećem — gotovinom ili karticom kuriru, kada vam med stigne na adresu.",
        },
        {
          q: "Koliko traje dostava?",
          a: "Najčešće 2–4 radna dana, u zavisnosti od vašeg mesta. Tačan rok potvrđujemo prilikom narudžbine.",
        },
        {
          q: "Da li je dostava besplatna?",
          a: `Dostava je besplatna za porudžbine iznad ${config.freeDeliveryFromRsd.toLocaleString("sr-RS")} ${config.currency.rsd}. Ispod toga, trošak dostave plaća kupac.`,
        },
        {
          q: "Zašto se med ušećerio?",
          a: "Kristalizacija je potpuno prirodna i znak je pravog meda. Zagrejte teglu u toploj vodi (do 40°C) i med će ponovo postati tečan.",
        },
        {
          q: "Koliko dugo med traje?",
          a: "Pravilno zatvoren i čuvan na sobnoj temperaturi, med traje veoma dugo. Čuvajte ga dalje od direktnog sunca.",
        },
      ],
    },

    contact: {
      title: "Kontaktirajte nas",
      subtitle: "Pišite nam na Viber ili nas pozovite — odgovaramo brzo.",
      viber: "Viber",
      whatsapp: "WhatsApp",
      call: "Pozovite",
      email: "Email",
      formName: "Vaše ime",
      formContact: "Telefon ili email",
      formMessage: "Poruka (vrsta meda, količina...)",
      formSubmit: "Pošaljite upit",
      formSending: "Šaljem...",
      formOk: "Hvala! Javljamo se uskoro.",
      formErr: "Greška pri slanju. Pozovite nas direktno na ",
      noKeyHint: "Najbrže nas dobijete preko Vibera ili telefona.",
      hours: "Radno vreme",
      addressTitle: "Adresa",
    },

    footer: {
      tagline: "Prirodni domaći med, sa ljubavlju.",
      rights: "Sva prava zadržana.",
      nav: "Brze veze",
      contact: "Kontakt",
    },
  },

  en: {
    nav: {
      products: "Products",
      about: "Our Story",
      why: "Why Our Honey",
      faq: "FAQ",
      contact: "Contact",
    },
    langLabel: "EN",

    hero: {
      eyebrow: `${config.region} · ${yrs} years of tradition`,
      ctaPrimary: "Order now",
      ctaSecondary: "Call us",
      note: "Cash on delivery · Home delivery",
    },

    order: {
      title: "How would you like to order?",
      subtitle: "Pick a channel — your message with all the details is ready.",
      messageLabel: "Your message",
      copy: "Copy message",
      copied: "Copied!",
      viberHint: "Text is copied — paste it into Viber.",
      close: "Close",
    },

    trust: [
      "100% natural",
      "Straight from the beekeeper",
      "No sugar or additives",
      "Cash on delivery",
    ],

    story: {
      title: "Honey from our family, for generations",
      body: [
        `Our honey comes from our apiary on ${config.region}, far from city noise and pollution. We harvest every jar ourselves — no rush, no shortcuts.`,
        `We never buy honey from others and we never blend it. What goes into the jar is exactly what our bees gathered — nothing more, nothing less.`,
      ],
      signature: `— ${config.beekeeperName}, beekeeper`,
    },

    products: {
      title: "Our Products",
      subtitle: "Every honey has its own character — choose yours.",
      order: "Order",
      from: "",
      perJar: "/ jar (720g)",
    },

    why: {
      title: "Why Our Honey",
      items: [
        {
          t: "Straight from the beekeeper",
          d: "No resellers, no middlemen. Honey goes from our apiary straight to your table.",
        },
        {
          t: "No sugar syrup",
          d: "We never add sugar, syrup or additives. Just pure, raw honey the way it is in the comb.",
        },
        {
          t: "Crystallises naturally",
          d: "Crystallisation is a sign of real honey, not a flaw. Just warm the jar in hot water.",
        },
        {
          t: "Family tradition",
          d: `More than ${yrs} years of caring for bees and know-how passed down through generations.`,
        },
      ],
    },

    proof: {
      title: "How to recognise real honey?",
      subtitle: "Fake honey floods the market. Here's how ours is different:",
      points: [
        "Real honey crystallises naturally over time — that's a good sign.",
        "It's raw and unheated, so it keeps its natural aroma and pollen.",
        "Clear origin — you know which apiary and region it comes from.",
        "No added sugar, syrup or additives.",
      ],
    },

    testimonials: { title: "What our customers say" },

    how: {
      title: "How to Order",
      steps: [
        { t: "Reach out", d: "Call us or message on Viber/WhatsApp — we reply fast." },
        { t: "Confirm", d: "We agree on honey types, quantity and delivery address." },
        { t: "Cash on delivery", d: "Honey arrives at your door and you pay the courier on receipt." },
      ],
    },

    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          q: "How do I pay?",
          a: "Payment is cash on delivery — cash or card to the courier, when your honey arrives.",
        },
        {
          q: "How long does delivery take?",
          a: "Usually 2–4 business days, depending on your location. We confirm the exact time when you order.",
        },
        {
          q: "Is delivery free?",
          a: `Delivery is free for orders above ${config.freeDeliveryFromRsd.toLocaleString("en-US")} ${config.currency.rsd}. Below that, the delivery cost is covered by the buyer.`,
        },
        {
          q: "Why has the honey crystallised?",
          a: "Crystallisation is completely natural and a sign of real honey. Warm the jar in hot water (up to 40°C) and it will turn liquid again.",
        },
        {
          q: "How long does honey last?",
          a: "Properly sealed and stored at room temperature, honey lasts a very long time. Keep it away from direct sunlight.",
        },
      ],
    },

    contact: {
      title: "Contact Us",
      subtitle: "Message us on Viber or give us a call — we reply fast.",
      viber: "Viber",
      whatsapp: "WhatsApp",
      call: "Call",
      email: "Email",
      formName: "Your name",
      formContact: "Phone or email",
      formMessage: "Message (honey type, quantity...)",
      formSubmit: "Send inquiry",
      formSending: "Sending...",
      formOk: "Thank you! We'll be in touch soon.",
      formErr: "Sending failed. Call us directly at ",
      noKeyHint: "The fastest way to reach us is via Viber or phone.",
      hours: "Working hours",
      addressTitle: "Address",
    },

    footer: {
      tagline: "Natural homemade honey, made with love.",
      rights: "All rights reserved.",
      nav: "Quick links",
      contact: "Contact",
    },
  },
} as const;

export type Strings = (typeof strings)[Lang];
