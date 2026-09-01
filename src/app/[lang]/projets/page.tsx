import type { Metadata } from "next";
import Link from "next/link";
import { hasLocale, getDictionary, type Locale } from "../dictionaries";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return { title: `${dict.projects.title} — Mwezi Academy` };
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const l = lang as Locale;
  const dict = await getDictionary(l);
  const p = dict.projects;

  return (
    <div>
      {/* ---------- Hero ---------- */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 py-16 sm:py-24">
          <span className="font-mono text-[11px] uppercase tracking-wider text-ember-strong">
            {p.eyebrow}
          </span>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            {p.title}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-ink-muted">{p.subtitle}</p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        {/* ---------- Featured projects ---------- */}
        <div className="py-16 sm:py-20">
          <p className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
            {p.featuredLabel}
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
            {p.featured.map((proj) => (
              <article
                key={proj.name}
                className="flex flex-col rounded-2xl border border-border bg-surface p-7"
              >
                <span className="font-mono text-[11px] uppercase tracking-wider text-ember-strong">
                  {proj.sector}
                </span>
                <h2 className="mt-2 font-display text-xl font-semibold">{proj.name}</h2>
                <p className="mt-2 text-sm font-medium text-ink-muted">{proj.tagline}</p>

                <ul className="mt-4 flex flex-1 flex-col gap-2">
                  {proj.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm text-ink-muted">
                      <span aria-hidden className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ember" />
                      {pt}
                    </li>
                  ))}
                </ul>

                {proj.note && (
                  <p className="mt-4 border-t border-border pt-4 text-xs leading-relaxed text-ink-muted">
                    {proj.note}
                  </p>
                )}

                <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
                  {proj.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-paper px-2.5 py-1 text-[11px] text-ink-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ---------- Other collaborations ---------- */}
        <div className="border-t border-border py-16 sm:py-20">
          <p className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
            {p.otherLabel}
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {p.other.map((proj) => (
              <div key={proj.name} className="rounded-2xl border border-dashed border-border p-6">
                <span className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                  {proj.sector}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold">{proj.name}</h3>
                <p className="mt-2 text-sm text-ink-muted">{proj.role}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-ink-muted">{p.otherNote}</p>
        </div>

        {/* ---------- CTA ---------- */}
        <div className="border-t border-border py-16 text-center sm:py-20">
          <h2 className="font-display text-3xl font-semibold">{p.ctaTitle}</h2>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={`/${l}/entreprises`}
              className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-ember hover:text-accent-ink"
            >
              {p.ctaPrimary}
            </Link>
            <Link
              href={`/${l}/formateurs`}
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-ink"
            >
              {p.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
