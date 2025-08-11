/**
 * Maps a value `data` from the range [`x1`, `x2`] to the range [`y1`, `y2`].
 *
 * @param data
 * @param x1
 * @param x2
 * @param y1
 * @param y2
 *
 * @example
 * ```
 * linearMap(11, 10, 20, 100, 200);    // 110
 * ```
 *
 * @category Math
 */
export declare function linearMap(data: number, x1: number, x2: number, y1: number, y2: number): number;
/**
 * @param x1
 * @param x2
 * @param y1
 * @param y2
 *
 * @example
 * ```
 * linearMap(10, 20, 200, 100)(9);     // 210
 * ```
 *
 * @category Math
 */
export declare function linearMap(x1: number, x2: number, y1: number, y2: number): (data: number) => number;
