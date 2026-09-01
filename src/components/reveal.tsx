"use client";

import { useEffect, useRef, useState } from "react";

type RevealFrom = "up" | "left" | "right";

export function Reveal({
  children,
  delay = 0,
  from = "up",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  from?: RevealFrom;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    obs.observe(el);
    // Safety net: never leave content permanently invisible if the
    // observer fails to fire for any reason.
    const fallback = setTimeout(() => setVisible(true), 2000);
    return () => {
      obs.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal reveal--from-${from} ${visible ? "reveal--visible" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
