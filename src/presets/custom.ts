import { createPresets } from "./factory"

export const customPresets = createPresets({
  modal: {
    base: "bg-white rounded shadow-lg p-6",
    conditions: {
      isOpen: "block",
      isClosing: "opacity-50",
    },
  },
})
