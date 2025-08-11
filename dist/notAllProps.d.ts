/**
 * Returns true if at least one value of the `data` object fails the `condition`
 * condition, otherwise false.
 *
 * @param data
 * @param condition
 *
 * @example
 * ```
 * notAllProps({ x: 5, y: 10 }, isGt(7));    // true
 * notAllProps({ x: 5, y: 10 }, isGt(0));    // false
 * ```
 *
 * @category Object
 */
export declare function notAllProps<I extends POJO<any>>(data: I, condition: Predicate<ValueType<I>>): boolean;
/**
 * @param condition
 *
 * @example
 * ```
 * notAllProps(isGt(7))({ x: 5, y: 10 });    // true
 * ```
 *
 * @category Object
 */
export declare function notAllProps<I extends POJO<any>>(condition: Predicate<ValueType<I>>): (data: I) => boolean;
