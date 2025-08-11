/**
 * Applies a transform function to each property value in the object.
 *
 * @param data
 * @param transform
 *
 * @example
 * ```
 * mapProps({ a: 1, b: 2, c: 3 }, x => x * 2);   // { a: 2, b: 4, c: 6 }
 * ```
 *
 * @category Object
 */
export declare function mapProps<I extends POJO<any>, O extends POJO<any>>(data: I, transform: (x: ValueType<I>) => ValueType<O>): Record<string, O>;
/**
 * @param transform
 *
 * @example
 * ```
 * mapProps(x => x * 2)({ a: 1, b: 2, c: 3 });   // { a: 2, b: 4, c: 6 }
 * ```
 *
 * @category Object
 */
export declare function mapProps<I extends POJO<any>, O = POJO<any>>(transform: (x: I) => O): (data: I) => O;
