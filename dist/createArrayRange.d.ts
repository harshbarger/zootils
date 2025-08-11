/**
 * Ways to specify spacing in {@link createArrayRange}
 */
type SpacingOption = {
    intervals: number;
} | {
    points: number;
} | {
    size: number;
};
/**
 * Creates an array of equally spaced numbers from `start` to `end`. You may control
 * the spacing or number of points by setting any of the following:
 * - `n.intervals` e.g., [1, 2, 3] would have two intervals--1 to 2 and 2 to 3 (minimum 1).
 * - `n.points` to set the total number of points (minimum 2)
 * - `n.size` to set the difference between successive points. If `end - start` does
 * not divide evenly by `n.space`, then `n.space` will automatically be adjusted to
 * allow even spacing.
 *
 * If the value of `n` is not valid, then an empty array will be returned.
 *
 * @param start
 * @param end
 * @param spacing
 *
 * @example
 * createArrayRange(2, 22, { points: 5 });       // [2, 7, 12, 17, 22]
 * createArrayRange(2, 22, { intervals: 5 });    // [2, 6, 10, 14, 18, 22]
 * createArrayRange(2, 22, { space: 4 });        // [2, 6, 10, 14, 18, 22]
 * createArrayRange(2, 22, { space: 4.1 });      // [2, 6, 10, 14, 18, 22]
 * ```
 *
 * @category Array
 */
export declare function createArrayRange(start: number, end: number, spacing: SpacingOption): number[];
export {};
