import { ClassyOptions, ClassyTuple, ChainableBuilder } from "./types"
import { handleObjectConfig } from "./handlers/objectConfig"
import { handleTuple } from "./handlers/tuple"
import { handleChainable } from "./handlers/chain"
import { PresetName } from "./types/globalPresets"

export function classy(): ChainableBuilder
export function classy<Name extends PresetName>(
  options: ClassyOptions<Name>
): string
export function classy(...tuples: ClassyTuple[]): string

export function classy(
  ...args: [] | [ClassyOptions<any>] | ClassyTuple[]
): string | ChainableBuilder {
  if (args.length === 0) {
    return handleChainable()
  }

  if (
    args.length === 1 &&
    typeof args[0] === "object" &&
    !Array.isArray(args[0])
  ) {
    return handleObjectConfig(args[0])
  }

  if (Array.isArray(args[0])) {
    return handleTuple(...(args as ClassyTuple[]))
  }

  throw new Error("Invalid input for classy()")
}
