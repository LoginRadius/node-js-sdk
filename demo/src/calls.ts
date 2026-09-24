// The SDK call behind every generated route.
//
// routes.generated.ts has already decoded the body, filled path and query
// values, checked required fields, looked up configuration and resolved the
// credential. What is left is the part a customer actually copies, which is why
// it lives here in hand-written form rather than being generated out of sight.

import type { DemoAuthContext, DemoCalls } from './routes.generated.js';
import { replaceSession } from './session.js';
import { tenantClient, userClient } from './lr.js';

/** Where LoginRadius sends the user from a verification email. */
const VERIFICATION_URL =
  process.env.LR_VERIFICATION_URL ?? 'http://localhost:3000/api/auth/verify';

/** Where LoginRadius sends the user from a reset email. */
const RESET_PASSWORD_URL =
  process.env.LR_RESET_PASSWORD_URL ?? 'http://localhost:3000/';

/** Optional string fields are omitted rather than sent as ''. */
const opt = (v: string): string | undefined => (v === '' ? undefined : v);

/**
 * LoginRadius has two authenticator generations and they do not share a field
 * name: a tenant on Google Authenticator requires `googleauthenticatorcode`,
 * while the newer generic authenticator uses `authenticatorcode`. Sending only
 * the latter returns ErrorCode 908, "The googleauthenticatorcode is a required
 * parameter."
 *
 * Only ONE field is populated, deliberately. The sibling reauth schema declares
 * its equivalent code fields under `oneOf` with each `required`, so the API
 * treats them as mutually exclusive there — sending both risks a validation
 * rejection rather than a helpful fallback. A tenant on the newer generic
 * authenticator needs `authenticatorcode` here instead.
 */
const totpBody = (code: string) => ({ googleauthenticatorcode: code });

