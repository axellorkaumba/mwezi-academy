"use client";

export function HeroTitle({ text, className = "" }: { text: string; className?: string }) {
  const lines = text.split("\n");
  return (
    <h1 className={className}>
      {lines.map((line, i) => (
        <span key={i} className="hero-line-mask">
          <span className="hero-line" style={{ animationDelay: `${i * 110}ms` }}>
            {line}
          </span>
        </span>
      ))}
    </h1>
  );
}
