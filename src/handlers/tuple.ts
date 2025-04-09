import { ClassyTuple } from "../types"

export function handleTuple(...entries: ClassyTuple[]): string {
  return entries
    .filter(([, condition]) => condition)
    .map(([cls]) => cls)
    .join(" ")
    .trim()
}
