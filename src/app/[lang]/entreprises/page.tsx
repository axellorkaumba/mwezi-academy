import type { Metadata } from "next";
import { hasLocale, getDictionary, type Locale } from "../dictionaries";
import { notFound } from "next/navigation";
import { EnterpriseLeadForm } from "@/components/enterprise-lead-form";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return { title: `${dict.enterprise.title} — Mwezi Academy` };
}

export default async function EnterprisesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);
  const e = dict.enterprise;

  return (
    <div>
      {/* ---------- Hero ---------- */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 py-16 sm:py-24">
          <span className="font-mono text-[11px] uppercase tracking-wider text-ember-strong">
            {e.eyebrow}
          </span>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            {e.title}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-ink-muted">{e.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#form"
              className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-ember hover:text-accent-ink"
            >
              {e.ctaPrimary}
            </a>
            <a
              href="#topics"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-ink"
            >
              {e.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        {/* ---------- Why ---------- */}
        <div className="py-16 sm:py-20">
          <h2 className="max-w-xl font-display text-2xl font-semibold sm:text-3xl">
            {e.why.title}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {e.why.items.map((item) => (
              <div key={item.name} className="bg-surface p-6">
                <h3 className="font-display text-lg font-semibold">{item.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- Formats ---------- */}
        <div className="border-t border-border py-16 sm:py-20">
          <h2 className="max-w-xl font-display text-2xl font-semibold sm:text-3xl">
            {e.formats.title}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {e.formats.items.map((item) => (
              <div key={item.name} className="rounded-2xl border border-border bg-surface p-6">
                <span className="font-mono text-xs text-ember-strong">{item.duration}</span>
                <h3 className="mt-2 font-display text-lg font-semibold">{item.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- Topics ---------- */}
        <div id="topics" className="scroll-mt-20 border-t border-border py-16 sm:py-20">
          <h2 className="max-w-xl font-display text-2xl font-semibold sm:text-3xl">
            {e.topics.title}
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {e.topics.items.map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-ink"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* ---------- Process ---------- */}
        <div className="border-t border-border py-16 sm:py-20">
          <h2 className="max-w-xl font-display text-2xl font-semibold sm:text-3xl">
            {e.process.title}
          </h2>
          <ol className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-4">
            {e.process.steps.map((step, i) => (
              <li key={step.name} className="rounded-2xl border border-border bg-surface p-6">
                <span className="font-mono text-xs text-ink-muted">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 font-display text-lg font-semibold">{step.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* ---------- Form ---------- */}
        <div id="form" className="scroll-mt-20 border-t border-border py-16 sm:py-20">
          <div className="mx-auto max-w-xl">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">{e.form.title}</h2>
            <p className="mt-2 text-ink-muted">{e.form.subtitle}</p>
            <div className="mt-8">
              <EnterpriseLeadForm dict={dict} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
