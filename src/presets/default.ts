import { createPresets } from "./factory"

export const defaultPresets = createPresets({
  button: {
    base: "rounded px-4 py-2",
    conditions: {
      isPrimary: "bg-blue-500 text-white",
      isDisabled: "opacity-50 opacity-50 cursor-not-allowed",
    },
  },

  badge: {
    base: "inline-block px-2 py-1 text-xs font-semibold rounded",
    conditions: {
      isSuccess: "bg-green-100 text-green-800",
      isError: "bg-red-100 text-red-800",
    },
  },

  card: {
    base: "shadow-sm border rounded p-4",
    conditions: {
      hasBorder: "border-gray-300",
      isHighlighted: "bg-yellow-100",
      isSelected: "ring-2 ring-blue-400",
    },
  },

  alert: {
    base: "p-4 text-sm rounded",
    conditions: {
      isError: "bg-red-100 text-red-800",
      isWarning: "bg-yellow-100 text-yellow-800",
      isInfo: "bg-blue-100 text-blue-800",
    },
  },

  input: {
    base: "block w-full px-3 py-2 border rounded",
    conditions: {
      isFocused: "ring-2 ring-blue-300",
      hasError: "border-red-500",
      isDisabled: "bg-gray-100 cursor-not-allowed",
    },
  },
})
