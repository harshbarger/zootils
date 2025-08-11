/**
 * Returns the index of the first element of `data` that passes `condition`,
 * or returns `NaN` if no eleement passes.
 *
 * @remarks There are two reason that `NaN` is used as the return value when
 * so element is found instead of -1, as is used in JavaSCript's built-in
 * `Array.prototype.finsIndex`. One is that `NaN` is more consistent with the
 * conventions used elsewhere in this library. The other is that the functions
 * in this library routinely recongize an index of -1 as the last element of an array,
 * so surprising behavior could occur if -1 were used to epresent an ostensibly
 * non-existent index.
 *
 * @param data
 * @param condition
 *
 * @example
 * ```
 * findIndex([2, 4, -2, 10], isNegative);          // 2
 * findIndex([2, 4, 12, 10], isNegative);          // NaN
 * ```
 *
 * @category Array
 */
export declare function findIndex<I extends any[]>(data: I, condition: Predicate<ElementType<I>>): number;
/**
 * @param condition
 *
 * @example
 * ```
 * findIndex(isNegative)([2, 4, -2, 10]);          // 2
 * ```
 *
 * @category Array
 */
export declare function findIndex<I extends any[]>(condition: Predicate<ElementType<I>>): (data: I) => number;
