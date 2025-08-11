/**
 * Returns true if one or more elements of the `data` array fails to pass the condition.
 *
 * @param data
 * @param condition
 *
 * @example
 * ```
 * notAllElements([2, 3, 4], isGt(3));    // true
 * notAllElements([2, 3, 4], isGt(1));    // false
 * ```
 *
 * @category Array
 */
export declare function notAllElements<I extends any[]>(data: I, condition: Predicate<ElementType<I>>): boolean;
/**
 * @param condition
 *
 * @example
 * ```
 * notAllElements(isGt(1))([2, 3, 4]);    // true
 * ```
 *
 * @category Array
 */
export declare function notAllElements<I extends any[]>(condition: Predicate<ElementType<I>>): (data: I) => boolean;
