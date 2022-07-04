export enum AmountKey {
  'K' = 1000,
  'M' = 1000 * 1000
}

export enum ValidateEnum {}

export interface AddonAfterProp {
  name: string
  open: boolean
}

export interface EventTarget {
  target: HTMLInputElement
}

export interface CurrencyRule {
  currency: string
  unit: number
  roundingMode: number
}
