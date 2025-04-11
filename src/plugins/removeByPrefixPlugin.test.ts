import { describe, it, expect } from "vitest"
import { removeByPrefixPlugin } from "./removeByPrefixPlugin"

describe("removeByPrefixPlugin", () => {
  const plugin = removeByPrefixPlugin(["text", "fw", "m", "p"])

  it("should return correct prefix when matched", () => {
    expect(plugin.resolveProperty("text-left")).toEqual(["text"])
    expect(plugin.resolveProperty("fw-bold")).toEqual(["fw"])
    expect(plugin.resolveProperty("m-3")).toEqual(["m"])
    expect(plugin.resolveProperty("p-2")).toEqual(["p"])
  })

  it("should return empty array when no prefix matches", () => {
    expect(plugin.resolveProperty("bg-red")).toEqual([])
    expect(plugin.resolveProperty("custom-class")).toEqual([])
  })

  it("should not match if prefix is not followed by dash", () => {
    expect(plugin.resolveProperty("textleft")).toEqual([])
    expect(plugin.resolveProperty("fwbold")).toEqual([])
  })

  it("should handle multiple prefixes and prioritize first match", () => {
    const multi = removeByPrefixPlugin(["btn", "text", "fw"])
    expect(multi.resolveProperty("text-danger")).toEqual(["text"])
    expect(multi.resolveProperty("btn-primary")).toEqual(["btn"])
  })
})
