import { generateSOTT, generateSOTTWithWindow, SOTT_DEFAULT_WINDOW_MS } from '../src/sott';

/**
 * CROSS-LANGUAGE PARITY.
 *
 * The golden value below was produced by the Go SDK's
 * `GenerateSOTTWithWindow` for the same inputs. Every LoginRadius SDK must
 * emit a byte-identical token, because the API validates the AES payload
 * exactly — a drifted IV, iteration count, salt, or timestamp format yields a
 * token that is silently rejected.
 *
 * If this test fails, the two SDKs have diverged. Fix the implementation, not
 * the expectation. The shared parameters live in sdk-factory's
 * manifest/sdk.yaml under `sott:`.
 *
 * The mirror of this test is TestSOTTGoldenValue in the Go SDK.
 */
const GOLDEN = 'yvLBFPR3aRNl1YlisgPpEdphb73sUfne2Jem7hTKWU6RLlkcfjYOhe5B7kSHorQS*1059092e1510bfbc5388d7438b943106';
const API_KEY = 'test-api-key';
const API_SECRET = 'test-api-secret';
const START = new Date(Date.UTC(2026, 0, 2, 3, 4, 5));
const END = new Date(Date.UTC(2026, 0, 2, 3, 14, 5));

describe('generateSOTTWithWindow', () => {
  it('matches the Go SDK byte for byte', () => {
    expect(generateSOTTWithWindow(API_KEY, API_SECRET, START, END)).toBe(GOLDEN);
  });

  it('is deterministic for a fixed window', () => {
    const a = generateSOTTWithWindow(API_KEY, API_SECRET, START, END);
    const b = generateSOTTWithWindow(API_KEY, API_SECRET, START, END);
    expect(a).toBe(b);
  });

  it('changes when the window changes', () => {
    const other = new Date(Date.UTC(2026, 0, 2, 3, 15, 5));
    expect(generateSOTTWithWindow(API_KEY, API_SECRET, START, other)).not.toBe(GOLDEN);
  });

  it('emits base64*md5hex', () => {
    const [payload, checksum] = generateSOTTWithWindow(API_KEY, API_SECRET, START, END).split('*');
    expect(payload).toMatch(/^[A-Za-z0-9+/]+=*$/);
    expect(checksum).toMatch(/^[0-9a-f]{32}$/);
  });

  it.each([
    ['apiKey', '', API_SECRET],
    ['apiSecret', API_KEY, ''],
  ])('rejects a missing %s', (_label, key, secret) => {
    expect(() => generateSOTTWithWindow(key, secret, START, END)).toThrow(/requires/);
  });
});

describe('generateSOTT', () => {
  it('defaults to a 10 minute window', () => {
    expect(SOTT_DEFAULT_WINDOW_MS).toBe(10 * 60 * 1000);
  });

  it('produces a usable token from the current clock', () => {
    const tok = generateSOTT(API_KEY, API_SECRET);
    expect(tok.split('*')).toHaveLength(2);
    // Same shape as the golden value, different (current) timestamps.
    expect(tok).not.toBe(GOLDEN);
  });
});
