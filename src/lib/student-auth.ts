const COOKIE_NAME = "mwezi_student_session";
const SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 30; // 30 days — re-verifying by SMS too often is costly and annoying

function getSecret() {
  const secret = process.env.STUDENT_SESSION_SECRET;
  if (!secret) throw new Error("STUDENT_SESSION_SECRET is not set");
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

export async function createStudentSessionToken(studentId: string) {
  const secret = getSecret();
  const expires = Date.now() + SESSION_TTL_MS;
  const payload = `${studentId}.${expires}`;
  const sig = await hmac(payload, secret);
  return `${payload}.${sig}`;
}

// Returns the student id if the token is valid and unexpired, otherwise null.
export async function verifyStudentSessionToken(
  token: string | undefined
): Promise<string | null> {
  if (!token) return null;
  const secret = getSecret();
  const parts = token.split(".");
  if (parts.length !== 3) return null;
  const [studentId, expiresStr, sig] = parts;
  const payload = `${studentId}.${expiresStr}`;
  const expected = await hmac(payload, secret);
  if (expected !== sig) return null;
  const expires = Number(expiresStr);
  if (!Number.isFinite(expires) || Date.now() > expires) return null;
  return studentId;
}

export { COOKIE_NAME };
