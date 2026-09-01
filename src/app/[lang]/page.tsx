import Link from "next/link";
import { hasLocale, getDictionary, type Locale } from "./dictionaries";
import { notFound } from "next/navigation";
import { LogoMark } from "@/components/logo-mark";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);
  const l = lang as Locale;

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full opacity-[0.14] blur-3xl"
          style={{ background: "radial-gradient(circle, var(--ember), transparent 70%)" }}
        />
        <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-20 pb-16 sm:pt-28 sm:pb-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-ember-strong">
            {dict.hero.eyebrow}
          </span>

          <h1 className="mt-6 max-w-3xl whitespace-pre-line font-display text-5xl leading-[0.98] font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            {dict.hero.title}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
            {dict.hero.subtitle}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/${l}/formations`}
              className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-ember hover:text-accent-ink"
            >
              {dict.hero.ctaPrimary}
            </Link>
            <Link
              href={`/${l}/entreprises`}
              className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-ink"
            >
              {dict.hero.ctaSecondary}
            </Link>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
            {dict.hero.stats.map((s) => (
              <div key={s.label}>
                <dd className="font-display text-3xl font-semibold tabular-nums">{s.value}</dd>
                <dt className="mt-1 text-sm text-ink-muted">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------- Categories ---------- */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20">
          <SectionHead eyebrow={dict.categories.eyebrow} title={dict.categories.title} subtitle={dict.categories.subtitle} />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dict.categories.items.map((c, i) => (
              <div
                key={c.name}
                className="group rounded-2xl border border-border bg-paper p-6 transition-colors hover:border-ember/60"
              >
                <span className="font-mono text-xs text-ink-muted">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-display text-xl font-semibold">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Why us ---------- */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20">
          <SectionHead eyebrow={dict.why.eyebrow} title={dict.why.title} />
          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {dict.why.items.map((w) => (
              <div key={w.name} className="bg-surface p-6">
                <h3 className="font-display text-lg font-semibold">{w.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- AI ---------- */}
      <section className="border-t border-border bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-ember">
            {dict.ai.eyebrow}
          </span>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold sm:text-4xl">{dict.ai.title}</h2>
          <p className="mt-4 max-w-xl text-white/60">{dict.ai.subtitle}</p>

          <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {dict.ai.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm"
              >
                <LogoMark className="h-4 w-4 shrink-0 text-ember" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Audiences ---------- */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20">
          <SectionHead eyebrow={dict.audiences.eyebrow} title={dict.audiences.title} />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {dict.audiences.items.map((a) => (
              <div
                key={a.name}
                className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-surface p-6"
              >
                <div>
                  <h3 className="font-display text-lg font-semibold">{a.name}</h3>
                  <p className="mt-1 text-sm text-ink-muted">{a.desc}</p>
                </div>
                <span className="shrink-0 font-mono text-xs text-ember-strong">{a.cta} →</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Proof ---------- */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20">
          <SectionHead eyebrow={dict.proof.eyebrow} title={dict.proof.title} subtitle={dict.proof.subtitle} />
          <div className="mt-10 flex flex-wrap gap-3">
            {dict.proof.items.map((p) => (
              <span
                key={p}
                className="rounded-full border border-border bg-paper px-4 py-2 font-display text-sm font-semibold text-ink-muted"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Team ---------- */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20">
          <SectionHead eyebrow={dict.team.eyebrow} title={dict.team.title} />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {dict.team.members.map((m) => (
              <div key={m.name} className="rounded-2xl border border-border bg-surface p-7">
                <div className="h-12 w-12 rounded-full bg-surface-2 border border-border" aria-hidden />
                <h3 className="mt-4 font-display text-lg font-semibold">{m.name}</h3>
                <p className="text-sm text-ember-strong">{m.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Final CTA ---------- */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-24 text-center">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
            {dict.ctaFinal.title}
          </h2>
          <p className="mt-3 text-ink-muted">{dict.ctaFinal.subtitle}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={`/${l}/formations`}
              className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-ember hover:text-accent-ink"
            >
              {dict.ctaFinal.ctaPrimary}
            </Link>
            <Link
              href={`/${l}/entreprises`}
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-ink"
            >
              {dict.ctaFinal.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionHead({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      <span className="font-mono text-[11px] uppercase tracking-wider text-ember-strong">{eyebrow}</span>
      <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-ink-muted">{subtitle}</p>}
    </div>
  );
}
