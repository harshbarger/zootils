/**
 * Tells whether `data` and `value` are strictly equal after the `transform`
 * function is applied to each.
 *
 * @param data
 * @param value
 * @param transform
 *
 * @example
 * ```
 * equalsWith(4, -4, Math.abs);      // true
 * ```
 *
 * @category Logic
 */
export declare function equalsWith<I>(data: I, value: I, transform: (x: I) => any): boolean;
/**
 * @remarks The generic type specification is needed so TS doesn't infer the
 * type as a specific constant.
 *
 * @param value
 * @param transform
 *
 * @example
 * ```
 * equalsWith<number>(-4, Math.abs)(4);     // true
 * ```
 *
 * @category Logic
 */
export declare function equalsWith<I>(value: I, transform: (x: I) => any): (data: I) => boolean;
