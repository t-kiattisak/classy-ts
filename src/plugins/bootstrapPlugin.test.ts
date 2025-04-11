import { describe, it, expect, beforeEach, vi } from "vitest"
import { bootstrapPlugin } from "./bootstrapPlugin"
import * as pluginConfig from "../utils/pluginConfig"

describe("bootstrapPlugin", () => {
  beforeEach(() => {
    const mockBootstrapPlugin = {
      resolveProperty: (className: string): string[] => {
        const map: Record<string, string[]> = {
          "fw-bold": ["font-weight"],
          "fw-normal": ["font-weight"],
          "text-start": ["text-align"],
          "text-end": ["text-align"],
        }
        return map[className] || []
      },
    }

    vi.spyOn(pluginConfig, "getClassPropertyPlugin").mockReturnValue(
      mockBootstrapPlugin
    )
  })

  const plugin = bootstrapPlugin()

  it("should merge font-weight classes", () => {
    const result = plugin.merge("fw-bold", "fw-normal")
    expect(result).toBe("fw-normal")
  })

  it("should merge text-align classes", () => {
    const result = plugin.merge("text-start", "text-end")
    expect(result).toBe("text-end")
  })

  it("should keep non-conflicting classes", () => {
    const result = plugin.merge("fw-bold", "text-end")
    expect(result).toBe("fw-bold text-end")
  })

  it("should preserve unknown classes", () => {
    const result = plugin.merge("custom-class", "fw-bold")
    expect(result).toBe("custom-class fw-bold")
  })

  it("should return empty string for empty input", () => {
    expect(plugin.merge()).toBe("")
  })
})
