/**
 * Returns true if `data` is equal to one of the `values`, false otherwise.
 *
 * @param data
 * @param values
 *
 * @example
 * ```
 * equalsOneOf(1, [1, 2, 3]);    // true
 * equalsOneOf(4, [1, 2, 3]);    // false
 * ```
 *
 * @category Logic
 */
export declare function equalsOneOf(data: any, values: any[]): boolean;
/**
 * @example
 * ```
 * equalsOneOf([1, 2, 3])(1);    // true
 * ```
 *
 * @category Logic
 */
export declare function equalsOneOf(values: any[]): (data: any) => boolean;
