#!/usr/bin/env node
// Resolve BOTH halves of the dual build and assert they agree.
//
// The package ships CJS and ESM behind an `exports` map. Nothing in `npm run
// build` or the unit tests proves that map actually works: `tsc` emits both
// trees without ever resolving the package by name, and the tests import from
// source. A wrong `exports` condition, a missing file, or a `.d.ts` pointing at
// the wrong tree therefore ships green and breaks on the customer's first
// `import`.
//
// The demo covers the CJS half by using require() deliberately. This covers the
// ESM half by resolving the package through `exports.import`.
//
// Wired into `prepublishOnly`, so a broken `exports` map fails the publish
// itself rather than only a CI run that might not include this step.
//
//   npm run check:exports

import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';

const require = createRequire(import.meta.url);
const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
const name = pkg.name;

const problems = [];

// --- ESM half: this is the resolution a customer's `import` performs. --------
let esm;
try {
  esm = await import(name);
} catch (err) {
  console.error(`\n✗ ESM resolution of '${name}' failed.\n  ${err.message}\n`);
  console.error("  The package's `exports.import` condition is wrong, or dist/esm/ is missing.\n");
  process.exit(1);
}

// --- CJS half: what the demo and any require() consumer performs. -----------
let cjs;
try {
  cjs = require(name);
} catch (err) {
  console.error(`\n✗ CJS resolution of '${name}' failed.\n  ${err.message}\n`);
  console.error("  The package's `exports.require` condition is wrong, or dist/cjs/ is missing.\n");
  process.exit(1);
}

// --- The two halves must expose the same public surface. --------------------
// A half-built or mis-mapped tree usually shows up here rather than as an
// outright resolution failure.
const REQUIRED = ['LoginRadius', 'LoginRadiusError', 'generateSOTT'];
for (const sym of REQUIRED) {
  if (typeof esm[sym] === 'undefined') problems.push(`ESM build does not export '${sym}'`);
  if (typeof cjs[sym] === 'undefined') problems.push(`CJS build does not export '${sym}'`);
}

const esmKeys = new Set(Object.keys(esm).filter((k) => k !== 'default'));
const cjsKeys = new Set(Object.keys(cjs).filter((k) => k !== 'default'));
for (const k of esmKeys) if (!cjsKeys.has(k)) problems.push(`'${k}' is exported by ESM but not CJS`);
for (const k of cjsKeys) if (!esmKeys.has(k)) problems.push(`'${k}' is exported by CJS but not ESM`);

// A construction through each half catches a tree that resolves but is broken.
for (const [label, mod] of [['ESM', esm], ['CJS', cjs]]) {
  try {
    const client = new mod.LoginRadius({ apiKey: 'dual-build-check' });
    if (typeof client.user === 'undefined') problems.push(`${label}: client exposes no services`);
  } catch (err) {
    problems.push(`${label}: constructing LoginRadius threw — ${err.message}`);
  }
}

if (problems.length) {
  console.error('\n✗ Dual-build check FAILED\n');
  for (const p of problems) console.error(`    ${p}`);
  console.error('\n  Check the `exports` map and the dist/cjs + dist/esm trees.\n');
  process.exit(1);
}
console.log(`✓ dual build resolves: ESM and CJS both export ${esmKeys.size} symbols`);
