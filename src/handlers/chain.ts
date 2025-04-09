import { ChainableBuilder, ClassyOptions } from "../types"
import { handleObjectConfig } from "./objectConfig"

export function handleChainable(): ChainableBuilder {
  let baseClass = ""
  let conditions: Partial<Record<keyof ClassyOptions["conditions"], boolean>> =
    {}
  let presetName: ClassyOptions["presets"]

  return {
    base(cls: string) {
      baseClass = cls
      return this
    },
    when(key: keyof ClassyOptions["conditions"], val: boolean) {
      // @ts-ignore
      conditions[key] = val
      return this
    },
    usePreset(name) {
      presetName = name
      return this
    },
    build() {
      return handleObjectConfig({
        base: baseClass,
        conditions,
        presets: presetName,
      })
    },
  }
}
