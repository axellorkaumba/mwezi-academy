"use client";

import { useMemo, useState } from "react";
import {
  categoryLabels,
  categoryOrder,
  courses,
  type Category,
  type Format,
  type Level,
} from "@/lib/courses";
import { CourseCard } from "./course-card";
import type { Dictionary, Locale } from "@/app/[lang]/dictionaries";

type PriceRange = "all" | "sous20" | "20a50" | "50a100" | "plus100";

const inPriceRange = (price: number, range: PriceRange) => {
  switch (range) {
    case "sous20":
      return price < 20;
    case "20a50":
      return price >= 20 && price <= 50;
    case "50a100":
      return price > 50 && price <= 100;
    case "plus100":
      return price > 100;
    default:
      return true;
  }
};

export function CatalogClient({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category | "all">("all");
  const [level, setLevel] = useState<Level | "all">("all");
  const [format, setFormat] = useState<Format | "all">("all");
  const [price, setPrice] = useState<PriceRange>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return courses.filter((c) => {
      if (category !== "all" && c.category !== category) return false;
      if (level !== "all" && c.level !== level) return false;
      if (format !== "all" && c.format !== format) return false;
      if (!inPriceRange(c.priceUSD, price)) return false;
      if (q) {
        const haystack = `${c.title[lang]} ${c.description[lang]}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [query, category, level, format, price, lang]);

  const hasActiveFilters =
    query !== "" || category !== "all" || level !== "all" || format !== "all" || price !== "all";

  const resetFilters = () => {
    setQuery("");
    setCategory("all");
    setLevel("all");
    setFormat("all");
    setPrice("all");
  };

  const countLabel =
    filtered.length === 1
      ? dict.catalog.resultCount_one.replace("{count}", "1")
      : dict.catalog.resultCount_other.replace("{count}", String(filtered.length));

  return (
    <div>
      {/* Search */}
      <div className="relative">
        <svg
          aria-hidden
          className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted"
          viewBox="0 0 16 16"
          fill="none"
        >
          <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.4" />
          <path d="M11.5 11.5L14.5 14.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={dict.catalog.searchPlaceholder}
          className="w-full rounded-full border border-border bg-surface py-3.5 pl-11 pr-5 text-sm outline-none transition-colors placeholder:text-ink-muted focus:border-ember"
        />
      </div>

      {/* Filters */}
      <div className="mt-5 flex flex-wrap gap-3">
        <Select
          value={category}
          onChange={(v) => setCategory(v as Category | "all")}
          options={[
            { value: "all", label: dict.catalog.allCategories },
            ...categoryOrder.map((c) => ({ value: c, label: categoryLabels[c][lang] })),
          ]}
        />
        <Select
          value={level}
          onChange={(v) => setLevel(v as Level | "all")}
          options={[
            { value: "all", label: dict.catalog.allLevels },
            { value: "debutant", label: dict.catalog.levels.debutant },
            { value: "intermediaire", label: dict.catalog.levels.intermediaire },
            { value: "avance", label: dict.catalog.levels.avance },
          ]}
        />
        <Select
          value={format}
          onChange={(v) => setFormat(v as Format | "all")}
          options={[
            { value: "all", label: dict.catalog.allFormats },
            { value: "mini", label: dict.catalog.formats.mini },
            { value: "formation", label: dict.catalog.formats.formation },
            { value: "bootcamp", label: dict.catalog.formats.bootcamp },
            { value: "masterclass", label: dict.catalog.formats.masterclass },
            { value: "programme", label: dict.catalog.formats.programme },
          ]}
        />
        <Select
          value={price}
          onChange={(v) => setPrice(v as PriceRange)}
          options={[
            { value: "all", label: dict.catalog.allPrices },
            { value: "sous20", label: dict.catalog.priceRanges.sous20 },
            { value: "20a50", label: dict.catalog.priceRanges["20a50"] },
            { value: "50a100", label: dict.catalog.priceRanges["50a100"] },
            { value: "plus100", label: dict.catalog.priceRanges.plus100 },
          ]}
        />

        {hasActiveFilters && (
          <button
            type="button"
            onClick={resetFilters}
            className="rounded-full px-4 py-2 font-mono text-xs text-ember-strong underline decoration-dotted underline-offset-4"
          >
            {dict.catalog.resetFilters}
          </button>
        )}
      </div>

      {/* Result count */}
      <p className="mt-6 font-mono text-xs text-ink-muted">{countLabel}</p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => (
            <CourseCard key={c.slug} course={c} lang={lang} dict={dict} />
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-2xl border border-dashed border-border p-12 text-center text-sm text-ink-muted">
          {dict.catalog.noResults}
        </div>
      )}
    </div>
  );
}

function Select({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none rounded-full border border-border bg-surface py-2.5 pl-4 pr-9 text-sm outline-none transition-colors focus:border-ember"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <svg
        aria-hidden
        className="pointer-events-none absolute right-3 top-1/2 h-3 w-3 -translate-y-1/2 text-ink-muted"
        viewBox="0 0 12 12"
        fill="none"
      >
        <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
