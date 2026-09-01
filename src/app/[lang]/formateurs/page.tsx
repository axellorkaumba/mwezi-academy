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
  return { title: `${dict.founders.title} — Mwezi Academy` };
}

export default async function FoundersPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const l = lang as Locale;
  const dict = await getDictionary(l);
  const fd = dict.founders;

  return (
    <div>
      {/* ---------- Hero ---------- */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 py-16 sm:py-24">
          <span className="font-mono text-[11px] uppercase tracking-wider text-ember-strong">
            {fd.eyebrow}
          </span>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            {fd.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-muted">{fd.subtitle}</p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        {/* ---------- Members ---------- */}
        <div className="flex flex-col divide-y divide-border">
          {fd.members.map((m) => (
            <article key={m.name} className="py-14 sm:py-16">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <div
                  className="h-20 w-20 shrink-0 rounded-full border border-border bg-surface-2"
                  aria-hidden
                />
                <div>
                  <h2 className="font-display text-2xl font-semibold">{m.name}</h2>
                  <p className="mt-1 text-sm font-medium text-ember-strong">{m.role}</p>
                  <p className="mt-3 max-w-xl text-ink-muted leading-relaxed">{m.bio}</p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <Block title={fd.labels.experience}>
                  <ul className="flex flex-col gap-2">
                    {m.experience.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-ink-muted">
                        <span aria-hidden className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ember" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Block>

                <Block title={fd.labels.education}>
                  <ul className="flex flex-col gap-2">
                    {m.education.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-ink-muted">
                        <span aria-hidden className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ember" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Block>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <Block title={fd.labels.skills}>
                  <div className="flex flex-wrap gap-2">
                    {m.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-ink"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </Block>

                <Block title={fd.labels.certifications}>
                  <div className="flex flex-wrap gap-2">
                    {m.certifications.map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-ink"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </Block>
              </div>

              <div className="mt-8">
                <Block title={fd.labels.languages}>
                  <p className="text-sm text-ink-muted">{m.languages.join(" · ")}</p>
                </Block>
              </div>
            </article>
          ))}
        </div>

        {/* ---------- Complementary ---------- */}
        <div className="border-t border-border py-14 sm:py-16">
          <div className="rounded-2xl border-l-2 border-ember bg-surface-2 p-7 sm:p-8">
            <p className="font-mono text-[11px] uppercase tracking-wider text-ember-strong">
              {fd.complementary.title}
            </p>
            <p className="mt-3 max-w-2xl leading-relaxed">{fd.complementary.body}</p>
          </div>
        </div>

        {/* ---------- CTA ---------- */}
        <div className="border-t border-border py-16 text-center sm:py-20">
          <h2 className="font-display text-3xl font-semibold">{fd.ctaTitle}</h2>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={`/${l}/formations`}
              className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-ember hover:text-accent-ink"
            >
              {fd.ctaPrimary}
            </Link>
            <Link
              href={`/${l}/entreprises`}
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-ink"
            >
              {fd.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">{title}</p>
      <div className="mt-3">{children}</div>
    </div>
  );
}
