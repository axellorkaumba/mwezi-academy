"use client";

import { useActionState } from "react";
import { login } from "@/app/[lang]/admin/login/actions";
import { initialAdminLoginState } from "@/lib/admin-login";

export function AdminLoginForm({ lang }: { lang: string }) {
  const [state, formAction, pending] = useActionState(login, initialAdminLoginState);

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <input type="hidden" name="lang" value={lang} />
      <div>
        <label htmlFor="password" className="mb-1.5 block text-sm font-medium">
          Mot de passe admin
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoFocus
          className={
            "w-full rounded-xl border bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-ember " +
            (state.status === "error" ? "border-red-400" : "border-border")
          }
        />
        {state.status === "error" && (
          <p className="mt-1 text-xs text-red-500">Mot de passe incorrect.</p>
        )}
      </div>
      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-ember hover:text-accent-ink disabled:opacity-60"
      >
        {pending ? "Connexion…" : "Se connecter"}
      </button>
    </form>
  );
}
