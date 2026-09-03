"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { getDb } from "@/db";
import { enrollments, enterpriseLeads, universityLeads } from "@/db/schema";
import { COOKIE_NAME, verifySessionToken } from "@/lib/admin-auth";

async function requireAdmin() {
  const token = (await cookies()).get(COOKIE_NAME)?.value;
  const valid = await verifySessionToken(token);
  if (!valid) throw new Error("Not authenticated");
}

export async function markEnrollmentPaid(lang: string, id: string) {
  await requireAdmin();
  await getDb()
    .update(enrollments)
    .set({ status: "paid", validatedAt: new Date() })
    .where(eq(enrollments.id, id));
  revalidatePath(`/${lang}/admin`);
}

export async function cancelEnrollment(lang: string, id: string) {
  await requireAdmin();
  await getDb().update(enrollments).set({ status: "cancelled" }).where(eq(enrollments.id, id));
  revalidatePath(`/${lang}/admin`);
}

export async function markLeadContacted(
  lang: string,
  kind: "enterprise" | "university",
  id: string
) {
  await requireAdmin();
  const table = kind === "enterprise" ? enterpriseLeads : universityLeads;
  await getDb().update(table).set({ status: "contacted" }).where(eq(table.id, id));
  revalidatePath(`/${lang}/admin`);
}

export async function logout(lang: string) {
  (await cookies()).delete(COOKIE_NAME);
  redirect(`/${lang}/admin/login`);
}
