import type { NextFunction, Request, RequestHandler, Response } from 'express';
import { getMfaCookie, getSessionCookie, lookupRefresh, lookupSession } from '../session.js';

/**
 * The demo attaches the credential a route's auth mode resolved, so handlers
 * never re-read a cookie and the two token kinds can never be confused for one
 * another. Generated wrappers read `demoToken`; only the refresh route needs
 * the other two.
 */
declare module 'express-serve-static-core' {
  interface Request {
    demoToken?: string;
    demoRefreshToken?: string;
    demoSessionId?: string;
  }
}

/** Rejects a request with no signed-in demo session. */
export const requireSession: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
  const id = getSessionCookie(req);
  const token = lookupSession(id);
  if (!token) {
    res.status(401).json({ error: 'not signed in' });
    return;
  }
  req.demoToken = token;
  req.demoRefreshToken = lookupRefresh(id);
  req.demoSessionId = id;
  next();
};

/**
 * Rejects a request with no in-progress MFA challenge.
 *
 * A different credential from a different cookie: these routes are reachable
 * only between a login that returned a challenge and the call that completes
 * it, and a session cookie will not open them.
 */
export const requireMfaToken: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
  const token = getMfaCookie(req);
  if (!token) {
    res.status(401).json({
      error: 'no MFA challenge in progress',
      hint: 'sign in first; a login that requires a second factor starts the challenge',
    });
    return;
  }
  req.demoToken = token;
  next();
};
