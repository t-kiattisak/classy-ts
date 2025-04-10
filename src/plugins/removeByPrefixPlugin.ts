import type { ClassPropertyPlugin } from "../types/plugin"

export function removeByPrefixPlugin(prefixes: string[]): ClassPropertyPlugin {
  return {
    resolveProperty(className: string): string[] {
      for (const prefix of prefixes) {
        if (className.startsWith(`${prefix}-`)) {
          return [prefix]
        }
      }
      return []
    },
  }
}
