/**
 * Returns true if no elements of the `data` array pass the `condition`.
 *
 * @param data
 * @param condition
 *
 * @example
 * ```
 * noElements([2, 3, 4], isGt(5));    // true
 * noElements([2, 3, 4], isGt(3));    // false
 * ```
 *
 * @category Array
 */
export declare function noElements<I extends any[]>(data: I, condition: Predicate<ElementType<I>>): boolean;
/**
 * @param condition
 *
 * @example
 * ```
 * noElements(isGt(5))([2, 3, 4]);    // true
 * ```
 *
 * @category Array
 */
export declare function noElements<I extends any[]>(condition: Predicate<ElementType<I>>): (data: I) => boolean;
