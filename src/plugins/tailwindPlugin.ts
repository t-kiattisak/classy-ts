import { twMerge } from "tailwind-merge"
import { ClassyPlugin } from "../types/plugin"

/**
 * TailwindCSS plugin for classy-ts
 *
 * This plugin uses `tailwind-merge` to intelligently merge class names
 * by removing conflicting Tailwind utility classes (e.g. multiple `bg-*`, `text-*`, etc.)
 *
 * Example:
 *   twMerge("bg-red-500 bg-blue-500") → "bg-blue-500"
 */
export function tailwindPlugin(): ClassyPlugin {
  return {
    name: "tailwindcss",
    /**
     * Merge class names using tailwind-merge
     * @param classes List of raw class names (strings)
     * @returns Merged className string
     */
    merge(classes) {
      return twMerge(classes.join(" "))
    },
  }
}
