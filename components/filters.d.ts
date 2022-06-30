import { EventTarget } from './type';
export declare const getEventValue: (e: EventTarget) => string;
export declare const removeNaN: (val: number) => number | null;
/**
 * 格式化金额过滤器
 * 默认去尾 保存2位小数
 * 123456.78  =>  123,456.78
 * @param money
 * @param precision
 * @param mode
 * @returns {*}
 */
export declare const moneyFormat: (moneyStr: string, precision: number, mode: number) => string;
/**
 * 四舍五入处理规则 - 详细查看 RoundModeRule.md
 * @param mode
 * @param precision
 */
export declare const roundingMode: (num: number, precision: number, mode: number) => string;
