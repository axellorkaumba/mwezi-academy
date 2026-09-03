"use server";

import { checkBotId } from "botid/server";
import type { EnrollmentState } from "@/lib/enrollment";
import { getDb } from "@/db";
import { enrollments } from "@/db/schema";
import { courses } from "@/lib/courses";

const REQUIRED_FIELDS = ["fullName", "email", "phone", "country"] as const;

export async function submitEnrollment(
  _prevState: EnrollmentState,
  formData: FormData
): Promise<EnrollmentState> {
  const verification = await checkBotId();
  if (verification.isBot) {
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

  const course = courses.find((c) => c.slug === values.courseSlug);
  if (!course) errors.courseSlug = "required";

  if (Object.keys(errors).length > 0) {
    return { status: "error", errors };
  }

  await getDb().insert(enrollments).values({
    courseSlug: course!.slug,
    courseTitle: course!.title.fr,
    priceUSD: course!.priceUSD,
    fullName: values.fullName,
    email: values.email,
    phone: values.phone,
    country: values.country,
  });

  return { status: "success", errors: {} };
}
