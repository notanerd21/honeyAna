// Downloads free honey photography from Pexels into public/images/.
// Usage:  PEXELS_API_KEY=xxxx node scripts/fetch-images.mjs
import { writeFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const KEY = process.env.PEXELS_API_KEY;
if (!KEY) {
  console.error("Missing PEXELS_API_KEY env var.");
  process.exit(1);
}

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "images");

// target file  ->  { query, orientation, size }
// Photos are de-duplicated globally by id, so every file gets a distinct image.
const TARGETS = [
  { file: "hero.jpg",            query: "honey dipper jar",        orientation: "landscape", size: "large2x" },
  { file: "beekeeper.jpg",       query: "beekeeper bees",          orientation: "portrait",  size: "portrait" },
  { file: "lifestyle.jpg",       query: "honey bread breakfast",   orientation: "landscape", size: "large2x" },
  { file: "honeycomb.jpg",       query: "honeycomb dripping",      orientation: "square",    size: "large" },
  { file: "product-bagrem.jpg",  query: "golden honey jar",        orientation: "square",    size: "large" },
  { file: "product-livada.jpg",  query: "honey jar flowers",       orientation: "square",    size: "large" },
  { file: "product-kopriva-polen.jpg",     query: "honey jar pollen",        orientation: "square",    size: "large" },
  { file: "product-krem-kakao-lesnik.jpg", query: "chocolate hazelnut cream jar", orientation: "square", size: "large" },
];

const usedIds = new Set();

async function search(query, orientation) {
  const url = new URL("https://api.pexels.com/v1/search");
  url.searchParams.set("query", query);
  url.searchParams.set("per_page", "15");
  if (orientation !== "square") url.searchParams.set("orientation", orientation);
  const res = await fetch(url, { headers: { Authorization: KEY } });
  if (!res.ok) throw new Error(`Pexels ${res.status} for "${query}"`);
  const json = await res.json();
  return json.photos ?? [];
}

async function download(url, file) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`download ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(join(outDir, file), buf);
  return buf.length;
}

await mkdir(outDir, { recursive: true });

for (const t of TARGETS) {
  try {
    const photos = await search(t.query, t.orientation);
    const photo = photos[t.index] ?? photos[0];
    if (!photo) {
      console.warn(`✗ no result for "${t.query}" -> ${t.file}`);
      continue;
    }
    const src = photo.src[t.size] ?? photo.src.large ?? photo.src.original;
    const bytes = await download(src, t.file);
    console.log(`✓ ${t.file.padEnd(22)} ${(bytes / 1024).toFixed(0)}kb  by ${photo.photographer}`);
  } catch (e) {
    console.warn(`✗ ${t.file}: ${e.message}`);
  }
}

console.log("Done.");
