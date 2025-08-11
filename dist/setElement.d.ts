/**
 * Returns a copy of the array `data` with the element at `index` set to `value`.
 * A negative `index` will count backward from the end of the array.
 * If `index` is out of bounds or not an integer, returns an unaltered copy of `data`.
 *
 * @param data
 * @param index
 * @param value
 *
 * @example
 * ```
 * setElement([2, 3, 4], 0, 10);        // [10, 3, 4]
 * setElement([2, 3, 4], -1, 10);       // [2, 3, 10]
 * ```
 *
 * @category Array
 */
export declare function setElement<I extends any[]>(data: I, index: number, value: ElementType<I>): I;
/**
 * @param index
 * @param value
 *
 * @example
 * ```
 * setElement(0, 10)([2, 3, 4]);        // [10, 3, 4]
 * ```
 *
 * @category Array
 */
export declare function setElement<I extends any[]>(index: number, value: ElementType<I>): (data: I) => I;
