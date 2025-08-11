/**
 * Returns a `data` the `value` array appended. To append an element
 * (rather than another array) to an array instead, use {@link appendElement}.
 *
 * @param data
 * @param value
 *
 * @example
 * ```
 * append([2, 3, 4], [10, 11]);            // [2, 3, 4, 10, 11]
 * append("ostrich", "weasel");            // "ostrichweasel"
 * ```
 *
 * @category Array
 * @category String
 */
export declare function append<I extends any[] | string>(data: I, value: I): I;
/**
 * @param value
 *
 * @example
 * ```
 * append([10, 11])([2, 3, 4]);            // [2, 3, 4, 10, 11]
 * append<string>("weasel")("ostrich")     // "ostrichweasel"
 * ```
 *
 * @category Array
 * @category String
 */
export declare function append<I extends any[] | string>(value: I): (data: I) => I;
