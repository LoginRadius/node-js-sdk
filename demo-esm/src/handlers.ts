// The routes the manifest marks as needing bespoke logic: minting a SOTT,
// setting or clearing a session, redirecting, or enforcing a demo-side rule.
// Everything else gets its wrapper generated and its SDK call lives in calls.ts.

import type { Request, RequestHandler, Response } from 'express';
import type { DemoCustomHandlers } from './routes.generated.js';
import { generateSOTT, tenantClient, userClient } from './lr.js';
import { totpBody } from './calls.js';
import {
  clearMfaCookie,
  clearSessionCookie,
  createSession,
  deleteSession,
  getSessionCookie,
  setMfaCookie,
  setSessionCookie,
} from './session.js';

const VERIFICATION_URL =
  process.env.LR_VERIFICATION_URL ?? 'http://localhost:3000/api/auth/verify';

const opt = (v: unknown): string | undefined => {
  const s = typeof v === 'string' ? v.trim() : '';
  return s === '' ? undefined : s;
};

const str = (v: unknown): string => (typeof v === 'string' ? v.trim() : '');

function missing(res: Response, field: string): void {
  res.status(400).json({ error: 'missing required field', field });
}

/** Wraps an async handler so a rejection reaches the error middleware. */
const handler =
  (fn: (req: Request, res: Response) => Promise<void>): RequestHandler =>
  (req, res, next) => {
    fn(req, res).catch(next);
  };

/** Mints a session from whatever an auth response returned. */
function signIn(res: Response, data: unknown): boolean {
  const d = data as { access_token?: string; refresh_token?: string };
  if (!d?.access_token) return false;
  setSessionCookie(res, createSession(d.access_token, d.refresh_token ?? ''));
  return true;
}

