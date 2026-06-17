# 🍯 Honey Shop — bilingual (Serbian / English) landing page

A top-notch, trust-driven landing page for selling natural honey. Serbian is the
default language; English is one click away. Built with Vite + React + TypeScript
+ Tailwind v4 + framer-motion. No backend needed — visitors contact you via
Viber / WhatsApp / phone / a no-server form.

## ▶️ Run it

```bash
npm install
npm run dev
```

Opens at **http://localhost:5180**.

## ✏️ Change everything in ONE file

Open **`src/config.ts`** — that's the only file you need to touch for normal edits:

| What | Field |
|------|-------|
| Brand name | `brandName` |
| Slogan (SR/EN) | `tagline` |
| Region / family / beekeeper | `region`, `familyName`, `beekeeperName`, `yearsTradition` |
| Phone / WhatsApp / Viber / email | `phone`, `phoneDisplay`, `whatsapp`, `viber`, `email` |
| Address + Google Maps | `address`, `mapUrl` |
| Working hours | `hours` |
| Social links (empty = hidden) | `social` |
| Products + prices | `products[]` |
| Customer reviews | `testimonials[]` |
| Free-delivery threshold | `freeDeliveryFromRsd` |
| Contact form email delivery | `web3formsKey` |

Section titles / button text / FAQ live in **`src/i18n.ts`** (SR + EN side by side).

## 📧 Make the contact form email you (optional, free)

1. Go to https://web3forms.com, enter your email, get an **Access Key**.
2. Paste it into `web3formsKey` in `src/config.ts`.

If left empty, the form simply opens Viber instead — the form never breaks.

## 🖼️ Images

Photos live in **`public/images/`** (`hero.jpg`, `beekeeper.jpg`, `lifestyle.jpg`,
`honeycomb.jpg`, `product-*.jpg`). Replace any file with your own real photos —
same filename — and it appears instantly. If an image is missing, an elegant
amber gradient is shown automatically, so the layout never breaks.

`npm run fetch-images` re-downloads free stock honey photos from Pexels
(needs `PEXELS_API_KEY` set in the environment).

## ⚖️ Note on copy

All marketing copy avoids medical claims (no "cures / treats / heals"), per
EU/Serbian food-labelling rules — only sensory and traditional language.
