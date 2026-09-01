"use client";

import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

// Splits "9$" -> prefix "", digits 9, suffix "$"; "$9" -> prefix "$", digits 9, suffix "".
function parseValue(raw: string) {
  const match = raw.match(/^(\D*)(\d+)(\D*)$/);
  if (!match) return { prefix: "", digits: null, suffix: raw };
  const [, prefix, digits, suffix] = match;
  return { prefix, digits: parseInt(digits, 10), suffix };
}

export function AnimatedStat({ value }: { value: string }) {
  const { prefix, digits, suffix } = parseValue(value);
  const ref = useRef<HTMLSpanElement>(null);
  // Default to the real final value — the count-up is a progressive
  // enhancement, never a prerequisite for showing the correct number.
  const [display, setDisplay] = useState(digits ?? 0);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (digits === null || reducedMotion) return;
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const animate = () => {
      setDisplay(0);
      const duration = 900;
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(eased * digits));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        animate();
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [digits, reducedMotion]);

  const shown = digits === null ? value : display;

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {shown}
      {suffix}
    </span>
  );
}
