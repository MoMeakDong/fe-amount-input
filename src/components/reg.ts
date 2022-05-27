export const defaultFloatReg = new RegExp(/(^(-)?[0-9](\d+)?(\.\d{0,})?$)/)
export const mReg = /^(-)?(\d+)(\.\d{0,})?m|M|k|K$/
export const moneyReg = /\d{1,3}(?=(\d{3})+(\.\d*)?$)/g
export const pureNumberReg = /^(-)?\d*(\.?\d{0,})/g
