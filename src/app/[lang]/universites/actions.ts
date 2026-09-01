"use server";

import { checkBotId } from "botid/server";
import type { UniversityLeadState } from "@/lib/university-lead";

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

  // TODO(production): this only logs the lead — wire a real email/CRM
  // integration (e.g. Resend, or a CRM connector) via the Vercel Marketplace
  // before launch, so a submission actually reaches the founders.
  console.log("[university-lead]", {
    university: values.university,
    faculty: values.faculty,
    contactName: values.contactName,
    email: values.email,
    studentCount: values.studentCount,
    period: values.period,
    objective: values.objective,
    receivedAt: new Date().toISOString(),
  });

  return { status: "success", errors: {} };
}
