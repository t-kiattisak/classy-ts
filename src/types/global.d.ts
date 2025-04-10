export interface ClassyGlobalPresets {
  button: {
    base: string
    conditions: {
      isPrimary: string
      isDisabled: string
    }
  }
  badge: {
    base: string
    conditions: {
      isError: string
      isSuccess: string
    }
  }
}

declare module "classy-ts" {
  export interface ClassyGlobalPresets {}
}
