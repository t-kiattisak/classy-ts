import { getClassPropertyPlugin } from "./pluginConfig"

export function mergeByProperty(classNames: string[]): string {
  const plugin = getClassPropertyPlugin()
  const propMap = new Map<string, string>()
  const unknown = new Set<string>()

  for (const cls of classNames) {
    const props = plugin.resolveProperty(cls)
    if (props.length === 0) {
      unknown.add(cls)
    } else {
      for (const prop of props) {
        propMap.set(prop, cls)
      }
    }
  }

  return [...unknown, ...propMap.values()].join(" ")
}
