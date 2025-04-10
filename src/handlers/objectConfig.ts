import { ClassyOptions } from "../types"
import { buildBaseClass } from "../utils/buildBase"
import { buildConditionClasses } from "../utils/buildConditions"
import { mergeByProperty } from "../utils/mergeByProperty"
import { getGlobalPresets } from "../utils/globalConfig"

export function handleObjectConfig(options: ClassyOptions): string {
  const allPresets = getGlobalPresets()
  const preset = options.presets ? allPresets[options.presets] : undefined
  const baseClass = buildBaseClass(options.base, preset)
  const conditionClasses = buildConditionClasses(
    options.conditions,
    preset?.conditions
  )

  const merged = mergeByProperty([baseClass, ...conditionClasses])
  return merged
}
