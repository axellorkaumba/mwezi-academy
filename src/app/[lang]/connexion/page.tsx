import type { Metadata } from "next";
import { hasLocale, getDictionary, type Locale } from "../dictionaries";
import { notFound } from "next/navigation";
import { StudentLoginForm } from "@/components/student-login-form";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return { title: `${dict.login.title} — Mwezi Academy` };
}

export default async function LoginPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const l = lang as Locale;
  const dict = await getDictionary(l);

  return (
    <div className="mx-auto flex max-w-sm flex-col justify-center px-5 py-24 sm:px-8">
      <span className="font-mono text-[11px] uppercase tracking-wider text-ember-strong">
        {dict.login.eyebrow}
      </span>
      <h1 className="mt-2 font-display text-2xl font-semibold">{dict.login.title}</h1>
      <p className="mt-2 text-sm text-ink-muted">{dict.login.subtitle}</p>
      <div className="mt-8">
        <StudentLoginForm lang={l} dict={dict} />
      </div>
    </div>
  );
}