export const customHandlers: DemoCustomHandlers = {
  /**
   * Registration. Mints the SOTT server-side per request — a SOTT is valid for
   * ten minutes, so it must never come from configuration, and never from the
   * client.
   */
  register: handler(async (req, res) => {
    const email = str(req.body?.email);
    const password = str(req.body?.password);
    if (!email) return missing(res, 'email');
    if (!password) return missing(res, 'password');

    const { LR_API_KEY, LR_API_SECRET } = process.env;
    if (!LR_API_KEY || !LR_API_SECRET) {
      res.status(500).json({ error: 'LR_API_KEY_and_LR_API_SECRET_required' });
      return;
    }

    const { data } = await tenantClient.registration.userRegistrationBySottEmailPhoneUserName({
      profileRequestModel: {
        Email: [{ Type: 'Primary', Value: email }],
        Password: password,
        FirstName: opt(req.body?.firstName),
        LastName: opt(req.body?.lastName),
      },
      sott: generateSOTT(LR_API_KEY, LR_API_SECRET),
      verificationurl: VERIFICATION_URL,
    });

    // Tenants configured to require email verification return a profile with no
    // access token, so a session is minted only when one actually came back —
    // and the response says which happened, because "registered but not signed
    // in" is otherwise a confusing state to land in.
    const nested = (data as { Data?: unknown })?.Data;
    res.json({ signed_in: signIn(res, nested ?? data), profile: data });
  }),

  /**
   * Email + password login. When the tenant requires a second factor the
   * challenge token goes into its own short-lived cookie and the caller is told
   * which factors are available — see the /api/mfa/login/* routes.
   */
  login: handler(async (req, res) => {
    const email = str(req.body?.email);
    const password = str(req.body?.password);
    if (!email) return missing(res, 'email');
    if (!password) return missing(res, 'password');

    const { data } = await tenantClient.login.emailByLoginUserNamePhone({
      emailByLoginUserNamePhoneRequest: { Email: email, Password: password },
    });

    const d = data as {
      access_token?: string;
      refresh_token?: string;
      SecondFactorAuthenticationToken?: string;
      IsGoogleAuthenticatorVerified?: boolean;
      IsAuthenticatorVerified?: boolean;
      ManualEntryCode?: string;
      QRCode?: string;
    };

    if (!d.access_token && d.SecondFactorAuthenticationToken) {
      setMfaCookie(res, d.SecondFactorAuthenticationToken);
      res.json({
        mfa_required: true,
        totp_enrolled: Boolean(d.IsGoogleAuthenticatorVerified || d.IsAuthenticatorVerified),
        manual_entry_code: d.ManualEntryCode,
        qr_code: d.QRCode,
        response: d,
      });
      return;
    }

    if (!signIn(res, d)) {
      res.status(502).json({ error: 'login succeeded but no access_token returned' });
      return;
    }
    res.json({ ok: true });
  }),

  /**
   * Completes an email passwordless login. Same response shape as `login`,
   * including the MFA-challenge branch — a tenant with MFA enabled still
   * enforces its second factor after the emailed code.
   */
  passwordlessLoginByEmailOtp: handler(async (req, res) => {
    const email = str(req.body?.email);
    const otp = str(req.body?.otp);
    if (!email) return missing(res, 'email');
    if (!otp) return missing(res, 'otp');

    const { data } = await tenantClient.login.passwordlessLoginByEmailAndOTP({
      passwordLessEmailOTPModel: { Email: email, Otp: otp },
    });

    const d = data as {
      access_token?: string;
      refresh_token?: string;
      SecondFactorAuthenticationToken?: string;
      IsGoogleAuthenticatorVerified?: boolean;
      IsAuthenticatorVerified?: boolean;
      ManualEntryCode?: string;
      QRCode?: string;
    };

    if (!d.access_token && d.SecondFactorAuthenticationToken) {
      setMfaCookie(res, d.SecondFactorAuthenticationToken);
      res.json({
        mfa_required: true,
        totp_enrolled: Boolean(d.IsGoogleAuthenticatorVerified || d.IsAuthenticatorVerified),
        manual_entry_code: d.ManualEntryCode,
        qr_code: d.QRCode,
        response: d,
      });
      return;
    }

    if (!signIn(res, d)) {
      res.status(502).json({ error: 'login succeeded but no access_token returned' });
      return;
    }
    res.json({ ok: true });
  }),

  /**
   * Completes a phone passwordless login. Same response shape as `login`,
   * including the MFA-challenge branch.
   */
  passwordlessLoginByPhoneOtp: handler(async (req, res) => {
    const phone = str(req.body?.phone);
    const otp = str(req.body?.otp);
    if (!phone) return missing(res, 'phone');
    if (!otp) return missing(res, 'otp');

    const { data } = await tenantClient.login.passwordlessLoginPhoneVerification({
      // PhoneOTPModel's field is OTP (all caps) — PasswordLessEmailOTPModel's
      // above is Otp. Not a typo: the spec itself is inconsistent here.
      phoneOTPModel: { Phone: phone, OTP: otp },
    });

    const d = data as {
      access_token?: string;
      refresh_token?: string;
      SecondFactorAuthenticationToken?: string;
      IsGoogleAuthenticatorVerified?: boolean;
      IsAuthenticatorVerified?: boolean;
      ManualEntryCode?: string;
      QRCode?: string;
    };

    if (!d.access_token && d.SecondFactorAuthenticationToken) {
      setMfaCookie(res, d.SecondFactorAuthenticationToken);
      res.json({
        mfa_required: true,
        totp_enrolled: Boolean(d.IsGoogleAuthenticatorVerified || d.IsAuthenticatorVerified),
        manual_entry_code: d.ManualEntryCode,
        qr_code: d.QRCode,
        response: d,
      });
      return;
    }

    if (!signIn(res, d)) {
      res.status(502).json({ error: 'login succeeded but no access_token returned' });
      return;
    }
    res.json({ ok: true });
  }),

  /**
   * Invalidates the token upstream, then clears the demo session. The local
   * session is cleared even if the upstream call fails — otherwise a transient
   * API error would leave the user unable to sign out.
   */
  logout: handler(async (req, res) => {
    let warning: string | undefined;
    try {
      await userClient(req.demoToken ?? '').session.invalidateAccessToken({});
    } catch {
      warning = 'signed out locally, but the token could not be invalidated upstream';
    }
    deleteSession(getSessionCookie(req));
    clearSessionCookie(res);
    // Any half-finished MFA challenge goes too — leaving it behind would keep a
    // credential alive that outlives the session it belonged to.
    clearMfaCookie(res);
    res.json({ ok: true, ...(warning ? { warning } : {}) });
  }),

  /**
   * Landing point for the link in the verification email. Redirects back to the
   * UI with a status banner rather than returning JSON.
   *
   * Wraps checkEmailAvailability — the spec overloads that operation: with a
   * verificationtoken it verifies an account, without one it reports
   * availability. The demo only uses the verification form.
   */
  verifyEmail: handler(async (req, res) => {
    const token =
      str(req.query.vtoken) || str(req.query.verificationToken) || str(req.query.verificationtoken);
    if (!token) {
      res.redirect('/?verify=missing');
      return;
    }
    try {
      await tenantClient.user.checkEmailAvailability({ verificationtoken: token });
      res.redirect('/?verify=success');
    } catch (err) {
      const message = err instanceof Error ? err.message : 'verification failed';
      res.redirect(`/?verify=error&message=${encodeURIComponent(message)}`);
    }
  }),

  /**
   * Deletes the signed-in user's own account.
   *
   * The underlying operation is ADMIN-scoped: it authenticates with the API
   * secret and will delete any account in the tenant by email address.
   * Exposing that straight through would let anyone with a demo session delete
   * anyone else, so this handler reads the signed-in profile first and refuses
   * unless the address matches one the session actually owns. That guard is
   * demo policy, not an SDK limitation.
   */
  deleteAccount: handler(async (req, res) => {
    const email = str(req.body?.email);
    if (!email) return missing(res, 'email');

    const { data: profile } = await tenantClient.user.getAccountDetails({
      accessToken: req.demoToken ?? '',
    });
    const owned = ((profile as { Email?: { Value?: string }[] })?.Email ?? [])
      .map((e) => (e.Value ?? '').trim().toLowerCase())
      .filter(Boolean);
    if (!owned.includes(email.toLowerCase())) {
      res.status(403).json({
        error: 'refusing to delete an account you are not signed in as',
        hint: 'the demo only deletes the signed-in account; the underlying API would delete any address',
      });
      return;
    }

    const { data } = await tenantClient.accounts.deleteAccountByEmail({ email });
    deleteSession(getSessionCookie(req));
    clearSessionCookie(res);
    clearMfaCookie(res);
    res.json({ deleted: data });
  }),

  /** Completes WebAuthn enrolment with the browser's attestation response. */
  finishPasskeyRegistration: handler(async (req, res) => {
    const credential = req.body?.credential as Record<string, unknown> | undefined;
    const email = str(req.body?.email);
    if (!credential || Object.keys(credential).length === 0) return missing(res, 'credential');
    // Enrolment creates the account, so there is no existing profile to take an
    // address from and the API rejects the call without one. Note this model
    // takes the profile's array-of-{Type,Value} email shape, not the plain
    // string that the passkey LOGIN finish model uses.
    if (!email) return missing(res, 'email');

    const { data } = await tenantClient.registration.finishPasskeyRegistration({
      passkeyRegisterFinish: {
        PasskeyCredential: credential as never,
        Email: [{ Type: 'Primary', Value: email }],
      },
      verificationurl: VERIFICATION_URL,
    });
    const nested = (data as { Data?: unknown })?.Data;
    res.json({ signed_in: signIn(res, nested ?? data), profile: data });
  }),

  /** Completes WebAuthn login with the browser's assertion response. */
  finishPasskeyLogin: handler(async (req, res) => {
    const credential = req.body?.credential as Record<string, unknown> | undefined;
    if (!credential || Object.keys(credential).length === 0) return missing(res, 'credential');

    const { data } = await tenantClient.login.finishPasskeyLogin({
      passkeyLoginFinish: {
        PasskeyCredential: credential as never,
        email: opt(req.body?.email),
      },
    });
    if (!signIn(res, data)) {
      res.status(502).json({ error: 'authentication succeeded but no access_token returned' });
      return;
    }
    res.json({ ok: true, profile: (data as { Profile?: unknown }).Profile });
  }),

  /** Completes an in-progress MFA login challenge with an email OTP. */
  mfaVerifyEmailOtp: handler(async (req, res) => {
    const email = str(req.body?.email);
    const otp = str(req.body?.otp);
    if (!email) return missing(res, 'email');
    if (!otp) return missing(res, 'otp');

    const { data } = await tenantClient.security.validateMfaOTPByEmail({
      secondfactorauthenticationtoken: req.demoToken ?? '',
      reAuthModelByEmailOtp: { emailid: email, otp },
    });
    clearMfaCookie(res);
    if (!signIn(res, data)) {
      res.status(502).json({ error: 'authentication succeeded but no access_token returned' });
      return;
    }
    res.json({ ok: true, profile: (data as { Profile?: unknown }).Profile });
  }),

  /** Completes an in-progress MFA login challenge with a TOTP code. */
  mfaVerifyTotp: handler(async (req, res) => {
    const totp = str(req.body?.totp);
    if (!totp) return missing(res, 'totp');

    const { data } = await tenantClient.security.verifyTotpByMfaToken({
      secondfactorauthenticationtoken: req.demoToken ?? '',
      authenticatorCodeRequest: totpBody(totp),
    });
    clearMfaCookie(res);
    if (!signIn(res, data)) {
      res.status(502).json({ error: 'authentication succeeded but no access_token returned' });
      return;
    }
    res.json({ ok: true, profile: (data as { Profile?: unknown }).Profile });
  }),
};
