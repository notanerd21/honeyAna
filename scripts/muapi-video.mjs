// Generate a video via MuAPI (image-to-video) and download the result.
// Config via env:
//   MUAPI_KEY   (required)
//   MU_MODEL    e.g. "seedance-v2.0-i2v"
//   MU_PROMPT   text prompt
//   MU_IMAGE    public https URL of the source image (image-to-video)
//   MU_DURATION integer seconds (default 5)
//   MU_ASPECT   "16:9" | "9:16" (default 16:9)
//   MU_OUT      output file path (e.g. public/videos/hero.mp4)
import { writeFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";

const KEY = process.env.MUAPI_KEY;
const MODEL = process.env.MU_MODEL || "seedance-v2.0-i2v";
const PROMPT = process.env.MU_PROMPT || "";
const IMAGE = process.env.MU_IMAGE || "";
const DURATION = parseInt(process.env.MU_DURATION || "5", 10);
const ASPECT = process.env.MU_ASPECT || "16:9";
const OUT = process.env.MU_OUT || "public/videos/out.mp4";
const BASE = "https://api.muapi.ai/api/v1";

if (!KEY) { console.error("Missing MUAPI_KEY"); process.exit(1); }

const body = {
  prompt: PROMPT,
  aspect_ratio: ASPECT,
  duration: DURATION,
  quality: "high",
};
if (IMAGE) body.images_list = [IMAGE];

console.log(`[submit] POST ${BASE}/${MODEL}`);
console.log(`[submit] body: ${JSON.stringify({ ...body, prompt: PROMPT.slice(0, 60) + "..." })}`);

const submit = await fetch(`${BASE}/${MODEL}`, {
  method: "POST",
  headers: { "Content-Type": "application/json", "x-api-key": KEY },
  body: JSON.stringify(body),
});
const submitText = await submit.text();
console.log(`[submit] status ${submit.status}`);
console.log(`[submit] response: ${submitText.slice(0, 800)}`);
if (!submit.ok) { console.error("Submit failed — adjust fields/model and retry (no credits charged on error)."); process.exit(2); }

let submitJson;
try { submitJson = JSON.parse(submitText); } catch { console.error("Non-JSON submit response"); process.exit(2); }
const requestId = submitJson.request_id || submitJson.id || submitJson.requestId;
if (!requestId) { console.error("No request_id in response"); process.exit(2); }
console.log(`[submit] request_id: ${requestId}`);

let outUrl = null;
for (let i = 0; i < 100; i++) {
  await new Promise((r) => setTimeout(r, 5000));
  const res = await fetch(`${BASE}/predictions/${requestId}/result`, { headers: { "x-api-key": KEY } });
  const txt = await res.text();
  let j;
  try { j = JSON.parse(txt); } catch { console.log(`[poll ${i}] non-JSON: ${txt.slice(0, 200)}`); continue; }
  const status = j.status || j.state;
  console.log(`[poll ${i}] status=${status}`);
  if (status && /complete|completed|succeeded|success|done/i.test(status)) {
    const outputs = j.outputs || j.output || j.result || [];
    outUrl = Array.isArray(outputs) ? (outputs[0]?.url || outputs[0]) : (outputs.url || outputs);
    if (!outUrl) { console.log(`[done] but no output url. Raw: ${txt.slice(0, 600)}`); process.exit(3); }
    break;
  }
  if (status && /fail|error|cancel/i.test(status)) {
    console.error(`[failed] ${txt.slice(0, 600)}`);
    process.exit(3);
  }
}
if (!outUrl) { console.error("Timed out waiting for result"); process.exit(4); }

console.log(`[download] ${outUrl}`);
await mkdir(dirname(OUT), { recursive: true });
const v = await fetch(outUrl);
await writeFile(OUT, Buffer.from(await v.arrayBuffer()));
console.log(`[saved] ${OUT}`);
