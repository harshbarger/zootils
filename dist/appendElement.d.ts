/**
 * Appends the element to the end of the `data` array and returns a copy.
 * For strings, or to append an array to another array, use {@link append}.
 *
 * @param data
 * @param value
 *
 * @example
 * ```
 * appendElement([2, 3, 4], 10);            // [2, 3, 4, 10]
 * ```
 *
 * @category Array
 */
export declare function appendElement<I extends any[]>(data: I, value: ElementType<I>): I;
/**
 * @param value
 *
 * @example
 * ```
 * appendElement(10)([2, 3, 4]);            // [2, 3, 4, 10]
 * ```
 *
 * @category Array
 */
export declare function appendElement<I extends any[]>(value: ElementType<I>): (data: I) => I;
