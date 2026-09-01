import type { Metadata } from "next";
import { hasLocale, getDictionary, type Locale } from "../dictionaries";
import { notFound } from "next/navigation";
import { UniversityLeadForm } from "@/components/university-lead-form";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return { title: `${dict.university.title} — Mwezi Academy` };
}

export default async function UniversitiesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);
  const u = dict.university;

  return (
    <div>
      {/* ---------- Hero ---------- */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 py-16 sm:py-24">
          <span className="font-mono text-[11px] uppercase tracking-wider text-ember-strong">
            {u.eyebrow}
          </span>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            {u.title}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-ink-muted">{u.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#form"
              className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-ember hover:text-accent-ink"
            >
              {u.ctaPrimary}
            </a>
            <a
              href="#example"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-ink"
            >
              {u.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        {/* ---------- Why ---------- */}
        <div className="py-16 sm:py-20">
          <h2 className="max-w-xl font-display text-2xl font-semibold sm:text-3xl">{u.why.title}</h2>
          <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {u.why.items.map((item) => (
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
            {u.formats.title}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {u.formats.items.map((item) => (
              <div key={item.name} className="rounded-2xl border border-border bg-surface p-6">
                <span className="font-mono text-xs text-ember-strong">{item.duration}</span>
                <h3 className="mt-2 font-display text-lg font-semibold">{item.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- Who ---------- */}
        <div className="border-t border-border py-16 sm:py-20">
          <h2 className="max-w-xl font-display text-2xl font-semibold sm:text-3xl">{u.who.title}</h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {u.who.items.map((item) => (
              <div key={item.name} className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="font-display text-lg font-semibold">{item.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- Example program ---------- */}
        <div id="example" className="scroll-mt-20 border-t border-border py-16 sm:py-20">
          <h2 className="max-w-xl font-display text-2xl font-semibold sm:text-3xl">
            {u.example.title}
          </h2>
          <p className="mt-2 text-ink-muted">{u.example.subtitle}</p>
          <div className="mt-8 flex flex-col divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
            {u.example.days.map((d) => (
              <div key={d.day} className="flex flex-col gap-1 p-5 sm:flex-row sm:items-baseline sm:gap-6">
                <span className="w-24 shrink-0 font-mono text-xs uppercase tracking-wider text-ember-strong">
                  {d.day}
                </span>
                <span className="w-48 shrink-0 font-display text-base font-semibold">{d.title}</span>
                <span className="text-sm text-ink-muted">{d.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- Modalities ---------- */}
        <div className="border-t border-border py-16 sm:py-20">
          <h2 className="max-w-xl font-display text-2xl font-semibold sm:text-3xl">
            {u.modalities.title}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {u.modalities.items.map((item) => (
              <div key={item.name} className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="font-display text-base font-semibold">{item.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- Form ---------- */}
        <div id="form" className="scroll-mt-20 border-t border-border py-16 sm:py-20">
          <div className="mx-auto max-w-xl">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">{u.form.title}</h2>
            <p className="mt-2 text-ink-muted">{u.form.subtitle}</p>
            <div className="mt-8">
              <UniversityLeadForm dict={dict} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
