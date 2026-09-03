"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LogoMark } from "./logo-mark";
import type { Dictionary, Locale } from "@/app/[lang]/dictionaries";

export function SiteHeader({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const otherLang: Locale = lang === "fr" ? "en" : "fr";
  const otherHref = pathname.replace(`/${lang}`, `/${otherLang}`) || `/${otherLang}`;

  const links = [
    { href: `/${lang}/formations`, label: dict.nav.formations },
    { href: `/${lang}/entreprises`, label: dict.nav.entreprises },
    { href: `/${lang}/universites`, label: dict.nav.universites },
    { href: `/${lang}/formateurs`, label: dict.nav.formateurs },
    { href: `/${lang}/ressources`, label: dict.nav.ressources },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-paper/85 backdrop-blur supports-[backdrop-filter]:bg-paper/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href={`/${lang}`} className="flex items-center gap-2.5 shrink-0">
          <LogoMark className="h-7 w-7 text-ember" />
          <span className="font-display text-lg font-bold tracking-tight">Mwezi Academy</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink hover:bg-surface-2"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href={`/${lang}/compte`}
            className="font-mono text-xs tracking-wide text-ink-muted hover:text-ink transition-colors"
          >
            {dict.nav.account}
          </Link>
          <Link
            href={otherHref}
            className="font-mono text-xs tracking-wide text-ink-muted hover:text-ink transition-colors"
          >
            {lang === "fr" ? "FR · EN" : "EN · FR"}
          </Link>
          <Link
            href={`/${lang}/formations`}
            className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-paper transition-colors hover:bg-ember hover:text-accent-ink"
          >
            {dict.nav.cta}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-ink"
          aria-expanded={open}
          aria-label="Menu"
        >
          <span className="sr-only">Menu</span>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            {open ? (
              <path d="M2 2L16 16M16 2L2 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M1 4H17M1 9H17M1 14H17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-paper px-5 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-ink hover:bg-surface-2"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href={`/${lang}/compte`}
            onClick={() => setOpen(false)}
            className="rounded-md px-3 py-2.5 text-sm font-medium text-ink hover:bg-surface-2"
          >
            {dict.nav.account}
          </Link>
          <div className="mt-2 flex items-center justify-between px-3">
            <Link href={otherHref} className="font-mono text-xs text-ink-muted">
              {lang === "fr" ? "Switch to EN" : "Passer en FR"}
            </Link>
            <Link
              href={`/${lang}/formations`}
              className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-paper"
            >
              {dict.nav.cta}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
