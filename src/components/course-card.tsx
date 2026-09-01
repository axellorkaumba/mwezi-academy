import Link from "next/link";
import type { Course } from "@/lib/courses";
import { categoryLabels, instructorNames } from "@/lib/courses";
import type { Dictionary, Locale } from "@/app/[lang]/dictionaries";

export function CourseCard({
  course,
  lang,
  dict,
}: {
  course: Course;
  lang: Locale;
  dict: Dictionary;
}) {
  const modulesLabel =
    course.modules === 1
      ? dict.catalog.modules_one.replace("{count}", "1")
      : dict.catalog.modules_other.replace("{count}", String(course.modules));

  return (
    <Link
      href={`/${lang}/formation/${course.slug}`}
      className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-ember/60"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-[11px] uppercase tracking-wider text-ember-strong">
          {categoryLabels[course.category][lang]}
        </span>
        <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-ink-muted">
          {dict.catalog.levels[course.level]}
        </span>
      </div>

      <h3 className="mt-3 font-display text-lg font-semibold leading-snug">
        {course.title[lang]}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
        {course.description[lang]}
      </p>

      <dl className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-border pt-4 font-mono text-xs text-ink-muted">
        <div>
          <dt className="sr-only">{dict.catalog.formats[course.format]}</dt>
          <dd>{dict.catalog.formats[course.format]}</dd>
        </div>
        <span aria-hidden>·</span>
        <div>
          <dt className="sr-only">Duration</dt>
          <dd>{course.durationLabel[lang]}</dd>
        </div>
        <span aria-hidden>·</span>
        <div>
          <dt className="sr-only">Modules</dt>
          <dd>{modulesLabel}</dd>
        </div>
      </dl>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-ink-muted">
          {dict.catalog.by} {instructorNames[course.instructor]}
        </span>
        <span className="font-display text-xl font-semibold tabular-nums">
          ${course.priceUSD}
        </span>
      </div>

      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors group-hover:text-ember-strong">
        {dict.catalog.cta}
        <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </Link>
  );
}
