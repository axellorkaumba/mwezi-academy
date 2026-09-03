"use client";

import { useActionState } from "react";
import { login } from "@/app/[lang]/connexion/actions";
import { initialStudentLoginState } from "@/lib/student-login";
import { Field } from "@/components/form-fields";
import type { Dictionary } from "@/app/[lang]/dictionaries";

export function StudentLoginForm({ lang, dict }: { lang: string; dict: Dictionary }) {
  const [state, formAction, pending] = useActionState(login, initialStudentLoginState);
  const f = dict.login;

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <input type="hidden" name="lang" value={lang} />

      <Field label={f.email} name="email" type="email" required />
      <Field label={f.password} name="password" type="password" required />

      {state.status === "error" && (
        <p className="text-sm text-red-500">{f.errorInvalid}</p>
      )}

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
