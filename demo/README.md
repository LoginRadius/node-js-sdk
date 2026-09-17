# `loginradius-sdk@12` — Express demo (CJS)

An Express + TypeScript app that exercises the SDK end to end across the full
demo contract. It imports the SDK via `require()`, so the runtime hits the
**CommonJS** half of the dual build (`dist/cjs/`); `npm run check:exports` at
the package root covers the **ESM** half.

> **Demo only.** Cookies are unsigned, there is no CSRF protection, and the
> session map lives in process memory. Do not copy this into production.

## Endpoints

The route table is **generated** from `demo.routes` in the factory's
`manifest/sdk.yaml`, so every LoginRadius SDK's demo exposes the same contract.
It is not hand-maintained here and cannot drift from the handlers: a route with
no implementation fails `tsc`.

Everything is on one page, as a flat list of titled cards — the same layout the
Java, .NET and PHP demos use, so all five read as one product. It used to be
three pages behind a tab strip; no route was dropped in the merge.

| Section | Covers |
|---|---|
| Register / Session | Register, log in, and the second-factor challenge |
| Forgot / Reset / Change password | Reset email, SMS OTP, reset by token, change password |
| Profile / Update profile | Profile read and update |
| Identifiers | Add and remove email, update phone |
| Delete account | Account deletion |
| Access token | Refresh, validate, active session |
| Multi-factor authentication | Settings, backup codes, authenticator enrolment |
| Passkey | Register and log in with a passkey |

### Two kinds of credential

Most authenticated routes read the demo session cookie and pass its access token
to the SDK. The three `/api/mfa/login/*` routes do **not**: they are
authenticated by the second-factor token a challenge login returned, held in a
separate cookie. Both names come from the manifest, so they cannot drift between
SDKs.

The session cookie carries an **opaque id**, not the access token itself.
Refreshing rotates the access token upstream and invalidates the old one; an id
lets that rotation happen server-side without the browser holding a stale
credential.

### Routes that need extra configuration

- **Passkey** needs a secure context. `http://localhost` qualifies, so the demo
  works as shipped; over plain HTTP on any other host the browser refuses.
- **`DELETE /api/account`** deletes the signed-in account only. The underlying
  operation is admin-scoped and would delete *any* address in the tenant, so the
  handler reads the signed-in profile first and refuses a mismatch. That guard is
  demo policy, not an SDK limitation.
- **Custom objects** are currently disabled in the factory's manifest pending a
  tenant with a custom-object schema.

## Files

- `src/server.ts` — bootstrap; registers every route from the generated table
  and applies its verb and auth mode uniformly.
- `src/routes.generated.ts` — **generated.** The route table, one input type per
  generated route, and the wrapper that decodes, validates and reports errors.
- `src/calls.ts` — the SDK call for each generated route. The part you copy.
- `src/handlers.ts` — the routes with real logic: SOTT, sessions, redirects, the
  delete-account guard, and the WebAuthn finish steps.
- `src/session.ts` — in-memory session store and cookie helpers.
- `src/middleware/auth.ts` — the two auth modes.
- `public/` — the UI: `app.js` holds the shared fetch helpers and the WebAuthn
  encoding, and each page is plain HTML with no build step.

### Why the split

The wrapper around every SDK call is identical — decode a body, check required
fields, resolve a token, map an error to a status. Generating it from the
manifest keeps four languages' demos from drifting apart on any of that. The SDK
call itself stays hand-written in `calls.ts`, because that is the part a customer
actually copies and it should be readable, not generated out of sight.

## Setup

```bash
cd demo
cp .env.example .env       # fill in your tenant credentials
npm install
npm run dev                # or: npm run build && npm start
```

Open <http://localhost:3000>.

## Environment variables

See `.env.example`. Most important:

- `LR_API_KEY`, `LR_API_SECRET` — your tenant credentials.
- `LR_VERIFICATION_URL` — where email verification links return to
  (usually `http://localhost:3000` while developing).
- `LR_RESET_PASSWORD_URL` — where password-reset links return to
  (`http://localhost:3000/`). The page reads the token off the query string and
  fills the Reset password card in.

## Architecture notes

- **`src/lr.ts`** holds the singleton tenant `LoginRadius` client
  (apiKey + apiSecret) and a `userClient(accessToken)` helper that builds
  per-request bearer-token clients. Tenant client is for operations that act
  on behalf of the application; user clients are for endpoints that operate
  on the signed-in user.
- **`src/middleware/session.ts`** wraps the `httpOnly` cookie used for the
  session. `secure: true` is enabled automatically in `NODE_ENV=production`.
- **`src/middleware/requireAuth.ts`** gates protected routes by reading the
  cookie and attaching `req.accessToken`.
- **`src/server.ts`** has a single error-handling middleware that converts
  `LoginRadiusError` into a JSON response with the right HTTP status. The
  `isAuth() / isForbidden() / isRateLimit() / isServer()` predicates surface
  on the response payload for the client to branch on.

## What this demo deliberately doesn't do

- No social login / MFA / passkey flows (Phase-2 follow-up).
- No persistent app database — state is `LoginRadius` + an `httpOnly`
  cookie.
- No production-grade UI — vanilla HTML + minimal CSS by design.
