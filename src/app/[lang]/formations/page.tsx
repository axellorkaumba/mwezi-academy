import type { Metadata } from "next";
import { hasLocale, getDictionary, type Locale } from "../dictionaries";
import { notFound } from "next/navigation";
import { CatalogClient } from "@/components/catalog-client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return { title: `${dict.catalog.title} — Mwezi Academy` };
}

export default async function FormationsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);

  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
      <span className="font-mono text-[11px] uppercase tracking-wider text-ember-strong">
        {dict.catalog.eyebrow}
      </span>
      <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold sm:text-5xl">
        {dict.catalog.title}
      </h1>
      <p className="mt-3 max-w-xl text-ink-muted">{dict.catalog.subtitle}</p>

      <div className="mt-10">
        <CatalogClient lang={lang as Locale} dict={dict} />
      </div>
    </div>
  );
}
