/**
 * Indicates whether the length of the `data` string or array passes the `condition`.
 *
 * @param data
 * @param condition
 *
 * @example
 * ```
 * lengthPasses([2, 3, 4], isLt(5));     // true
 * lengthPasses("ostrich", isLt(5));     // false
 * ```
 *
 * @category Array
 * @category String
 */
export declare function lengthPasses(data: any[] | string, condition: Predicate<number>): boolean;
/**
 * @param condition
 *
 * @example
 * ```
 * lengthPasses(isLt(5))([2, 3, 4]);     // true
 * ```
 *
 * @category Array
 * @category String
 */
export declare function lengthPasses<I extends any[] | string>(condition: Predicate<number>): (data: any[] | string) => boolean;
