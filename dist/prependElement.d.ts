/**
 * Prepends the element to the end of the `data` array and returns a copy.
 * For strings, or to prepend an array to another array, use {@link prepend}.
 *
 * @param data
 * @param value
 *
 * @example
 * ```
 * prependElement([2, 3, 4], 10);            // [10, 2, 3, 4]
 * ```
 *
 * @category Array
 */
export declare function prependElement<I extends any[]>(data: I, value: ElementType<I>): I;
/**
 * @param value
 *
 * @example
 * ```
 * prependElement(10)([2, 3, 4]);            // [10, 2, 3, 4]
 * ```
 *
 * @category Array
 */
export declare function prependElement<I extends any[]>(value: ElementType<I>): (data: I) => I;
