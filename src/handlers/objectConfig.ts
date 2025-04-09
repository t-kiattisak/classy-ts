import { ClassyOptions } from "../types"
import { buildBaseClass } from "../utils/buildBase"
import { buildConditionClasses } from "../utils/buildConditions"
import { allPresets } from "../presets/merge"
import { mergeByProperty } from "../utils/mergeByProperty"
import { classPropertyPlugin } from "../plugins/classPropertyPlugin"

export function handleObjectConfig(options: ClassyOptions): string {
  const preset = options.presets ? allPresets[options.presets] : undefined
  const baseClass = buildBaseClass(options.base, preset)
  const conditionClasses = buildConditionClasses(
    options.conditions,
    preset?.conditions
  )

  const merged = mergeByProperty(
    [baseClass, ...conditionClasses],
    classPropertyPlugin
  )
  return merged
}
