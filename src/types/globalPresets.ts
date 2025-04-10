import { ClassyGlobalPresets } from "./global"

export type PresetName = keyof ClassyGlobalPresets
export type PresetConditions<Name extends PresetName> =
  Name extends keyof ClassyGlobalPresets
    ? keyof ClassyGlobalPresets[Name]["conditions"]
    : never
