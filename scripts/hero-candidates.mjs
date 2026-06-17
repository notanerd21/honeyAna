// Lists bright/golden honey hero candidates from Pexels (does NOT download).
// Usage: PEXELS_API_KEY=xxx node scripts/hero-candidates.mjs
const KEY = process.env.PEXELS_API_KEY;
const QUERIES = [
  "honey jar golden sunlight",
  "honey dripping golden",
  "honey jar wooden dipper bright",
  "honeycomb honey golden",
  "jar of honey light",
];
const seen = new Set();
const out = [];
for (const q of QUERIES) {
  const url = new URL("https://api.pexels.com/v1/search");
  url.searchParams.set("query", q);
  url.searchParams.set("per_page", "6");
  url.searchParams.set("orientation", "landscape");
  const res = await fetch(url, { headers: { Authorization: KEY } });
  if (!res.ok) continue;
  const { photos = [] } = await res.json();
  for (const p of photos) {
    if (seen.has(p.id)) continue;
    seen.add(p.id);
    out.push({ id: p.id, by: p.photographer, avg: p.avg_color, preview: p.src.large, full: p.src.large2x });
  }
}
// Prefer brighter average colors (lighter hex first)
const lum = (hex) => {
  const n = parseInt(hex.slice(1), 16);
  return ((n >> 16) & 255) * 0.299 + ((n >> 8) & 255) * 0.587 + (n & 255) * 0.114;
};
out.sort((a, b) => lum(b.avg) - lum(a.avg));
for (const c of out.slice(0, 8)) {
  console.log(`${c.id}\t${c.avg}\t${c.by}\t${c.preview}`);
}
