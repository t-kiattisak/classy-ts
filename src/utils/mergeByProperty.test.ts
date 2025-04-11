import { describe, it, expect, vi, beforeEach } from "vitest"
import { mergeByProperty } from "./mergeByProperty"
import * as pluginModule from "./pluginConfig"

describe("mergeByProperty", () => {
  beforeEach(() => {
    const mockPlugin = {
      resolveProperty: (cls: string): string[] => {
        const map: Record<string, string[]> = {
          "text-left": ["text-align"],
          "text-center": ["text-align"],
          "font-bold": ["font-weight"],
          "font-normal": ["font-weight"],
          underline: ["text-decoration"],
        }
        return map[cls] ?? []
      },
    }
    vi.spyOn(pluginModule, "getClassPropertyPlugin").mockReturnValue(mockPlugin)
  })

  it("should keep last class with same property", () => {
    const result = mergeByProperty(["text-left", "text-center"])
    expect(result).toBe("text-center")
  })

  it("should preserve unknown classes", () => {
    const result = mergeByProperty(["foo", "bar", "text-left"])
    expect(result).toBe("foo bar text-left")
  })

  it("should keep non-conflicting classes", () => {
    const result = mergeByProperty(["font-bold", "underline"])
    expect(result).toBe("font-bold underline")
  })

  it("should override classes per property", () => {
    const result = mergeByProperty([
      "text-left",
      "text-center",
      "font-bold",
      "font-normal",
    ])
    expect(result).toBe("text-center font-normal")
  })

  it("should return empty string for empty input", () => {
    expect(mergeByProperty([])).toBe("")
  })
})
