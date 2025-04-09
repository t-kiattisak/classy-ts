import { twMerge } from "tailwind-merge"
import { ClassyPlugin } from "../types/plugin"

export function tailwindPlugin(): ClassyPlugin {
  return {
    name: "tailwindcss",
    merge(classes) {
      return twMerge(classes.join(" "))
    },
  }
}
