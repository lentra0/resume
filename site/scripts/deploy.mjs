/**
 * Publishes out/ to the repository root, which is what GitHub Pages serves.
 * Only ever removes artifacts this site generates; never touches sources.
 *
 * Usage: node scripts/deploy.mjs [--dry-run]
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const siteDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const repoRoot = path.resolve(siteDir, "..");
const outDir = path.join(siteDir, "out");
const dryRun = process.argv.includes("--dry-run");

/** never deleted, whatever happens */
const PROTECTED = new Set([".git", ".gitignore", "site"]);

if (!fs.existsSync(outDir)) {
  console.error("out/ not found - run `npm run build` first.");
  process.exit(1);
}

// 1. clear previously published artifacts from the repo root
for (const entry of fs.readdirSync(repoRoot)) {
  if (PROTECTED.has(entry)) continue;
  const target = path.join(repoRoot, entry);
  console.log(`${dryRun ? "would remove" : "remove"}  ${entry}`);
  if (!dryRun) fs.rmSync(target, { recursive: true, force: true });
}

// 2. the print-only routes carry the phone number - never publish them
for (const route of [["ru", "pdf"], ["en", "pdf"]]) {
  const target = path.join(outDir, ...route);
  if (fs.existsSync(target)) {
    console.log(`${dryRun ? "would drop  " : "drop    "}  out/${route.join("/")} (print-only route)`);
    if (!dryRun) fs.rmSync(target, { recursive: true, force: true });
  }
}

// 3. copy the fresh export in
for (const entry of fs.readdirSync(outDir)) {
  console.log(`${dryRun ? "would copy  " : "copy    "}  ${entry}`);
  if (!dryRun) {
    fs.cpSync(path.join(outDir, entry), path.join(repoRoot, entry), { recursive: true });
  }
}

// GitHub Pages must not run Jekyll over _next/
if (!dryRun) fs.writeFileSync(path.join(repoRoot, ".nojekyll"), "");

console.log(
  dryRun
    ? "\ndry run - nothing changed."
    : "\npublished to repo root. Review with `git status`, then commit and push."
);
