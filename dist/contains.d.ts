/**
 * Indicates whether or not the `data` array contains the element `value`,
 * or the `data` string contains the substring `value`.
 *
 * @param data
 * @param value
 *
 * @example
 * ```
 * contains([2, 3, 4], 4);           // true
 * contains([2, 3, 4], 10);          // false
 * contains("ostrich", "rich");      // true
 * contains("ostrich", "cat");       // false
 * ```
 *
 * @category Array
 * @category String
 */
export declare function contains(data: any[] | string, value: any): boolean;
/**
 * @param value
 *
 * @example
 * ```
 * contains(4)([2, 3, 4]);           // true
 * ```
 *
 * @category Array
 * @category String
 */
export declare function contains(value: any): (data: any[] | string) => boolean;
