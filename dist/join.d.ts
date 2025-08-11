/**
 * Concatenates the strings in the `data` array, inserting the
 * `separator` string between each.
 *
 * @param data
 * @param separator
 *
 * @example
 * ```
 * join(['a', 'b', 'c'], '_');     // 'a_b_c'
 * ```
 *
 * @category Array
 */
export declare function join(data: string[], separator: string): string;
/**
 * @param separator
 *
 * @example
 * ```
 * join('')(['a', 'b', 'c']);     // 'abc'
 * ```
 *
 * @category Array
 */
export declare function join(separator: string): (data: string[]) => string;
