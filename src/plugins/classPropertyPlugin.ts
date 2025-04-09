import { getCssPropertiesFromClass } from "./lightningcssPlugin"

export interface ClassPropertyPlugin {
  resolveProperty: (className: string) => string[]
}

export const classPropertyPlugin: ClassPropertyPlugin = {
  resolveProperty(className: string): string[] {
    return getCssPropertiesFromClass(className)
  },
}
