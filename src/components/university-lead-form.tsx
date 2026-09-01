"use client";

import { useActionState } from "react";
import { submitUniversityLead } from "@/app/[lang]/universites/actions";
import { initialUniversityLeadState } from "@/lib/university-lead";
import { Field, SelectField } from "@/components/form-fields";
import type { Dictionary } from "@/app/[lang]/dictionaries";

export function UniversityLeadForm({ dict }: { dict: Dictionary }) {
  const [state, formAction, pending] = useActionState(
    submitUniversityLead,
    initialUniversityLeadState
  );
  const f = dict.university.form;

  const errorText = (code?: string) =>
    code === "invalid" ? f.errorInvalidEmail : code === "required" ? f.errorRequired : undefined;

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-teal/30 bg-teal/5 p-8 text-center">
        <p className="font-display text-xl font-semibold">{f.successTitle}</p>
        <p className="mt-2 text-sm text-ink-muted">{f.successBody}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label={f.university} name="university" error={errorText(state.errors.university)} required />
        <Field label={f.faculty} name="faculty" />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label={f.contactName} name="contactName" error={errorText(state.errors.contactName)} required />
        <Field label={f.email} name="email" type="email" error={errorText(state.errors.email)} required />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <SelectField
          label={f.studentCount}
          name="studentCount"
          options={f.studentCountOptions}
          error={errorText(state.errors.studentCount)}
          required
        />
        <SelectField label={f.period} name="period" options={f.periodOptions} />
      </div>

      <Field
        label={f.objective}
        name="objective"
        placeholder={f.objectivePlaceholder}
        error={errorText(state.errors.objective)}
        required
        textarea
      />

      <button
        type="submit"
        disabled={pending}
        className="mt-2 inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-ember hover:text-accent-ink disabled:opacity-60"
      >
        {pending ? f.submitting : f.submit}
      </button>
    </form>
  );
}
