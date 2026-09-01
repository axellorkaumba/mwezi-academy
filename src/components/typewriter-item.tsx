"use client";

import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

export function TypewriterText({
  text,
  startDelay = 0,
}: {
  text: string;
  startDelay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(0);
  const [started, setStarted] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        const timeout = setTimeout(() => setStarted(true), startDelay);
        return () => clearTimeout(timeout);
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reducedMotion, startDelay]);

  useEffect(() => {
    if (!started || reducedMotion) return;
    if (shown >= text.length) return;
    const t = setTimeout(() => setShown((s) => s + 1), 16);
    return () => clearTimeout(t);
  }, [started, shown, text.length, reducedMotion]);

  const displayedLength = reducedMotion ? text.length : shown;
  const done = displayedLength >= text.length;

  return (
    <span ref={ref}>
      {text.slice(0, displayedLength)}
      {!done && started && <span className="typewriter-cursor" aria-hidden />}
    </span>
  );
}
