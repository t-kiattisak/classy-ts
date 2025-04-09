import { Preset } from "../types"

export const createPresets = <T extends Record<string, Preset>>(presets: T) =>
  presets
