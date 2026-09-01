"use server";

import type { EnterpriseLeadState } from "@/lib/enterprise-lead";

const REQUIRED_FIELDS = ["company", "contactName", "email", "teamSize", "objective"] as const;

export async function submitEnterpriseLead(
  _prevState: EnterpriseLeadState,
  formData: FormData
): Promise<EnterpriseLeadState> {
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
  console.log("[enterprise-lead]", {
    company: values.company,
    contactName: values.contactName,
    email: values.email,
    teamSize: values.teamSize,
    objective: values.objective,
    budget: values.budget,
    timeline: values.timeline,
    receivedAt: new Date().toISOString(),
  });

  return { status: "success", errors: {} };
}
