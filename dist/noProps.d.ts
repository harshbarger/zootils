/**
 * Returns true if no value of the `data` object passes the `condition`
 * condition, otherwise false.
 *
 * @param data
 * @param condition
 *
 * @example
 * ```
 * noProps({ x: 5, y: 10 }, x => x > 15);    // true
 * noProps({ x: 5, y: 10 }, isGt(7));    // false
 * ```
 *
 * @category Object
 */
export declare function noProps<I extends POJO<any>>(data: I, condition: Predicate<ValueType<I>>): boolean;
/**
 * @param condition
 *
 * @example
 * ```
 * noProps(x => x > 15)({ x: 5, y: 10 });    // true
 * ```
 *
 * @category Object
 */
export declare function noProps<I extends POJO<any>>(condition: Predicate<ValueType<I>>): (data: I) => boolean;
