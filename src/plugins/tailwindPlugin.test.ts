import { describe, it, expect } from "vitest"
import { tailwindPlugin } from "./tailwindPlugin"

describe("tailwindPlugin", () => {
  const plugin = tailwindPlugin()

  it("should merge conflicting classes (e.g. text alignment)", () => {
    const result = plugin.merge("text-left", "text-center")
    expect(result).toBe("text-center")
  })

  it("should keep non-conflicting classes", () => {
    const result = plugin.merge("font-bold", "text-center")
    expect(result).toBe("font-bold text-center")
  })

  it("should remove duplicate classes", () => {
    const result = plugin.merge("text-left", "text-left")
    expect(result).toBe("text-left")
  })

  it("should support responsive variants", () => {
    const result = plugin.merge("text-left", "md:text-center", "text-right")
    expect(result).toBe("md:text-center text-right")
  })

  it("should preserve arbitrary values", () => {
    const result = plugin.merge("text-[14px]", "text-[16px]")
    expect(result).toBe("text-[16px]")
  })
})
