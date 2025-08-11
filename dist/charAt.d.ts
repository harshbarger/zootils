/**
 * Returns the element of `data` at `index`, or an empty string if `index` is out of bounds
 * or otherwise invalid.
 *
 * @param data
 * @param index  counts backward from end of array if negative, must be integer
 *
 * @example
 * ```
 * charAt("ostrich", 2);       // "t"
 * charAt("ostrich", -2);      // "c"
 * charAt("ostrich", 10);      // ""
 * ```
 *
 * @category String
 */
export declare function charAt(data: string, index: number): string;
/**
 * @param index
 *
 * @example
 * ```
 * charAt(2)("ostrich");       // "t"
 * ```
 * @category String
 */
export declare function charAt(index: number): (data: string) => string;
