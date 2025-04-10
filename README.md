# classy-ts 🧩

> A type-safe utility to build conditional class names with plugin-based merging logic (Tailwind, Bootstrap, etc.)

---

## ✨ Features

- 🧠 Type-safe conditional class name generation
- 🎛 Multiple usage styles: config object, tuple array, chainable builder
- 🌍 Global presets with full IntelliSense
- 🔌 Plugin-based merging (Tailwind, Bootstrap, or custom)

---

## 📦 Installation

```bash
npm install classy-ts
```

---

## ⚙️ Setup

Define global presets and plugin at app init:

```ts
// classy.config.ts
import { defineClassy, tailwindPlugin } from "classy-ts"

export const config = defineClassy({
  presets: {
    xc: {
      base: "text-sm",
      conditions: {
        disable: "opacity-50",
        active: "text-blue-500",
      },
    },
  },
  plugin: tailwindPlugin(),
})

type MyPresets = typeof config.presets

declare module "classy-ts" {
  export interface ClassyGlobalPresets extends MyPresets {}
}
```

---

## 🧪 Usage

### ✅ Config Object Style

```ts
classy({
  presets: "xc",
  conditions: {
    disable: true,
    active: false,
  },
})
// → "text-sm opacity-50"
```

---

### ✅ Tuple Array Style

```ts
classy([
  ["text-red-500", true],
  ["bg-white", false],
])
// → "text-red-500"
```

---

### ✅ Chainable Builder Style

```ts
classy().usePreset("xc").when("disable", true).when("active", false).build()
// → "text-sm opacity-50"
```

---

## 🔌 Plugin System

You can choose or create your own merging logic using plugins:

```ts
import { defineClassy, tailwindPlugin } from "classy-ts"

defineClassy({
  presets: { ... },
  plugin: tailwindPlugin(),
})
```

Custom plugins must follow the `ClassyPlugin` interface:

```ts
export function myPlugin(): ClassyPlugin {
  return {
    name: "my-plugin",
    merge(classes) {
      return classes.join(" ")
    },
  }
}
```

---

## ✅ License

MIT
