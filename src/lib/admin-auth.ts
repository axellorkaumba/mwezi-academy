const COOKIE_NAME = "mwezi_admin_session";
const SESSION_TTL_MS = 1000 * 60 * 60 * 12; // 12h

function getSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) throw new Error("ADMIN_SESSION_SECRET is not set");
  return secret;
}

async function hmac(data: string, secret: string) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(data));
  return Buffer.from(sig).toString("base64url");
}

export async function createSessionToken() {
  const secret = getSecret();
  const expires = Date.now() + SESSION_TTL_MS;
  const payload = `${expires}`;
  const sig = await hmac(payload, secret);
  return `${payload}.${sig}`;
}

export async function verifySessionToken(token: string | undefined) {
  if (!token) return false;
  const secret = getSecret();
  const [payload, sig] = token.split(".");
  if (!payload || !sig) return false;
  const expected = await hmac(payload, secret);
  if (expected !== sig) return false;
  const expires = Number(payload);
  if (!Number.isFinite(expires) || Date.now() > expires) return false;
  return true;
}

export { COOKIE_NAME };
