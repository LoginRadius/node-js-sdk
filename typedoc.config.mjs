// API reference generation.
//
// The typescript-axios generator emits no markdown docs at all — unlike the Go,
// Java and C# generators — so without this the Node SDK has no browsable
// reference, only TSDoc that surfaces as IntelliSense in an editor. TypeDoc
// fills that gap from the same comments.
//
// Markdown rather than HTML, committed to docs/, so the reference reads in the
// repository the way Go's generated docs/ does — no build step and no hosting
// decision needed before anyone can look something up.
//
// JS config rather than typedoc.json because TypeDoc rejects unknown keys,
// including a "//" comment field, and this reasoning is worth keeping next to
// the settings it explains.
export default {
  // The public barrel only. Pointing TypeDoc at src/** would document 913
  // generated files, most of them internals a customer cannot reach; what
  // index.ts exports IS the supported surface.
  entryPoints: ['src/index.ts'],
  tsconfig: 'tsconfig.cjs.json',
  out: 'docs',

  plugin: ['typedoc-plugin-markdown'],
  readme: 'none',
  githubPages: false,

  excludePrivate: true,
  excludeInternal: true,
  excludeExternals: true,

  // No "Defined in ..." links.
  //
  // TypeDoc infers them from the git remote of the working directory, which
  // during generation is the sdk-factory repo — so every page linked to the
  // FACTORY at a specific commit rather than the SDK, leaking an internal URL
  // into customer-facing docs. Line numbers would point at generated code
  // anyway, which is not somewhere to send a reader.
  // docs/API.md is written by the factory's renderer BEFORE TypeDoc runs, and
  // TypeDoc empties its output directory by default — which would delete it.
  // Nothing stale accumulates: generate.sh cleans the whole dist tree each run.
  cleanOutputDir: false,

  disableSources: true,

  hideGenerator: true,
  sort: ['alphabetical'],

  // openapi-generator emits JSDoc-era tags — @memberof, @export, @type,
  // @extends — on every generated member. TypeDoc does not know them and warns
  // once per occurrence: 7,148 warnings, which buries anything real. Declaring
  // them as known block tags silences the noise without turning warnings off
  // wholesale, so a genuine problem still surfaces.
  blockTags: [
    '@param',
    '@returns',
    '@throws',
    '@example',
    '@remarks',
    '@see',
    '@deprecated',
    '@summary',
    '@memberof',
    '@export',
    '@type',
    '@extends',
    '@interface',
    '@enum',
  ],

  validation: {
    // Off deliberately. Excluding internals is the point of scoping to the
    // public barrel, so TypeDoc warning once per internal reference — 7,150
    // times — reports the intended design as a problem and buries anything
    // real. The other validations stay on.
    notExported: false,
    invalidLink: true,
    notDocumented: false,
  },
};
