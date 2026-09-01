"use client";

import { useEffect, useRef, useState } from "react";

export function StickyCourseCta({
  title,
  price,
  label,
}: {
  title: string;
  price: number;
  label: string;
}) {
  const [visible, setVisible] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), {
      rootMargin: "0px",
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} aria-hidden />
      <div
        className={`fixed inset-x-0 bottom-0 z-30 border-t border-border bg-surface/95 backdrop-blur transition-transform duration-300 ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
          <p className="min-w-0 truncate text-sm font-medium">{title}</p>
          <div className="flex shrink-0 items-center gap-4">
            <span className="font-display text-lg font-semibold tabular-nums">${price}</span>
            <a
              href="#enroll"
              className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-ember hover:text-accent-ink"
            >
              {label}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
