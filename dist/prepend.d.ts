/**
 * Returns a `data` the `value` array prepended. To prepend an element
 * (rather than another array) to an array instead, use {@link prependElement}.
 *
 * @param data
 * @param value
 *
 * @example
 * ```
 * prepend([2, 3, 4], [10, 11]);            // [10, 11, 2, 3, 4]
 * prepend("ostrich", "weasel");            // "weaselostrich"
 * ```
 *
 * @category Array
 * @category String
 */
export declare function prepend<I extends any[] | string>(data: I, value: I): I;
/**
 * @param value
 *
 * @example
 * ```
 * prepend([10, 11])([2, 3, 4]);            // [10, 11, 2, 3, 4]
 * prepend<string>("weasel")("ostrich")     // "weaselostrich"
 * ```
 *
 * @category Array
 * @category String
 */
export declare function prepend<I extends any[] | string>(value: I): (data: I) => I;
