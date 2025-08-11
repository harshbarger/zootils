/**
 * Indicates whether the `data` is strictly equal to (`===`) `value`.
 *
 * @param data
 * @param value
 *
 * @example
 * ```
 * equals(5, 5);       // true
 * equals(5, "5");     // false
 * ```
 *
 * @category Logic
 */
export declare function equals<T>(data: T, value: T): boolean;
/**
 * @param value
 *
 * @example
 * ```
 * equals(5)(5);       // true
 * ```
 *
 * @category Logic
 */
export declare function equals<T>(value: T): (data: T) => boolean;
