import { Preset } from "../types"

export function buildBaseClass(base?: string, preset?: Preset): string {
  return [base, preset?.base].filter(Boolean).join(" ")
}
