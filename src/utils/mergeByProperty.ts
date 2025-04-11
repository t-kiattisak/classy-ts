import { getGlobalPlugins } from "./globalConfig"

export function mergeByProperty(classNames: string[]): string {
  const plugins = getGlobalPlugins()
  const propMap = new Map<string, string>()
  const unknown: string[] = []

  for (const cls of classNames) {
    let resolvedProps: string[] = []

    for (const plugin of plugins) {
      if (
        "resolveProperty" in plugin &&
        typeof plugin.resolveProperty === "function"
      ) {
        resolvedProps = plugin.resolveProperty(cls)
        if (resolvedProps.length > 0) break
      }
    }

    if (resolvedProps.length === 0) {
      unknown.push(cls)
    } else {
      for (const prop of resolvedProps) {
        propMap.set(prop, cls)
      }
    }
  }

  return [...unknown, ...propMap.values()].join(" ")
}
