import type { Metadata } from "next";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect, notFound } from "next/navigation";
import { desc, eq } from "drizzle-orm";
import { hasLocale, getDictionary, type Locale } from "../dictionaries";
import { getDb } from "@/db";
import { students, enrollments } from "@/db/schema";
import { COOKIE_NAME, verifyStudentSessionToken } from "@/lib/student-auth";
import { logout } from "./actions";

export const dynamic = "force-dynamic";

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

  const token = (await cookies()).get(COOKIE_NAME)?.value;
  const studentId = await verifyStudentSessionToken(token);
  if (!studentId) redirect(`/${l}/connexion`);

  const [student] = await getDb().select().from(students).where(eq(students.id, studentId));
  if (!student) redirect(`/${l}/connexion`);

  const myEnrollments = await getDb()
    .select()
    .from(enrollments)
    .where(eq(enrollments.studentId, studentId))
    .orderBy(desc(enrollments.createdAt));

  const statusLabel: Record<string, string> = {
    pending: a.statusPending,
    paid: a.statusPaid,
    cancelled: a.statusCancelled,
  };

  return (
    <div className="mx-auto max-w-4xl px-5 sm:px-8 py-12 sm:py-16">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-wider text-ember-strong">
            {a.eyebrow}
          </span>
          <h1 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
            {a.title.replace("{name}", student.fullName)}
          </h1>
        </div>
        <form action={logout.bind(null, l)}>
          <button
            type="submit"
            className="shrink-0 rounded-full border border-border px-4 py-2 text-xs font-semibold transition-colors hover:border-ink"
          >
            {a.logout}
          </button>
        </form>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <section>
            <h2 className="font-display text-lg font-semibold">{a.enrolledTitle}</h2>
            {myEnrollments.length === 0 ? (
              <div className="mt-4 rounded-2xl border border-border bg-surface p-6 text-sm text-ink-muted">
                <p>{a.noEnrollments}</p>
                <Link
                  href={`/${l}/formations`}
                  className="mt-3 inline-block text-sm font-semibold text-ember-strong hover:underline"
                >
                  {a.browseCatalog} →
                </Link>
              </div>
            ) : (
              <div className="mt-4 flex flex-col gap-3">
                {myEnrollments.map((e) => (
                  <div
                    key={e.id}
                    className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-5 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="min-w-0">
                      <p className="font-display font-semibold">{e.courseTitle}</p>
                      <p className="mt-1 font-mono text-xs text-ink-muted">
                        {statusLabel[e.status] ?? e.status} · ${e.priceUSD}
                      </p>
                    </div>
                    <Link
                      href={`/${l}/formation/${e.courseSlug}`}
                      className="shrink-0 rounded-full border border-border px-4 py-2 text-xs font-semibold transition-colors hover:border-ink"
                    >
                      {a.viewCourse}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>

        <div>
          <section>
            <h2 className="font-display text-lg font-semibold">{a.profileTitle}</h2>
            <dl className="mt-4 flex flex-col gap-3 rounded-2xl border border-border bg-surface p-5 text-sm">
              <Row label={a.profileFields.name} value={student.fullName} />
              <Row label={a.profileFields.email} value={student.email} />
              <Row label={a.profileFields.phone} value={student.phone} />
              <Row label={a.profileFields.country} value={student.country} />
              <Row
                label={a.profileFields.memberSince}
                value={new Date(student.createdAt).toLocaleDateString(l === "fr" ? "fr-FR" : "en-US")}
              />
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
