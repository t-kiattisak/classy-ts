import { defaultPresets } from "../presets/default"

export type ConditionClassMap = Record<string, string>

export interface Preset {
  base?: string
  conditions?: ConditionClassMap
}

export type PresetName = keyof typeof defaultPresets

export type PresetConditions<Name extends PresetName> =
  Name extends keyof typeof defaultPresets
    ? keyof (typeof defaultPresets)[Name]["conditions"]
    : never

export interface ClassyOptions<Name extends PresetName = PresetName> {
  base?: string
  presets?: Name
  conditions?: Partial<Record<PresetConditions<Name>, boolean>>
}

export type CustomPresetMap = Record<string, Preset>

export type ClassyTuple = [string, boolean]

export interface ChainableBuilder {
  base(className: string): ChainableBuilder
  when(condition: string, value: boolean): ChainableBuilder
  usePreset(name: keyof typeof defaultPresets): ChainableBuilder
  build(): string
}

export type ClassyInput =
  | ClassyTuple[]
  | ClassyOptions
  | (() => ChainableBuilder)
