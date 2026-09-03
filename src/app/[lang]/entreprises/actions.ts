"use server";

import { checkBotId } from "botid/server";
import type { EnterpriseLeadState } from "@/lib/enterprise-lead";
import { getDb } from "@/db";
import { enterpriseLeads } from "@/db/schema";

const REQUIRED_FIELDS = ["company", "contactName", "email", "teamSize", "objective"] as const;

export async function submitEnterpriseLead(
  _prevState: EnterpriseLeadState,
  formData: FormData
): Promise<EnterpriseLeadState> {
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

  await getDb().insert(enterpriseLeads).values({
    company: values.company,
    contactName: values.contactName,
    email: values.email,
    teamSize: values.teamSize,
    objective: values.objective,
    budget: values.budget || null,
    timeline: values.timeline || null,
  });

  // TODO(production): also notify the founders by email (e.g. Resend) so a
  // submission doesn't require checking the admin back-office to be noticed.

  return { status: "success", errors: {} };
}
