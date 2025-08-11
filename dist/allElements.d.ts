/**
 * Returns true if all elements of the `data` array pass the condition.
 *
 * @param data
 * @param condition
 *
 * @example
 * ```
 * allElements([2, 3, 4], isGt(1));    // true
 * allElements([2, 3, 4], isGt(3));    // false
 * ```
 *
 * @category Array
 */
export declare function allElements<I extends any[]>(data: I, condition: Predicate<ElementType<I>>): boolean;
/**
 * @param condition
 *
 * @example
 * ```
 * allElements(isGt(1))([2, 3, 4]);    // true
 * ```
 *
 * @category Array
 */
export declare function allElements<I extends any[]>(condition: Predicate<ElementType<I>>): (data: I) => boolean;
