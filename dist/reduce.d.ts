/**
 * A data-frst counterpart to `Array.prototype.reduce`, but with more permissive typing than
 * the TS library uses out of the box, allowing the result to have a different type from
 * the `data` elements themselves.
 *
 * @remarks
 * The generic type implementation may be needed if `accumulator` has overloads.
 *
 * @param data
 * @param accumulator
 * @param initial
 *
 * @example
 * ```
 * reduce<number>([3, 5, 6], add, 0);                 // 14
 * reduce(
 *  ["cat", "ferret", "ostrich"],
 *  (acc: number, el: string) => el.length + acc,
 *  0
 * );                                                 // 16
 * ```
 *
 * @category Array
 */
export declare function reduce<I extends any[], O = ElementType<I>>(data: I, accumulator: Accumulator<I, O>, initial: O): O;
/**
 * @param accumulator
 * @param initial
 *
 * @example
 * ```
 * reduce(add, 0)([3, 5, 6]);                         // 14
 * ```
 *
 * @category Array
 */
export declare function reduce<I extends any[], O = ElementType<I>>(accumulator: Accumulator<I, O>, initial: O): (data: I) => O;
