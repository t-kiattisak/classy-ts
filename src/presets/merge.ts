import { defaultPresets } from "./default"
import { customPresets } from "./custom"
import { Preset } from "../types"

export const allPresets: Record<string, Preset> = {
  ...defaultPresets,
  ...customPresets,
}
