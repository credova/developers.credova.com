export type ChangeKind = "breaking" | "feature" | "fix" | "performance" | "revert";

export interface Change {
  text: string;
  scope?: string;
}

export interface Release {
  version: string;
  date: string;
  changes: Partial<Record<ChangeKind, Change[]>>;
}

const KINDS: Record<string, ChangeKind> = {
  Features: "feature",
  "Bug Fixes": "fix",
  "Performance Improvements": "performance",
  Reverts: "revert",
  "BREAKING CHANGES": "breaking",
};

const INTERNAL_SCOPES = new Set(["ci", "chore", "build", "test", "tests", "deps", "release"]);

const RELEASE_HEADING = /^#{1,2} (?:\[(\S+?)\]\(\S+?\)|(\S+)) \((\d{4}-\d{2}-\d{2})\)\s*$/;
const SECTION_HEADING = /^### (.+)$/;
const ENTRY = /^\* (?:\*\*([\w-]+):\*\* )?(.+)$/;
const COMMIT_LINK = /\s*\(\[[0-9a-f]{7,40}\]\([^)]*\)\)\s*$/;
const ISSUE_LINK = /\s*\(\[#\d+\]\([^)]*\)\)\s*$/;

const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

export function parseChangelog(markdown: string): Release[] {
  const releases: Release[] = [];
  let release: Release | undefined;
  let kind: ChangeKind | undefined;

  for (const line of markdown.split("\n")) {
    const heading = RELEASE_HEADING.exec(line);
    if (heading) {
      release = { version: heading[1] ?? heading[2], date: heading[3], changes: {} };
      releases.push(release);
      kind = undefined;
      continue;
    }

    const section = SECTION_HEADING.exec(line);
    if (section) {
      kind = KINDS[section[1].trim()];
      continue;
    }

    const entry = ENTRY.exec(line);
    if (!release || !kind || !entry) continue;

    const scope = entry[1];
    if (scope && INTERNAL_SCOPES.has(scope) && kind !== "breaking") continue;

    const text = capitalize(entry[2].replace(COMMIT_LINK, "").replace(ISSUE_LINK, "").trim());
    (release.changes[kind] ??= []).push({ text, scope });
  }

  return releases;
}
