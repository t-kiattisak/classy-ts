import type { CustomPresetMap } from "../types"
import type { ClassyPlugin } from "../types/plugin"

let _presets = {} as CustomPresetMap
let _plugin: ClassyPlugin | undefined

export const getClassyGlobalConfig = () => ({
  presets: _presets,
  plugin: _plugin,
})

export function defineClassy<const T extends CustomPresetMap>(config: {
  presets: T
  plugin: ClassyPlugin
}): { presets: T; plugin: ClassyPlugin } {
  _presets = config.presets
  _plugin = config.plugin
  return config
}

export function getGlobalPresets(): CustomPresetMap {
  return _presets
}

export function getGlobalPlugin(): ClassyPlugin | undefined {
  return _plugin
}
