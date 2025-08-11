/**
 * Returns true if at least one value of the `data` object passes the `condition`
 * condition, otherwise false.
 *
 * @param data
 * @param condition
 *
 * @example
 * ```
 * someProps({ x: 5, y: 10 }, isGt(7));    // true
 * someProps({ x: 5, y: 10 }, isGt(15));    // false
 * ```
 *
 * @category Object
 */
export declare function someProps<I extends POJO<any>>(data: I, condition: Predicate<ValueType<I>>): boolean;
/**
 * @param condition
 *
 * @example
 * ```
 * someProps(isGt(7))({ x: 5, y: 10 });    // true
 * ```
 *
 * @category Object
 */
export declare function someProps<I extends POJO<any>>(condition: Predicate<ValueType<I>>): (data: I) => boolean;
