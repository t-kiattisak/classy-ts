export interface ClassyPlugin {
  name: string
  merge(...classes: string[]): string
}

export interface ClassPropertyPlugin {
  resolveProperty: (className: string) => string[]
}
