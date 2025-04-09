import { ClassPropertyPlugin } from "../types/plugin"

let currentPlugin: ClassPropertyPlugin | null = null

export function setClassPropertyPlugin(plugin: ClassPropertyPlugin) {
  currentPlugin = plugin
}

export function getClassPropertyPlugin(): ClassPropertyPlugin {
  if (!currentPlugin) {
    throw new Error("No class property plugin has been set.")
  }
  return currentPlugin
}
