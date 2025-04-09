import type { ClassyPlugin } from "../types/plugin"

let currentPlugin: ClassyPlugin | null = null

export function setClassyPlugin(plugin: ClassyPlugin) {
  currentPlugin = plugin
}

export function getClassyPlugin(): ClassyPlugin {
  if (!currentPlugin) throw new Error("No plugin set for classy")
  return currentPlugin
}
