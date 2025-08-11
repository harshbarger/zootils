/**
 * A data-frst counterpart to `Array.prototype.reduceRight`, but with more permissive typing than
 * the TS library uses out of the box, allowing the result to have a different type from
 * the `data` elements themselves.
 *
 * @param data
 * @param accumulator
 * @param initial
 *
 * @example
 * ```
 * reduceRight(
 *  [3, 5, 6],
 *  (acc: number[], el: number) => acc = [...acc, el + last(acc)],
 *  [0]
 * );                  // [0, 6, 11, 14]
 * ```
 *
 * @category Array
 */
export declare function reduceRight<I extends any[], O = ElementType<I>>(data: I, accumulator: Accumulator<I, O>, initial: O): O;
/**
 * @param accumulator
 * @param initial
 *
 * @example
 * ```
 * reduceRight(
 *  (acc: number[], el: number) => [...acc, el + last(acc)!],
 *  [0]
 * )([3, 5, 6]);                  // [0, 6, 11, 14]
 * ```
 *
 * @category Array
 */
export declare function reduceRight<I extends any[], O = ElementType<I>>(accumulator: Accumulator<I, O>, initial: O): (data: I) => O;
