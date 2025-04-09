import { ClassyOptions, ConditionClassMap } from "../types"

export function buildConditionClasses(
  userConditions: ClassyOptions["conditions"] = {},
  conditionMap: ConditionClassMap = {}
): string[] {
  return Object.entries(userConditions)
    .filter(([, value]) => value)
    .map(([key]) => conditionMap[key])
    .filter(Boolean)
}
