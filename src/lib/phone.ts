// Light normalization so "+243 900 000 000", "243900000000" and
// "00243900000000" resolve to the same student record. Not full E.164
// validation — just enough to avoid obvious duplicate accounts.
export function normalizePhone(raw: string): string {
  let digits = raw.replace(/[^\d+]/g, "");
  if (digits.startsWith("00")) digits = `+${digits.slice(2)}`;
  if (!digits.startsWith("+")) digits = `+${digits}`;
  return digits;
}
