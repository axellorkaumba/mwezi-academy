"use client";

import { useTransition } from "react";
import {
  markEnrollmentPaid,
  cancelEnrollment,
  markLeadContacted,
  logout,
} from "@/app/[lang]/admin/actions";

interface Enrollment {
  id: string;
  courseTitle: string;
  priceUSD: number;
  fullName: string;
  email: string;
  phone: string;
  country: string;
  status: string;
  createdAt: Date;
}

interface Lead {
  id: string;
  contactName: string;
  email: string;
  objective: string;
  status: string;
  createdAt: Date;
  primaryLabel: string; // company or university name
  secondaryLabel: string; // team size or student count
}

export function AdminDashboard({
  lang,
  enrollments,
  enterpriseLeads,
  universityLeads,
}: {
  lang: string;
  enrollments: Enrollment[];
  enterpriseLeads: Lead[];
  universityLeads: Lead[];
}) {
  const [pending, startTransition] = useTransition();

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
      <div className="flex items-center justify-between">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-wider text-ember-strong">
            Admin
          </span>
          <h1 className="mt-2 font-display text-2xl font-semibold">Back-office Mwezi Academy</h1>
        </div>
        <button
          onClick={() => startTransition(() => logout(lang))}
          className="rounded-full border border-border px-4 py-2 text-xs font-semibold transition-colors hover:border-ink"
        >
          Se déconnecter
        </button>
      </div>

      <section className="mt-10">
        <h2 className="font-display text-lg font-semibold">
          Inscriptions ({enrollments.filter((e) => e.status === "pending").length} en attente)
        </h2>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-border bg-surface">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="border-b border-border text-left text-xs uppercase tracking-wide text-ink-muted">
                <th className="px-4 py-3">Apprenant</th>
                <th className="px-4 py-3">Formation</th>
                <th className="px-4 py-3">Contact</th>
                <th className="px-4 py-3">Prix</th>
                <th className="px-4 py-3">Statut</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {enrollments.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-6 text-center text-ink-muted">
                    Aucune inscription pour le moment.
                  </td>
                </tr>
              )}
              {enrollments.map((e) => (
                <tr key={e.id}>
                  <td className="px-4 py-3 font-medium">{e.fullName}</td>
                  <td className="px-4 py-3">{e.courseTitle}</td>
                  <td className="px-4 py-3 text-ink-muted">
                    {e.email}
                    <br />
                    {e.phone} · {e.country}
                  </td>
                  <td className="px-4 py-3 font-mono tabular-nums">${e.priceUSD}</td>
                  <td className="px-4 py-3">
                    <StatusBadge status={e.status} />
                  </td>
                  <td className="px-4 py-3">
                    {e.status === "pending" && (
                      <div className="flex gap-2">
                        <button
                          disabled={pending}
                          onClick={() => startTransition(() => markEnrollmentPaid(lang, e.id))}
                          className="rounded-full bg-ink px-3 py-1.5 text-xs font-semibold text-paper hover:bg-ember hover:text-accent-ink disabled:opacity-60"
                        >
                          Marquer payé
                        </button>
                        <button
                          disabled={pending}
                          onClick={() => startTransition(() => cancelEnrollment(lang, e.id))}
                          className="rounded-full border border-border px-3 py-1.5 text-xs font-semibold hover:border-ink disabled:opacity-60"
                        >
                          Annuler
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <LeadSection
        lang={lang}
        title="Demandes entreprises"
        kind="enterprise"
        leads={enterpriseLeads}
        pending={pending}
        startTransition={startTransition}
      />

      <LeadSection
        lang={lang}
        title="Demandes universités"
        kind="university"
        leads={universityLeads}
        pending={pending}
        startTransition={startTransition}
      />
    </div>
  );
}

function LeadSection({
  lang,
  title,
  kind,
  leads,
  pending,
  startTransition,
}: {
  lang: string;
  title: string;
  kind: "enterprise" | "university";
  leads: Lead[];
  pending: boolean;
  startTransition: (cb: () => void) => void;
}) {
  return (
    <section className="mt-12">
      <h2 className="font-display text-lg font-semibold">
        {title} ({leads.filter((l) => l.status === "new").length} nouvelles)
      </h2>
      <div className="mt-4 overflow-x-auto rounded-2xl border border-border bg-surface">
        <table className="w-full min-w-[720px] text-sm">
          <thead>
            <tr className="border-b border-border text-left text-xs uppercase tracking-wide text-ink-muted">
              <th className="px-4 py-3">Organisation</th>
              <th className="px-4 py-3">Contact</th>
              <th className="px-4 py-3">Objectif</th>
              <th className="px-4 py-3">Taille</th>
              <th className="px-4 py-3">Statut</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {leads.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-6 text-center text-ink-muted">
                  Aucune demande pour le moment.
                </td>
              </tr>
            )}
            {leads.map((l) => (
              <tr key={l.id}>
                <td className="px-4 py-3 font-medium">{l.primaryLabel}</td>
                <td className="px-4 py-3 text-ink-muted">
                  {l.contactName}
                  <br />
                  {l.email}
                </td>
                <td className="px-4 py-3">{l.objective}</td>
                <td className="px-4 py-3 text-ink-muted">{l.secondaryLabel}</td>
                <td className="px-4 py-3">
                  <StatusBadge status={l.status} />
                </td>
                <td className="px-4 py-3">
                  {l.status === "new" && (
                    <button
                      disabled={pending}
                      onClick={() => startTransition(() => markLeadContacted(lang, kind, l.id))}
                      className="rounded-full bg-ink px-3 py-1.5 text-xs font-semibold text-paper hover:bg-ember hover:text-accent-ink disabled:opacity-60"
                    >
                      Marquer contacté
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    pending: "bg-amber-100 text-amber-800",
    new: "bg-amber-100 text-amber-800",
    paid: "bg-teal/15 text-teal",
    contacted: "bg-teal/15 text-teal",
    cancelled: "bg-red-100 text-red-700",
  };
  const labels: Record<string, string> = {
    pending: "En attente",
    new: "Nouveau",
    paid: "Payé",
    contacted: "Contacté",
    cancelled: "Annulé",
  };
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-1 text-xs font-semibold ${styles[status] ?? ""}`}
    >
      {labels[status] ?? status}
    </span>
  );
}
