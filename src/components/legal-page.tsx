import type { Dictionary } from "@/app/[lang]/dictionaries";

type LegalSection = { heading: string; body: string };

export function LegalPage({
  dict,
  title,
  updated,
  sections,
}: {
  dict: Dictionary;
  title: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <div className="mx-auto max-w-2xl px-5 sm:px-8 py-16 sm:py-20">
      <div className="mb-10 rounded-xl border border-dashed border-ember/50 bg-ember/5 px-5 py-4 text-sm text-ink-muted">
        {dict.legal.reviewBanner}
      </div>

      <h1 className="font-display text-3xl font-semibold sm:text-4xl">{title}</h1>
      <p className="mt-2 font-mono text-xs text-ink-muted">{updated}</p>

      <div className="mt-10 flex flex-col gap-8">
        {sections.map((s) => (
          <div key={s.heading}>
            <h2 className="font-display text-lg font-semibold">{s.heading}</h2>
            <p className="mt-2 leading-relaxed text-ink-muted">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
