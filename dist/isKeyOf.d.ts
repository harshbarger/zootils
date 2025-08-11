/**
 * Tells whether the plain object `obj` has its own key named `data`.
 *
 * @param data
 * @param obj
 *
 * @example
 * ```
 * isKeyOf("a", { a: "weasel" });      // true
 * isKeyOf("a", { an: "ostrich" });    // false
 * ```
 *
 * @category Object
 */
export declare function isKeyOf(data: string, obj: POJO<any>): boolean;
/**
 * @param obj
 *
 * @example
 * ```
 * isKeyOf({ a: "weasel" })("a");      // true
 * ```
 *
 * @category Object
 */
export declare function isKeyOf(obj: POJO<any>): (data: string) => boolean;
