import Link from "next/link";
import { LogoMark } from "./logo-mark";
import type { Dictionary, Locale } from "@/app/[lang]/dictionaries";

export function SiteFooter({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const academieHrefs = [
    `/${lang}/entreprises`,
    `/${lang}/universites`,
    `/${lang}/formateurs`,
    `/${lang}/ressources`,
  ];
  const legalHrefs = [`/${lang}/mentions-legales`, `/${lang}/confidentialite`, `/${lang}/cgv`];

  const cols = [
    { ...dict.footer.columns.formations, hrefs: null },
    { ...dict.footer.columns.academie, hrefs: academieHrefs },
    { ...dict.footer.columns.legal, hrefs: legalHrefs },
  ];

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-5">
          <div className="col-span-2">
            <Link href={`/${lang}`} className="flex items-center gap-2.5">
              <LogoMark className="h-6 w-6 text-ember" />
              <span className="font-display text-base font-bold">Mwezi Academy</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-ink-muted">{dict.footer.tagline}</p>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                {col.title}
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                {col.links.map((link, i) => (
                  <li key={link}>
                    {col.hrefs ? (
                      <Link
                        href={col.hrefs[i]}
                        className="text-sm text-ink-muted transition-colors hover:text-ink"
                      >
                        {link}
                      </Link>
                    ) : (
                      <span className="text-sm text-ink-muted">{link}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col-reverse gap-3 border-t border-border pt-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Mwezi Academy. {dict.footer.rights}</p>
          <p className="font-mono">RDC · Afrique francophone · International</p>
        </div>
      </div>
    </footer>
  );
}
