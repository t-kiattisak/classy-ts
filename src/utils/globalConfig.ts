import type { CustomPresetMap } from "../types"
import type { ClassyPlugin } from "../types/plugin"

let _presets = {} as CustomPresetMap
let _plugins: ClassyPlugin[] = []

export const getClassyGlobalConfig = () => ({
  presets: _presets,
  _plugins: _plugins,
})

export function defineClassy<const T extends CustomPresetMap>(config: {
  presets: T
  plugins: ClassyPlugin[]
}): { presets: T; plugins: ClassyPlugin[] } {
  _presets = config.presets
  _plugins = config.plugins ?? []
  return config
}

export function getGlobalPresets(): CustomPresetMap {
  return _presets
}

export function getGlobalPlugins(): ClassyPlugin[] {
  return _plugins
}
