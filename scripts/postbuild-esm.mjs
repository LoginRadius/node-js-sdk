#!/usr/bin/env node
// Post-process the ESM build so it satisfies Node's pure-ESM resolver:
//
//   1. Adds `.js` extensions to relative imports in compiled `.js` files.
//   2. Adds `.js` extensions to relative imports in `.d.ts` declaration
//      files (TypeScript with moduleResolution:node16/nodenext expects them
//      and even older resolvers tolerate them).
//   3. Drops a `package.json` marker with `{"type":"module"}` so Node treats
//      this subtree as ESM regardless of the parent package's `type`.
//
// We chose extension rewriting (not file renames to `.mjs`) so consumers
// using TypeScript still get `.d.ts` declaration lookup via the standard
// types-condition in `exports`. The cost is one walk over `dist/esm/` after
// every build; the alternative (a bundler) would obscure the per-module
// tree-shaking the generated client allows.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ESM_DIR = path.resolve(__dirname, '..', 'dist', 'esm');

if (!fs.existsSync(ESM_DIR)) {
  console.error(`ESM build directory not found at ${ESM_DIR} — did tsc run?`);
  process.exit(1);
}

const REL_IMPORT_RE = /(from\s+|import\s*\(\s*)(['"])(\.\.?\/[^'"]+)(['"])/g;

// TypeScript's commonjs/node resolution lets `import './foo'` mean either
// `./foo.js` (file) or `./foo/index.js` (directory with an index). Pure-ESM
// Node refuses to guess — we have to write the explicit target. We resolve
// each relative import against the file's directory and check the filesystem
// before rewriting.
function rewriteImports(content, fromFile) {
  return content.replace(REL_IMPORT_RE, (match, prefix, openQuote, importPath, closeQuote) => {
    if (importPath.endsWith('.js') || importPath.endsWith('.mjs') || importPath.endsWith('.json')) {
      return match;
    }
    const fromDir = path.dirname(fromFile);
    const resolved = path.resolve(fromDir, importPath);
    let suffix;
    if (fs.existsSync(`${resolved}.js`)) {
      suffix = '.js';
    } else if (fs.existsSync(path.join(resolved, 'index.js'))) {
      suffix = '/index.js';
    } else {
      // Leave it alone — either the user/generator did something we don't
      // understand, or it was a typed-only import that won't run anyway.
      return match;
    }
    return `${prefix}${openQuote}${importPath}${suffix}${closeQuote}`;
  });
}

let rewritten = 0;
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
      continue;
    }
    if (!entry.isFile()) continue;
    if (!(full.endsWith('.js') || full.endsWith('.d.ts'))) continue;
    const original = fs.readFileSync(full, 'utf8');
    const next = rewriteImports(original, full);
    if (next !== original) {
      fs.writeFileSync(full, next, 'utf8');
      rewritten++;
    }
  }
}

walk(ESM_DIR);

fs.writeFileSync(
  path.join(ESM_DIR, 'package.json'),
  JSON.stringify({ type: 'module' }, null, 2) + '\n',
);

console.log(`postbuild-esm: rewrote imports in ${rewritten} files; wrote ${path.relative(process.cwd(), path.join(ESM_DIR, 'package.json'))}.`);
