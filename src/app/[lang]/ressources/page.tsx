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
  return { title: `${dict.resources.title} — Mwezi Academy` };
}

export default async function ResourcesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const l = lang as Locale;
  const dict = await getDictionary(l);
  const r = dict.resources;

  return (
    <div className="mx-auto max-w-5xl px-5 sm:px-8 py-16 sm:py-24">
      <span className="font-mono text-[11px] uppercase tracking-wider text-ember-strong">
        {r.eyebrow}
      </span>
      <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold sm:text-5xl">{r.title}</h1>
      <p className="mt-3 max-w-xl text-ink-muted">{r.subtitle}</p>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {r.articles.map((article) => (
          <Link
            key={article.slug}
            href={`/${l}/ressources/${article.slug}`}
            className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-ember/60"
          >
            <span className="font-mono text-[11px] uppercase tracking-wider text-ember-strong">
              {article.category}
            </span>
            <h2 className="mt-3 font-display text-lg font-semibold leading-snug">
              {article.title}
            </h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{article.excerpt}</p>
            <div className="mt-4 flex items-center justify-between border-t border-border pt-4 font-mono text-xs text-ink-muted">
              <span>{article.readTime} {r.readTime}</span>
              <span className="text-ink transition-transform group-hover:translate-x-0.5">→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
