import type { Metadata } from "next";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect, notFound } from "next/navigation";
import { and, eq } from "drizzle-orm";
import { hasLocale, getDictionary, type Locale } from "../../../dictionaries";
import { courses } from "@/lib/courses";
import { getLessonContent } from "@/lib/lesson-content";
import { getDb } from "@/db";
import { enrollments, lessonProgress } from "@/db/schema";
import { COOKIE_NAME, verifyStudentSessionToken } from "@/lib/student-auth";
import { LessonMarkdown } from "@/components/lesson-markdown";
import { toggleModuleComplete } from "./actions";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) return {};
  const course = courses.find((c) => c.slug === slug);
  if (!course) return {};
  return { title: `${course.title[lang as Locale]} — Mwezi Academy` };
}

export default async function LearnPage({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string; slug: string }>;
  searchParams: Promise<{ m?: string }>;
}) {
  const { lang, slug } = await params;
  const { m } = await searchParams;
  if (!hasLocale(lang)) notFound();
  const l = lang as Locale;
  const dict = await getDictionary(l);
  const dl = dict.lesson;

  const course = courses.find((c) => c.slug === slug);
  if (!course) notFound();

  const token = (await cookies()).get(COOKIE_NAME)?.value;
  const studentId = await verifyStudentSessionToken(token);
  if (!studentId) redirect(`/${l}/connexion`);

  const [paidEnrollment] = await getDb()
    .select()
    .from(enrollments)
    .where(
      and(
        eq(enrollments.studentId, studentId),
        eq(enrollments.courseSlug, slug),
        eq(enrollments.status, "paid")
      )
    );
  if (!paidEnrollment) redirect(`/${l}/formation/${slug}`);

  const sections = getLessonContent(slug);

  if (!sections) {
    return (
      <div className="mx-auto max-w-2xl px-5 py-24 text-center sm:px-8">
        <Link href={`/${l}/compte`} className="font-mono text-xs text-ink-muted hover:text-ink">
          {dl.backToAccount}
        </Link>
        <h1 className="mt-6 font-display text-2xl font-semibold">{dl.comingSoonTitle}</h1>
        <p className="mt-3 text-ink-muted">{dl.comingSoonBody}</p>
      </div>
    );
  }

  const totalModules = sections.filter((s) => s.kind === "module").length;
  const sorted = [...sections].sort((a, b) => a.index - b.index);
  const maxIndex = sorted[sorted.length - 1]?.index ?? 0;

  const requested = Number(m ?? "0");
  const currentIndex = Number.isFinite(requested)
    ? Math.min(Math.max(requested, 0), maxIndex)
    : 0;
  const current = sorted.find((s) => s.index === currentIndex) ?? sorted[0];
  const currentPos = sorted.findIndex((s) => s.index === current.index);
  const prev = currentPos > 0 ? sorted[currentPos - 1] : null;
  const next = currentPos < sorted.length - 1 ? sorted[currentPos + 1] : null;

  const progressRows = await getDb()
    .select()
    .from(lessonProgress)
    .where(and(eq(lessonProgress.studentId, studentId), eq(lessonProgress.courseSlug, slug)));
  const completedIndexes = new Set(progressRows.map((r) => r.moduleIndex));

  const isCurrentModule = current.kind === "module";
  const isCurrentComplete = completedIndexes.has(current.index);

  return (
    <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <Link href={`/${l}/compte`} className="font-mono text-xs text-ink-muted hover:text-ink">
            {dl.backToAccount}
          </Link>
          <h1 className="mt-2 font-display text-xl font-semibold sm:text-2xl">
            {course.title[l]}
          </h1>
        </div>
        <span className="shrink-0 font-mono text-xs text-ink-muted">
          {dl.progressLabel
            .replace("{done}", String(completedIndexes.size))
            .replace("{total}", String(totalModules))}
        </span>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
        {/* Sidebar */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <p className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
            {dl.program}
          </p>
          <nav className="mt-3 flex flex-col gap-1">
            {sorted.map((s) => {
              const isActive = s.index === current.index;
              const isDone = s.kind === "module" && completedIndexes.has(s.index);
              return (
                <Link
                  key={s.index}
                  href={`/${l}/formation/${slug}/apprendre?m=${s.index}`}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? "bg-ink text-paper"
                      : "text-ink-muted hover:bg-surface-2 hover:text-ink"
                  }`}
                >
                  <span className="shrink-0 font-mono text-xs">
                    {isDone ? "✓" : s.kind === "project" ? "★" : String(s.index + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 truncate">
                    {s.kind === "project" ? dl.projectLabel : s.title}
                  </span>
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main content */}
        <div className="min-w-0">
          <span className="font-mono text-[11px] uppercase tracking-wider text-ember-strong">
            {current.kind === "project" ? dl.projectLabel : `Module ${current.index + 1}`}
          </span>
          <h2 className="mt-2 font-display text-2xl font-semibold">
            {current.kind === "project" ? dl.projectLabel : current.title}
          </h2>

          <div className="mt-2 text-sm">
            <LessonMarkdown content={current.body} />
          </div>

          {isCurrentModule && (
            <form
              action={toggleModuleComplete.bind(null, l, slug, current.index)}
              className="mt-8"
            >
              <button
                type="submit"
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  isCurrentComplete
                    ? "border border-teal/40 bg-teal/10 text-teal"
                    : "bg-ink text-paper hover:bg-ember hover:text-accent-ink"
                }`}
              >
                {isCurrentComplete ? `✓ ${dl.markedComplete}` : dl.markComplete}
              </button>
            </form>
          )}

          <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
            {prev ? (
              <Link
                href={`/${l}/formation/${slug}/apprendre?m=${prev.index}`}
                className="text-sm font-semibold text-ink-muted hover:text-ink"
              >
                {dl.previous}
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link
                href={`/${l}/formation/${slug}/apprendre?m=${next.index}`}
                className="text-sm font-semibold text-ink-muted hover:text-ink"
              >
                {dl.next}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
