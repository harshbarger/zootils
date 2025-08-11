/**
 * Returns true if one or more elements of the `data` array pass the condition. Returns false for an empty array.
 *
 * @param data
 * @param condition
 *
 * @example
 * ```
 * someElements([2, 3, 4], isGt(3));    // true
 * someElements([2, 3, 4], isGt(5));    // false
 * ```
 *
 * @category Array
 */
export declare function someElements<I extends any[]>(data: I, condition: Predicate<ElementType<I>>): boolean;
/**
 * @param condition
 *
 * @example
 * ```
 * someElements(isGt(3))([2, 3, 4]);    // true
 * ```
 *
 * @category Array
 */
export declare function someElements<I extends any[]>(condition: Predicate<ElementType<I>>): (data: I) => boolean;
