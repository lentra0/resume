/**
 * Renders the exported static site to A4 PDFs with a real (selectable, ATS-parsable)
 * text layer - no rasterising, no OCR pass needed.
 *
 * Usage: npm run build && npm run pdf
 */
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "out");
const BASE_PATH = "/resume";
const PORT = 4321;

const TARGETS = [
  { route: "/ru/pdf/", file: "StaforkinGR_DevOps.pdf" },
  { route: "/en/pdf/", file: "StaforkinGR_DevOps_EN.pdf" },
];

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".pdf": "application/pdf",
  ".txt": "text/plain; charset=utf-8",
};

function resolveFile(urlPath) {
  let rel = decodeURIComponent(urlPath.split("?")[0]);
  if (rel.startsWith(BASE_PATH)) rel = rel.slice(BASE_PATH.length);
  if (rel.endsWith("/")) rel += "index.html";
  if (rel === "") rel = "/index.html";
  const abs = path.join(outDir, rel);
  if (!abs.startsWith(outDir)) return null; // path traversal guard
  return fs.existsSync(abs) && fs.statSync(abs).isFile() ? abs : null;
}

const server = http.createServer((req, res) => {
  const file = resolveFile(req.url ?? "/");
  if (!file) {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("not found: " + req.url);
    return;
  }
  res.writeHead(200, { "content-type": MIME[path.extname(file)] ?? "application/octet-stream" });
  fs.createReadStream(file).pipe(res);
});

if (!fs.existsSync(outDir)) {
  console.error("out/ not found - run `npm run build` first.");
  process.exit(1);
}

await new Promise((resolve) => server.listen(PORT, "127.0.0.1", resolve));
console.log(`serving out/ on http://127.0.0.1:${PORT}${BASE_PATH}/`);

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--font-render-hinting=none"],
});

for (const target of TARGETS) {
  const page = await browser.newPage();
  const url = `http://127.0.0.1:${PORT}${BASE_PATH}${target.route}`;
  await page.goto(url, { waitUntil: "networkidle0" });
  await page.evaluateHandle("document.fonts.ready");

  const dest = path.join(outDir, target.file);
  await page.pdf({
    path: dest,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    displayHeaderFooter: false,
    tagged: true, // accessible / structured PDF - helps ATS parsers
  });
  await page.close();

  const bytes = fs.statSync(dest).size;
  console.log(`✓ ${target.file}  (${(bytes / 1024).toFixed(0)} KB)  ← ${target.route}`);
}

await browser.close();
server.close();
