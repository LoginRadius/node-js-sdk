# `loginradius-sdk@12` — Express demo (ESM)

The same app as [`../demo`](../demo), resolving the SDK through **ESM**.

`src/` and `public/` here are **copies** of the CJS demo's, synced when the SDK
is generated. Only `package.json` and `tsconfig.json` differ, and that
difference is the entire point:

| | Module system | How Node resolves the SDK |
|---|---|---|
| [`../demo`](../demo) | CommonJS | `import` compiles to `require()` → `exports.require` → `dist/cjs/` |
| this demo | ESM | `import` stays `import` → `exports.import` → `dist/esm/` |

One implementation, both halves of the dual build exercised. Editing this
directory's `src/` is pointless — it is overwritten on the next build. **Change
`../demo/src/` instead.**

## Run

```bash
cd demo-esm
cp .env.example .env
npm install
npm run dev
```

Browse <http://localhost:3000>. Set `PORT` in `.env` to run both demos at once.

## Why the extension rewrite

Node's ESM resolver requires explicit `.js` extensions on relative imports;
CommonJS does not. Because the sources are shared, they are written without
extensions and `scripts/postbuild-esm.mjs` adds them to the compiled output —
the same approach the SDK itself uses. The alternative, writing `.js`
extensions in shared source, works too but reads oddly in the CJS demo.

## Everything else

Routes, handlers, session handling, WebAuthn and caveats are identical. See
[`../demo/README.md`](../demo/README.md); it is the single source of truth for
what these demos do.
