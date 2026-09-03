import fs from "node:fs";
import path from "node:path";

export interface LessonSection {
  index: number; // 0-based among modules; the project brief gets index = modules.length
  kind: "module" | "project";
  title: string;
  body: string;
}

// Parses one of the hand-written content/courses/<slug>.md files into
// per-module sections. The format is consistent across all files
// (see content/courses/README.md): "## Module N — Title" per module,
// then a final "## Projet pratique — Brief complet" section.
export function getLessonContent(slug: string): LessonSection[] | null {
  const filePath = path.join(process.cwd(), "content", "courses", `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const headingRegex = /^## (.+)$/gm;
  const matches = [...raw.matchAll(headingRegex)];

  const rawSections = matches.map((match, i) => {
    const heading = match[1].trim();
    const start = match.index! + match[0].length;
    const end = i + 1 < matches.length ? matches[i + 1].index! : raw.length;
    const body = raw
      .slice(start, end)
      .trim()
      .replace(/\n?-{3,}\s*$/, "")
      .trim();

    const kind: LessonSection["kind"] = /^Projet pratique/i.test(heading) ? "project" : "module";
    const title = heading.includes("—") ? heading.split("—").slice(1).join("—").trim() : heading;

    return { kind, title, body };
  });

  let moduleIndex = 0;
  const sections: LessonSection[] = rawSections.map((s) => {
    if (s.kind === "module") {
      return { ...s, index: moduleIndex++ };
    }
    return { ...s, index: -1 }; // fixed below once module count is known
  });

  const projectSection = sections.find((s) => s.kind === "project");
  if (projectSection) projectSection.index = moduleIndex;

  return sections;
}
