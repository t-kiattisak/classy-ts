import type { ClassyPlugin } from "../types/plugin"

/**
 * A list of known Bootstrap utility class prefixes that may conflict.
 * When multiple classes share the same prefix (e.g. "text-*"), the last one wins.
 */
const bootstrapConflictMap = [
  "bg",
  "text",
  "fw",
  "d",
  "m",
  "mt",
  "mb",
  "ml",
  "mr",
  "p",
  "pt",
  "pb",
  "pl",
  "pr",
  "btn",
  "border",
  "rounded",
  "shadow",
  "position",
  "align",
  "justify",
  "w",
  "h",
]

/**
 * Extracts the prefix from a utility class (e.g. "text-danger" → "text")
 * @param cls Utility class string
 */
function extractPrefix(cls: string): string {
  const match = cls.match(/^([a-z]+)-/)
  return match?.[1] ?? cls
}

/**
 * Bootstrap plugin for classy-ts
 *
 * This plugin removes conflicting Bootstrap utility classes
 * based on a known prefix list (`bootstrapConflictMap`).
 * If multiple classes share the same prefix, only the last one is kept.
 */
export function bootstrapPlugin(): ClassyPlugin {
  return {
    name: "bootstrap",

    /**
     * Merge class names by overriding conflicts
     * @param classList List of class names (strings)
     * @returns Merged className string
     */
    merge(...classList: string[]) {
      const seen = new Map<string, string>()

      for (const cls of classList) {
        const prefix = extractPrefix(cls)
        const key = bootstrapConflictMap.includes(prefix) ? prefix : cls
        seen.set(key, cls)
      }

      return Array.from(seen.values()).join(" ")
    },
  }
}
