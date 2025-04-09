import type { ClassyPlugin } from "../types/plugin"

const bootstrapConflictMap = [
  "bg",
  "text",
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

function extractPrefix(cls: string): string {
  const match = cls.match(/^([a-z]+)-/)
  return match?.[1] ?? cls
}

export function bootstrapPlugin(): ClassyPlugin {
  return {
    name: "bootstrap",
    merge(classList: string[]) {
      const seen = new Map<string, string>()

      for (const cls of classList) {
        const prefix = extractPrefix(cls)
        if (bootstrapConflictMap.includes(prefix)) {
          seen.set(prefix, cls)
        } else {
          seen.set(cls, cls)
        }
      }

      return Array.from(seen.values()).join(" ")
    },
  }
}
