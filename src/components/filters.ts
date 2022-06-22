import Decimal from 'decimal.js'
import { moneyReg } from './reg'
import { EventTarget } from './type'

export const getEventValue = (e: EventTarget): string => {
  return e.target.value
}

export const removeNaN = (val: number) => {
  return Object.is(val, NaN) ? null : val
}

const tempCount = (precision: number): number => {
  return Math.pow(10, precision)
}

/**
 * 格式化金额过滤器
 * 默认去尾 保存2位小数
 * 123456.78  =>  123,456.78
 * @param money
 * @param precision
 * @param mode
 * @returns {*}
 */
export const moneyFormat = (moneyStr: string, precision: number, mode: number): string => {
  const num = parseFloat(moneyStr)
  if (Object.is(num, NaN)) return ''
  if (precision < 0) {
    const temp = tempCount(Math.abs(precision))
    const result = Number(roundingMode(num / temp, 0, mode)) * temp
    return (Object.is(result, NaN) ? '' : result + '').replace(moneyReg, '$&,')
  }
  return (roundingMode(num, precision, mode) + '').replace(moneyReg, '$&,')
}

/**
 * 四舍五入处理规则 - 详细查看 RoundModeRule.md
 * @param mode
 * @param precision
 */
export const roundingMode = (num: number, precision: number, mode: number): string => {
  const temp = new Decimal(num)
  let result
  if (mode === 0) {
    result = temp.toFixed(precision, Decimal.ROUND_UP)
  } else if (mode === 1) {
    result = temp.toFixed(precision, Decimal.ROUND_DOWN)
  } else if (mode === 2) {
    result = temp.toFixed(precision, Decimal.ROUND_CEIL)
  } else if (mode === 3) {
    result = temp.toFixed(precision, Decimal.ROUND_FLOOR)
  } else if (mode === 4) {
    result = temp.toFixed(precision, Decimal.ROUND_HALF_UP)
  } else if (mode === 5) {
    result = temp.toFixed(precision, Decimal.ROUND_HALF_DOWN)
  } else if (mode === 6) {
    result = temp.toFixed(precision, Decimal.ROUND_HALF_EVEN)
  }
  return result || ''
}
