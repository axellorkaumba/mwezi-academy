"use server";

import { checkBotId } from "botid/server";
import type { UniversityLeadState } from "@/lib/university-lead";
import { getDb } from "@/db";
import { universityLeads } from "@/db/schema";

const REQUIRED_FIELDS = ["university", "contactName", "email", "studentCount", "objective"] as const;

export async function submitUniversityLead(
  _prevState: UniversityLeadState,
  formData: FormData
): Promise<UniversityLeadState> {
  const verification = await checkBotId();
  if (verification.isBot) {
    // Silent no-op: don't give bots a signal that they were detected.
    return { status: "error", errors: {} };
  }

  const values = Object.fromEntries(formData) as Record<string, string>;

  const errors: Record<string, string> = {};
  for (const field of REQUIRED_FIELDS) {
    if (!values[field]?.trim()) errors[field] = "required";
  }
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "invalid";
  }

  if (Object.keys(errors).length > 0) {
    return { status: "error", errors };
  }

  await getDb().insert(universityLeads).values({
    university: values.university,
    faculty: values.faculty || null,
    contactName: values.contactName,
    email: values.email,
    studentCount: values.studentCount,
    period: values.period || null,
    objective: values.objective,
  });

  // TODO(production): also notify the founders by email (e.g. Resend) so a
  // submission doesn't require checking the admin back-office to be noticed.

  return { status: "success", errors: {} };
}
