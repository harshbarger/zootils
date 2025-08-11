/**
 * Returns an array of arrays of length `size` with consecutive elements
 * from the original array. Returns an empty array if `size` is shorter
 * than the array, or is not a positive integer.
 *
 * @param data
 * @param size
 *
 * @example
 * ```
 * aperture([2, 4, 6, 8, 10], 3);     // [[2, 4, 6], [4, 6, 8], [6, 8, 10]]
 * ```
 *
 * @category Array
 */
export declare function aperture<I extends any[]>(data: I, size: number): I[];
/**
 * @param size
 *
 * @example
 * ```
 * aperture(3)([2, 4, 6, 8, 10]);     // [[2, 4, 6], [4, 6, 8], [6, 8, 10]]
 * ```
 *
 * @category Array
 */
export declare function aperture<I extends any[]>(size: number): (data: I) => I[];
