import type { Metadata } from "next";
import Link from "next/link";
import { hasLocale, getDictionary, locales, type Locale } from "../../dictionaries";
import { notFound } from "next/navigation";
import frDict from "../../dictionaries/fr.json";

export async function generateStaticParams() {
  return locales.flatMap((lang) => frDict.resources.articles.map((a) => ({ lang, slug: a.slug })));
}

function findArticle(articles: typeof frDict.resources.articles, slug: string) {
  return articles.find((a) => a.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  const article = findArticle(dict.resources.articles, slug);
  if (!article) return {};
  return { title: `${article.title} — Mwezi Academy`, description: article.excerpt };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const l = lang as Locale;
  const dict = await getDictionary(l);
  const r = dict.resources;
  const article = findArticle(r.articles, slug);
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: { "@type": "Organization", name: "Mwezi Academy" },
  };

  return (
    <div className="mx-auto max-w-2xl px-5 sm:px-8 py-16 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Link href={`/${l}/ressources`} className="font-mono text-xs text-ink-muted hover:text-ink transition-colors">
        {r.backToResources}
      </Link>

      <div className="mt-6 flex items-center gap-3">
        <span className="font-mono text-[11px] uppercase tracking-wider text-ember-strong">
          {article.category}
        </span>
        <span aria-hidden className="text-border">·</span>
        <span className="font-mono text-xs text-ink-muted">
          {article.readTime} {r.readTime}
        </span>
      </div>

      <h1 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
        {article.title}
      </h1>

      <div className="mt-8 flex flex-col gap-4">
        {article.body.map((paragraph, i) => (
          <p key={i} className="leading-relaxed text-ink">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
