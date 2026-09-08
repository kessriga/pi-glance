import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";

const manifest = JSON.parse(await readFile("package.json", "utf8"));

assert.equal(manifest.name, "@kessriga/pi-glance");
assert.equal(manifest.private, true, "Git-only package must not be published accidentally");
assert.equal(manifest.publishConfig, undefined);
assert.equal(manifest.repository.url, "git+https://github.com/kessriga/pi-glance.git");
assert.equal(manifest.repository.directory, undefined, "Glance lives at the repository root");
assert.deepEqual(manifest.pi.extensions, ["./index.ts"], "Only Glance may be loaded");
assert.equal(manifest.pi.skills, undefined);
assert.equal(existsSync("packages"), false, "No monorepo packages directory");
assert.equal(existsSync("providers"), false, "No monorepo providers directory");
assert.ok(existsSync("pnpm-lock.yaml"), "Standalone development must have a lockfile");

for (const path of ["LICENSE", "UPSTREAM_LICENSE"]) {
  const license = await readFile(path, "utf8");
  assert.ok(license.includes("MIT License"));
  assert.ok(license.includes("Copyright (c) 2026 linys77"), "Preserve original attribution");
}

console.log("Standalone package tests passed");
