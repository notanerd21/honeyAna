// Prints brightest candidates for a query. Usage: PEXELS_API_KEY=.. Q="honey pouring" node scripts/pick.mjs
const KEY = process.env.PEXELS_API_KEY;
const Q = process.env.Q || "honey";
const u = new URL("https://api.pexels.com/v1/search");
u.searchParams.set("query", Q);
u.searchParams.set("per_page", "12");
const r = await fetch(u, { headers: { Authorization: KEY } });
const { photos = [] } = await r.json();
const lum = (h) => { const n = parseInt(h.slice(1), 16); return ((n >> 16) & 255) * 0.299 + ((n >> 8) & 255) * 0.587 + (n & 255) * 0.114; };
photos.sort((a, b) => lum(b.avg_color) - lum(a.avg_color));
for (const p of photos.slice(0, 6)) console.log(`${p.id}\t${p.avg_color}\t${p.src.large}`);
