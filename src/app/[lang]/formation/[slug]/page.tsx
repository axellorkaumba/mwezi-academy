import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { hasLocale, getDictionary, locales, type Locale } from "../../dictionaries";
import { courses, categoryLabels, instructorNames } from "@/lib/courses";
import { getCourseDetail } from "@/lib/course-detail";
import { Accordion } from "@/components/accordion";
import { StickyCourseCta } from "@/components/sticky-course-cta";
import { EnrollmentForm } from "@/components/enrollment-form";

export async function generateStaticParams() {
  return locales.flatMap((lang) => courses.map((c) => ({ lang, slug: c.slug })));
}

function findCourse(slug: string) {
  return courses.find((c) => c.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) return {};
  const course = findCourse(slug);
  if (!course) return {};
  return {
    title: `${course.title[lang as Locale]} — Mwezi Academy`,
    description: course.description[lang as Locale],
  };
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const l = lang as Locale;
  const dict = await getDictionary(l);
  const course = findCourse(slug);
  if (!course) notFound();

  const detail = getCourseDetail(course);
  const instructorIndex = { axel: 0, ruddy: 1, abraham: 2 }[course.instructor];
  const instructorMember = dict.team.members[instructorIndex];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title[l],
    description: course.description[l],
    provider: {
      "@type": "Organization",
      name: "Mwezi Academy",
    },
    offers: {
      "@type": "Offer",
      price: course.priceUSD,
      priceCurrency: "USD",
    },
  };

  return (
    <div className="pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ---------- Hero ---------- */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 py-14 sm:py-18">
          <Link
            href={`/${l}/formations`}
            className="font-mono text-xs text-ink-muted hover:text-ink transition-colors"
          >
            {dict.course.backToCatalog}
          </Link>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="font-mono text-[11px] uppercase tracking-wider text-ember-strong">
              {categoryLabels[course.category][l]}
            </span>
            <span aria-hidden className="text-border">·</span>
            <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-ink-muted">
              {dict.catalog.levels[course.level]}
            </span>
          </div>

          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
            {course.title[l]}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-ink-muted">{course.description[l]}</p>

          <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-border pt-6">
            <Stat label={dict.catalog.formats[course.format]} />
            <Stat label={course.durationLabel[l]} />
            <Stat label={`${course.modules} ${dict.course.modulesLabel}`} />
            <div className="ml-auto flex items-center gap-4">
              <span className="font-display text-3xl font-semibold tabular-nums">
                ${course.priceUSD}
              </span>
              <a
                href="#enroll"
                className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-ember hover:text-accent-ink"
              >
                {dict.course.enroll}${course.priceUSD}
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        {/* ---------- Learn / For who ---------- */}
        <div className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 sm:py-16">
          <div>
            <h2 className="font-display text-xl font-semibold">{dict.course.learn}</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {detail.learn.map((item, i) => (
                <BulletItem key={i} text={item[l]} />
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold">{dict.course.forWho}</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {detail.forWho.map((item, i) => (
                <BulletItem key={i} text={item[l]} />
              ))}
            </ul>
          </div>
        </div>

        {/* ---------- Outcomes ---------- */}
        <div className="border-t border-border py-14 sm:py-16">
          <h2 className="font-display text-xl font-semibold">{dict.course.outcomes}</h2>
          <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {detail.outcomes.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-xl border border-border bg-surface px-4 py-3.5 text-sm"
              >
                <CheckIcon />
                {item[l]}
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- Program ---------- */}
        <div className="border-t border-border py-14 sm:py-16">
          <h2 className="font-display text-xl font-semibold">{dict.course.program}</h2>
          <div className="mt-5">
            <Accordion
              items={detail.modules.map((m, i) => ({
                eyebrow: String(i + 1).padStart(2, "0"),
                title: m[l],
                content: "",
              }))}
            />
          </div>
        </div>

        {/* ---------- Project ---------- */}
        <div className="border-t border-border py-14 sm:py-16">
          <h2 className="font-display text-xl font-semibold">{dict.course.project}</h2>
          <p className="mt-4 max-w-2xl text-ink-muted leading-relaxed">{detail.project[l]}</p>
        </div>

        {/* ---------- Resources ---------- */}
        <div className="border-t border-border py-14 sm:py-16">
          <h2 className="font-display text-xl font-semibold">{dict.course.resources}</h2>
          <ul className="mt-4 flex flex-col gap-3">
            {detail.resources.map((item, i) => (
              <BulletItem key={i} text={item[l]} />
            ))}
          </ul>
        </div>

        {/* ---------- Instructor ---------- */}
        <div className="border-t border-border py-14 sm:py-16">
          <h2 className="font-display text-xl font-semibold">{dict.course.instructor}</h2>
          <div className="mt-5 flex items-start gap-4 rounded-2xl border border-border bg-surface p-6">
            <div className="h-12 w-12 shrink-0 rounded-full border border-border bg-surface-2" aria-hidden />
            <div>
              <p className="font-display text-lg font-semibold">
                {instructorNames[course.instructor]}
              </p>
              <p className="text-sm text-ember-strong">{instructorMember.role}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{instructorMember.bio}</p>
            </div>
          </div>
        </div>

        {/* ---------- FAQ ---------- */}
        <div className="border-t border-border py-14 sm:py-16">
          <h2 className="font-display text-xl font-semibold">{dict.course.faq}</h2>
          <div className="mt-5">
            <Accordion
              items={detail.faq.map((f) => ({ title: f.q[l], content: f.a[l] }))}
            />
          </div>
        </div>

        {/* ---------- Enroll ---------- */}
        <div id="enroll" className="border-t border-border py-16 sm:py-20">
          <div className="mx-auto max-w-md text-center">
            <h2 className="font-display text-3xl font-semibold">{dict.enroll.title}</h2>
            <p className="mt-2 text-ink-muted">{dict.enroll.subtitle}</p>
          </div>
          <div className="mx-auto mt-8 max-w-md">
            <EnrollmentForm dict={dict} courseSlug={course.slug} price={course.priceUSD} />
          </div>
        </div>
      </div>

      <StickyCourseCta title={course.title[l]} price={course.priceUSD} label={dict.course.stickyEnroll} />
    </div>
  );
}

function Stat({ label }: { label: string }) {
  return <span className="font-mono text-xs text-ink-muted">{label}</span>;
}

function BulletItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-sm leading-relaxed text-ink-muted">
      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
      {text}
    </li>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      fill="none"
      className="mt-0.5 h-4 w-4 shrink-0 text-teal"
    >
      <path
        d="M3 8.5L6.2 11.5L13 4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
