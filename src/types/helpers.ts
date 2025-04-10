import type { CustomPresetMap } from "."

export type InferClassyPresets<T extends CustomPresetMap> = {
  [K in keyof T]: {
    base?: T[K]["base"]
    conditions?: T[K]["conditions"]
  }
}
