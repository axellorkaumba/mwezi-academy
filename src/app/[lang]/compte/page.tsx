import type { Metadata } from "next";
import Link from "next/link";
import { hasLocale, getDictionary, type Locale } from "../dictionaries";
import { notFound } from "next/navigation";
import { courses } from "@/lib/courses";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return { title: `${dict.account.eyebrow} — Mwezi Academy` };
}

export default async function AccountPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const l = lang as Locale;
  const dict = await getDictionary(l);
  const a = dict.account;

  const enrolled = a.sampleEnrolled
    .map((e) => ({ ...e, course: courses.find((c) => c.slug === e.slug) }))
    .filter((e) => e.course);

  return (
    <div className="mx-auto max-w-4xl px-5 sm:px-8 py-12 sm:py-16">
      {/* Preview banner */}
      <div className="mb-10 rounded-xl border border-dashed border-ember/50 bg-ember/5 px-5 py-4 text-sm text-ink-muted">
        {a.previewBanner}
      </div>

      <span className="font-mono text-[11px] uppercase tracking-wider text-ember-strong">
        {a.eyebrow}
      </span>
      <h1 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">{a.title}</h1>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {/* Enrolled courses */}
          <section>
            <h2 className="font-display text-lg font-semibold">{a.enrolledTitle}</h2>
            <div className="mt-4 flex flex-col gap-3">
              {enrolled.map(({ course, progress }) => (
                <div
                  key={course!.slug}
                  className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="min-w-0">
                    <p className="font-display font-semibold">{course!.title[l]}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="h-1.5 w-40 overflow-hidden rounded-full bg-surface-2">
                        <div
                          className="h-full rounded-full bg-ember"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      <span className="font-mono text-xs text-ink-muted">{progress}%</span>
                    </div>
                  </div>
                  <Link
                    href={`/${l}/formation/${course!.slug}`}
                    className="shrink-0 rounded-full border border-border px-4 py-2 text-xs font-semibold transition-colors hover:border-ink"
                  >
                    {a.continueLabel}
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Purchases */}
          <section className="mt-12">
            <h2 className="font-display text-lg font-semibold">{a.purchasesTitle}</h2>
            <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-surface">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-border">
                  {enrolled.map(({ course }) => (
                    <tr key={course!.slug}>
                      <td className="px-5 py-3">{course!.title[l]}</td>
                      <td className="px-5 py-3 text-right font-mono tabular-nums text-ink-muted">
                        ${course!.priceUSD}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <div className="flex flex-col gap-8">
          {/* Certificates */}
          <section>
            <h2 className="font-display text-lg font-semibold">{a.certificatesTitle}</h2>
            <div className="mt-4 rounded-2xl border border-border bg-surface p-5">
              <p className="font-medium">{enrolled[2]?.course?.title[l]}</p>
              <p className="mt-1 font-mono text-xs text-ink-muted">MWA-2026-000123</p>
              <p className="mt-2 text-xs text-ink-muted">{a.certificateExample}</p>
              <span className="mt-3 inline-block rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-ink-muted">
                {a.certificateVerify}
              </span>
            </div>
          </section>

          {/* Profile */}
          <section>
            <h2 className="font-display text-lg font-semibold">{a.profileTitle}</h2>
            <dl className="mt-4 flex flex-col gap-3 rounded-2xl border border-border bg-surface p-5 text-sm">
              <Row label={a.profileFields.name} value="Amina Tshimanga" />
              <Row label={a.profileFields.email} value="amina@example.com" />
              <Row label={a.profileFields.language} value={l === "fr" ? "Français" : "English"} />
              <Row label={a.profileFields.memberSince} value="Janvier 2026" />
            </dl>
          </section>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <dt className="text-ink-muted">{label}</dt>
      <dd className="font-medium">{value}</dd>
    </div>
  );
}
