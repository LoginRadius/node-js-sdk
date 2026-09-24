import { randomBytes } from 'node:crypto';
import type { CookieOptions, Request, Response } from 'express';
import { MFA_COOKIE, SESSION_COOKIE } from './routes.generated.js';

/**
 * Maps an opaque session id (the value of the session cookie) to the tokens
 * LoginRadius returned. In-memory and unsigned — adequate for a single-process
 * demo, NOT for production.
 *
 * The cookie deliberately carries an opaque id rather than the access token
 * itself. Refreshing rotates the access token, and a cookie holding the old one
 * would keep sending an invalidated credential; an id lets the rotation happen
 * server-side without touching the browser.
 */
interface SessionEntry {
  accessToken: string;
  /** What POST /api/token/refresh exchanges. Empty if the tenant returned none. */
  refreshToken: string;
  createdAt: Date;
}

const sessions = new Map<string, SessionEntry>();

export function createSession(accessToken: string, refreshToken = ''): string {
  const id = randomBytes(16).toString('hex');
  sessions.set(id, { accessToken, refreshToken, createdAt: new Date() });
  return id;
}

export function lookupSession(id: string | undefined): string {
  return id ? (sessions.get(id)?.accessToken ?? '') : '';
}

export function lookupRefresh(id: string | undefined): string {
  return id ? (sessions.get(id)?.refreshToken ?? '') : '';
}

/**
 * Swaps the tokens held under an existing id, used after a successful refresh
 * so the rotated tokens take effect without forcing the user to sign in again.
 * An empty refreshToken leaves the stored one alone — some tenants rotate only
 * the access token.
 */
export function replaceSession(id: string, accessToken: string, refreshToken: string): void {
  const entry = sessions.get(id);
  if (!entry) return;
  entry.accessToken = accessToken;
  if (refreshToken) entry.refreshToken = refreshToken;
}

export function deleteSession(id: string | undefined): void {
  if (id) sessions.delete(id);
}

const cookieOpts: CookieOptions = {
  httpOnly: true,
  sameSite: 'lax',
  secure: process.env.NODE_ENV === 'production',
  // Demo only. A production cookie would also carry a signed value and a
  // MaxAge matching the session's real lifetime.
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

/**
 * Clearing must repeat the attributes the cookie was SET with — a browser
 * matches on name plus path — but not `maxAge`: Express deprecates passing it
 * to clearCookie, and it is meaningless when the point is immediate expiry.
 */
const { maxAge: _maxAge, ...clearOpts } = cookieOpts;

export function setSessionCookie(res: Response, id: string): void {
  res.cookie(SESSION_COOKIE, id, cookieOpts);
}

export function getSessionCookie(req: Request): string | undefined {
  return (req.cookies as Record<string, string | undefined>)[SESSION_COOKIE];
}

export function clearSessionCookie(res: Response): void {
  res.clearCookie(SESSION_COOKIE, clearOpts);
}

/**
 * The MFA cookie carries the second-factor token between a login that returned
 * a challenge and the call that completes it. It is NOT a session: nothing that
 * reads the session cookie will accept it, which is the point of keeping the
 * two apart. Cleared as soon as the challenge completes or is abandoned.
 */
export function setMfaCookie(res: Response, token: string): void {
  res.cookie(MFA_COOKIE, token, { ...cookieOpts, maxAge: 15 * 60 * 1000 });
}

export function getMfaCookie(req: Request): string | undefined {
  return (req.cookies as Record<string, string | undefined>)[MFA_COOKIE];
}

export function clearMfaCookie(res: Response): void {
  res.clearCookie(MFA_COOKIE, clearOpts);
}
