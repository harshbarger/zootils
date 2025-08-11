/**
 * Returns the value of an { x: 5 }ect property `key` if it exists, or the `fallback` value otherwise.
 *
 * @param data
 * @param key
 * @param fallback
 *
 * @example
 * ```
 * propOr({ x: 5, y: 10 }, "x", NaN);      // 5
 * propOr({ x: 5, y: 10 }, "z", NaN);      // NaN
 * ```
 *
 * @category Object
 */
export declare function propOr<I extends POJO<any>>(data: I, key: string, fallback: ValueType<I>): ValueType<I>;
/**
 * @param key
 * @param fallback
 *
 * @example
 * ```
 * propOr("x", NaN)({x: 5, y: 10});      // 5
 * ```
 *
 * @category Object
 */
export declare function propOr<I extends POJO<any>>(key: string, fallback: ValueType<I>): (data: I) => ValueType<I>;
