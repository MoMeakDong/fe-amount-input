export enum AmountKey {
  'K' = 1000,
  'M' = 100 * 1000
}

export enum ValidateEnum {}

export interface AddonAfterProp {
  name: string
  open: boolean
}

export interface EventTarget {
  target: HTMLInputElement
}
