import 'dotenv/config';
import path from 'node:path';
import cookieParser from 'cookie-parser';
import express, { type ErrorRequestHandler, type RequestHandler } from 'express';
import { LoginRadiusError } from './lr.js';
import { buildHandlers, demoRoutes } from './routes.generated.js';
import { calls } from './calls.js';
import { customHandlers } from './handlers.js';
import { requireMfaToken, requireSession } from './middleware/auth.js';

const PORT = Number(process.env.PORT ?? 3000);

const app = express();
app.use(express.json());
app.use(cookieParser());

const handlers = buildHandlers(calls, customHandlers);

// The API surface comes from routes.generated.ts, generated from
// the shared SDK manifest. Registering from the table (rather than by hand) is what
// keeps every language's demo on the same endpoints: the HTTP method and the
// route's auth mode are applied uniformly here instead of being re-implemented,
// slightly differently, in each handler.
for (const route of demoRoutes) {
  const chain: RequestHandler[] = [];
  if (route.requiresSession) chain.push(requireSession);
  if (route.requiresMfaToken) chain.push(requireMfaToken);
  chain.push(handlers[route.handler]);

  switch (route.method) {
    case 'GET':
      app.get(route.path, ...chain);
      break;
    case 'POST':
      app.post(route.path, ...chain);
      break;
    case 'PUT':
      app.put(route.path, ...chain);
      break;
    case 'DELETE':
      app.delete(route.path, ...chain);
      break;
  }
}

// process.cwd(), not __dirname: this file is compiled to both CommonJS and
// ESM from one source, and __dirname does not exist in ESM. Both demos are
// started from their own directory, so the UI is always ./public.
app.use(express.static(path.join(process.cwd(), 'public')));

// Single error-handling middleware turns LoginRadiusError into a JSON
// response with the right HTTP status. Unrelated errors get a 500.
const handleError: ErrorRequestHandler = (err, _req, res, _next) => {
  if (err instanceof LoginRadiusError) {
    const status = err.statusCode || 500;
    res.status(status).json({
      error: err.code || 'loginradius_error',
      message: err.description || err.message,
      auth: err.isAuth(),
      forbidden: err.isForbidden(),
      rateLimited: err.isRateLimit(),
      server: err.isServer(),
    });
    return;
  }
  // A demo-side refusal (no refresh token, empty rotation) arrives as a plain
  // Error; surface its message rather than swallowing it into a bare 500.
  if (err instanceof Error) {
    console.error('Unhandled error:', err);
    res.status(502).json({ error: err.message });
    return;
  }
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'internal_error' });
};
app.use(handleError);

/**
 * Which half of the dual build this process actually loaded.
 *
 * Detected, not hardcoded: this file is compiled to BOTH CommonJS and ESM from
 * one source, so a literal "CJS" here would be wrong in demo-esm/ — and being
 * wrong about which module system resolved is precisely what these two demos
 * exist to demonstrate. `module` is defined only in the CommonJS output, and
 * `typeof` keeps the check safe where it is not.
 */
const moduleSystem = typeof module !== 'undefined' ? 'CJS (require)' : 'ESM (import)';

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`loginradius-sdk demo (Express, ${moduleSystem}) running at http://localhost:${PORT}`);
});
