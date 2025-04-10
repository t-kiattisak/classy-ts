import { PresetConditions, PresetName } from "./globalPresets"

export type ConditionClassMap = Record<string, string>

export interface Preset {
  base?: string
  conditions?: ConditionClassMap
}

export type CustomPresetMap = Record<string, Preset>

export interface ClassyOptions<Name extends PresetName = PresetName> {
  base?: string
  presets?: Name
  conditions?: Partial<Record<PresetConditions<Name>, boolean>>
}

export type ClassyTuple = [string, boolean]

export interface ChainableBuilder {
  base(className: string): ChainableBuilder
  when(condition: string, value: boolean): ChainableBuilder
  usePreset(name: PresetName): ChainableBuilder
  build(): string
}

export type ClassyInput =
  | ClassyTuple[]
  | ClassyOptions
  | (() => ChainableBuilder)
