/**
 * Returns true if an object property `key` exists and passes the `condition`, false otherwise.
 * @param data
 * @param key
 * @param condition
 *
 * @example
 * ```
 * propPasses({ x: 5 }, "x", x => x > 0);    // true
 * propPasses({ x: 5 }, "x", x => x < 0);    // false
 * ```
 *
 * @category Object
 */
export declare function propPasses<I extends POJO<any>>(data: I, key: string, condition: Predicate<ValueType<I>>): boolean;
/**
 * @param key
 * @param condition
 *
 * @example
 * ```
 * propPasses("x", x => x > 0)({ x: 5 });    // true
 * ```
 *
 * @category Object
 */
export declare function propPasses<I extends POJO<any>>(key: string, condition: Predicate<ValueType<I>>): (data: I) => boolean;