export const calls: DemoCalls = {
  // ---- passwordless --------------------------------------------------------

  async passwordlessLoginByEmail(input) {
    const { data } = await tenantClient.login.passwordlessLoginByEmail({ email: input.email });
    return data;
  },

  async passwordlessLoginByPhone(input) {
    const { data } = await tenantClient.login.passwordlessLoginByPhone({ phone: input.phone });
    return data;
  },

  // ---- password ----------------------------------------------------------

  async forgotPassword(input) {
    const { data } = await tenantClient.password.forgotPassword({
      forgotPasswordRequest: { Email: input.email },
      resetpasswordurl: RESET_PASSWORD_URL,
    });
    return data;
  },

  async resetPassword(input) {
    const { data } = await tenantClient.password.resetPasswordByResetToken({
      resetPassword: { ResetToken: input.resetToken, Password: input.password },
    });
    return data;
  },

  async changePassword(input, auth) {
    const { data } = await tenantClient.password.changePassword({
      changePassword: { OldPassword: input.oldPassword, NewPassword: input.newPassword },
      accessToken: auth.token,
    });
    return data;
  },

  async requestResetOtp(input) {
    const { data } = await tenantClient.password.requestOTPForPasswordReset({
      forgotPasswordPhoneModel: { Phone: input.phone },
    });
    return data;
  },

  async resetPasswordWithOtp(input) {
    const { data } = await tenantClient.password.resetPasswordWithOTP({
      resetPasswordWithOTP: {
        otp: input.otp,
        phone: input.phone,
        Password: input.password,
      },
    });
    return data;
  },

  // ---- profile -----------------------------------------------------------

  async getProfile(_input, auth) {
    const { data } = await tenantClient.user.getAccountDetails({ accessToken: auth.token });
    return data;
  },

  async updateProfile(input, auth) {
    const { data } = await tenantClient.user.updateAccountByAccessToken({
      updateAccountByAccessTokenRequest: {
        FirstName: opt(input.firstName),
        LastName: opt(input.lastName),
        About: opt(input.about),
      },
      accessToken: auth.token,
    });
    return data;
  },

  // ---- identifiers -------------------------------------------------------

  async addEmail(input, auth) {
    const { data } = await tenantClient.user.addEmail({
      addEmailModel: { email: input.email, type: opt(input.type) },
      accessToken: auth.token,
      verificationurl: VERIFICATION_URL,
    });
    return data;
  },

  async deleteEmail(input, auth) {
    // This operation carries the access token in its body model rather than as
    // a parameter, so it needs a user-context client.
    const { data } = await userClient(auth.token).user.deleteemailbyaccesstoken({
      deleteemailbyaccesstokenRequest: { email: input.email },
    });
    return data;
  },

  async updatePhone(input, auth) {
    const { data } = await tenantClient.user.changePhoneNumber({
      phoneIdModel: { phone: input.phone },
      accessToken: auth.token,
    });
    return data;
  },

  // ---- custom objects ----------------------------------------------------
  // The schema name comes from LR_CUSTOM_OBJECT_NAME (a manifest `configQuery`
  // field), not the client — routes.generated.ts has already resolved it onto
  // `input.objectname`, reporting a clear error itself if the var is unset.

  async createCustomObject(input, auth) {
    const { data } = await tenantClient.customObject.createCustomObjectByToken({
      requestBody: input.data,
      objectname: input.objectname,
      accessToken: auth.token,
    });
    return data;
  },

  async listCustomObjects(input, auth) {
    const { data } = await tenantClient.customObject.getCustomObjectByToken({
      objectname: input.objectname,
      accessToken: auth.token,
    });
    return data;
  },

  async updateCustomObject(input, auth) {
    const { data } = await tenantClient.customObject.updateCustomObjectByTokenAndRecordId({
      objectrecordid: input.objectRecordId,
      // Not exposed as a manifest field — the demo always replaces the whole
      // record rather than exposing partial-update semantics in its UI.
      updateType: 'default' as any,
      requestBody: input.data,
      objectname: input.objectname,
      accessToken: auth.token,
    });
    return data;
  },

  async deleteCustomObject(input, auth) {
    const { data } = await tenantClient.customObject.deleteCustomObjectByTokenAndRecordId({
      objectrecordid: input.objectRecordId,
      objectname: input.objectname,
      accessToken: auth.token,
    });
    return data;
  },

  // ---- access-token lifecycle --------------------------------------------

  /**
   * Exchanges the session's refresh token for a new access token and rotates
   * what the demo session holds.
   *
   * Refreshing INVALIDATES the previous access token upstream, so a session
   * left holding the old one is not merely stale — every subsequent
   * authenticated call fails. Uses the /manage/ operation deliberately: the
   * native variant takes the access token as a QUERY parameter, which would put
   * a bearer credential into access logs, proxy logs and Referer headers.
   */
  async refreshToken(_input, auth) {
    if (!auth.refreshToken) {
      throw new Error('this session has no refresh token; the tenant did not return one at login');
    }
    const { data } = await tenantClient.accountSession.refreshAccessToken({
      refreshToken: auth.refreshToken,
    });
    const next = data as { access_token?: string; refresh_token?: string; expires_in?: string };
    if (!next.access_token) {
      throw new Error('refresh succeeded but returned no access_token');
    }
    replaceSession(auth.sessionId, next.access_token, next.refresh_token ?? '');
    return {
      refreshed: true,
      rotated: Boolean(next.refresh_token),
      expires_in: next.expires_in,
    };
  },

  async validateToken(_input, auth) {
    const { data } = await tenantClient.session.authValidateAccessToken({
      accessToken: auth.token,
    });
    return { valid: true, ...(data as Record<string, unknown>) };
  },

  async activeSession(_input, auth) {
    const { data } = await tenantClient.accountSession.getActiveSession({ token: auth.token });
    return data;
  },

  // ---- passkey (challenge half) ------------------------------------------

  async beginPasskeyRegistration(input) {
    const { data } = await tenantClient.registration.beginPasskeyRegistration({
      identifier: input.identifier,
    });
    return data;
  },

  async beginPasskeyLogin(input) {
    const { data } = await tenantClient.login.beginPasskeyLogin({
      identifier: input.identifier,
      verificationurl: VERIFICATION_URL,
    });
    return data;
  },

  // ---- MFA ---------------------------------------------------------------

  async mfaSettings(input, auth) {
    const { data } = await tenantClient.security.getMFASettings({
      accessToken: auth.token,
      // Only sent when supplied. Duo returns the user here after its challenge;
      // passing an empty string would put `duoredirecturi=` on the wire for
      // every tenant, including those with no Duo configured.
      ...(input.duoRedirectUri ? { duoredirecturi: input.duoRedirectUri } : {}),
    });
    return data;
  },

  async mfaEnrolTotp(input, auth) {
    const { data } = await tenantClient.security.verify2faTOTPAuth({
      authenticatorCodeRequest: totpBody(input.totp),
      accessToken: auth.token,
    });
    return data;
  },

  async mfaBackupCodes(_input, auth) {
    const { data } = await tenantClient.security.mfaGenerateBackupCodes({
      accessToken: auth.token,
    });
    return data;
  },

  async mfaSendEmailOtp(input, auth) {
    const { data } = await tenantClient.security.resendEmailOTPMFAToken({
      secondfactorauthenticationtoken: auth.token,
      emailModel: { email: input.email },
    });
    return data;
  },
};

export { totpBody };
export type { DemoAuthContext };
