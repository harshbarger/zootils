/**
 * Returns true if all values of the `data` object pass the `condition` condition,
 * otherwise false.
 *
 * @param data
 * @param condition
 *
 * @example
 * ```
 * allProps({ x: 5, y: 10 }, isGt(0));    // true
 * allProps({ x: 5, y: 10 }, isGt(7));    // false
 * ```
 *
 * @category Object
 */
export declare function allProps<I extends POJO<any>>(data: I, condition: Predicate<ValueType<I>>): boolean;
/**
 * @param condition
 *
 * @example
 * ```
 * allProps(isGt(0))({ x: 5, y: 10 });    // true
 * ```
 *
 * @category Object
 */
export declare function allProps<I extends POJO<any>>(condition: Predicate<ValueType<I>>): (data: I) => boolean;
