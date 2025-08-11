/**
 * Similar in concept `Array.prototype.map`, but with
 * the distinction that it does not automatically call
 * `transform` with a second argument for the index.
 * This prevents unexpected behavior when the `transform`
 * function has a second optional parameter that respresents
 * something other than an index (e.g., `parseInt`). Use
 * {@link mapWithIndex} instead if you need the index.
 *
 * @param data
 * @param transform
 *
 * @example
 * ```
 * map([2, 3, 4], x => x * 2);        [4, 6, 8];
 * ```
 *
 * @category Array
 */
export declare function map<I extends any[], O extends any[] = I>(data: I, transform: (x: ElementType<I>) => O[number]): O;
/**
 * @param transform
 *
 * @example
 * ```
 * map(x => x * 2)([4, 6, 8]);    [4, 6, 8];
 * ```
 *
 * @category Array
 */
export declare function map<I extends any[], O extends any[] = I>(transform: (x: ElementType<I>) => O[number]): (data: I) => O;
