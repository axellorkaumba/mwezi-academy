"use client";

import { useActionState } from "react";
import { submitEnrollment } from "@/app/[lang]/formation/[slug]/actions";
import { initialEnrollmentState } from "@/lib/enrollment";
import { Field } from "@/components/form-fields";
import type { Dictionary } from "@/app/[lang]/dictionaries";

export function EnrollmentForm({
  dict,
  courseSlug,
  price,
}: {
  dict: Dictionary;
  courseSlug: string;
  price: number;
}) {
  const [state, formAction, pending] = useActionState(submitEnrollment, initialEnrollmentState);
  const f = dict.enroll;

  const errorText = (code?: string) =>
    code === "invalid" ? f.errorInvalidEmail : code === "required" ? f.errorRequired : undefined;

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-teal/30 bg-teal/5 p-8 text-center">
        <p className="font-display text-xl font-semibold">{f.successTitle}</p>
        <p className="mt-2 text-sm text-ink-muted">
          {f.successBody.replace("${amount}", `$${price}`)}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-5" noValidate>
      <input type="hidden" name="courseSlug" value={courseSlug} />

      <Field label={f.fullName} name="fullName" error={errorText(state.errors.fullName)} required />
      <Field label={f.email} name="email" type="email" error={errorText(state.errors.email)} required />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label={f.phone} name="phone" type="tel" error={errorText(state.errors.phone)} required />
        <Field label={f.country} name="country" error={errorText(state.errors.country)} required />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="mt-2 inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-ember hover:text-accent-ink disabled:opacity-60"
      >
        {pending ? f.submitting : `${f.submit} — $${price}`}
      </button>
    </form>
  );
}
