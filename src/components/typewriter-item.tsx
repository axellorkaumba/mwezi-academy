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
  // Default to the full text — the typing effect is a progressive
  // enhancement, never a prerequisite for the content being readable.
  const [shown, setShown] = useState(text.length);
  const [typing, setTyping] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        const timeout = setTimeout(() => {
          setShown(0);
          setTyping(true);
        }, startDelay);
        return () => clearTimeout(timeout);
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reducedMotion, startDelay]);

  useEffect(() => {
    if (!typing || reducedMotion || shown >= text.length) return;
    const t = setTimeout(() => setShown((s) => s + 1), 16);
    return () => clearTimeout(t);
  }, [typing, shown, text.length, reducedMotion]);

  return (
    <span ref={ref}>
      {text.slice(0, shown)}
      {typing && shown < text.length && <span className="typewriter-cursor" aria-hidden />}
    </span>
  );
}
