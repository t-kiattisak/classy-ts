import { transform } from "lightningcss"

export function getCssPropertiesFromClass(className: string) {
  const cssClass = `.temp-class { @apply ${className}; }`
  try {
    const result = transform({
      filename: "temp.css",
      code: Buffer.from(cssClass),
      minify: false,
      sourceMap: false,
    })

    const css = result.code.toString()

    const matched = css.match(/\{([^}]+)\}/)
    if (!matched) return []

    const properties = matched[1]
      .split(";")
      .map((line) => line.split(":"))
      .filter(([prop]) => !!prop)
      .map(([prop]) => prop.trim())

    return properties
  } catch (err) {
    console.warn(`[lightningcss] failed for class: ${className}`)
    return []
  }
}
