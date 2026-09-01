"use client";

import { useState } from "react";

export function Accordion({
  items,
}: {
  items: { title: string; content: React.ReactNode; eyebrow?: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
            >
              <span className="flex items-baseline gap-3">
                {item.eyebrow && (
                  <span className="font-mono text-xs text-ink-muted">{item.eyebrow}</span>
                )}
                <span className="font-medium">{item.title}</span>
              </span>
              <span
                aria-hidden
                className={`shrink-0 text-ink-muted transition-transform ${open ? "rotate-45" : ""}`}
              >
                +
              </span>
            </button>
            {open && (
              <div className="px-6 pb-5 text-sm leading-relaxed text-ink-muted">{item.content}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
