/**
 * Indicates if the `data` is not strictly equal to `value`.
 *
 * You will likely need to use a type annotation if the types of the `data`
 * and `value` are different.
 *
 * @param data
 * @param value
 *
 * @example
 * ```
 * notEqual(5, 7);                // true
 * notEqual("a", "b");            // false
 * notEqual<unknown>(5, "5")      // true
 * ```
 *
 * @category Logic
 */
export declare function notEqual<T>(data: T, value: T): boolean;
/**
 * @param value
 *
 * @example
 * ```
 * notEqual(7)(5);         true
 * ```
 *
 * @category Logic
 */
export declare function notEqual<T>(value: T): (data: T) => boolean;
