/**
 * Returns a new object consisting of only the portion of the `data` object with the specified `keys`.
 *
 * @param data
 * @param keys
 *
 * @example
 * ```ts
 * pick({ a: 1, b: 2, c: 3 }, ["a", "b"]);   // { a: 1, b: 2 }
 * ```
 *
 * @category Object
 */
export declare function pick<I extends POJO<any>, O = Partial<I>>(data: I, keys: (keyof I)[]): O;
/**
 * Returns a new object consisting of only the portion of the `data` object with the specified `keys`.
 *
 * @param keys
 *
 * @example
 * ```ts
 * pick(["a", "b"])({ a: 1, b: 2, c: 3 });   // { a: 1, b: 2 }
 * ```
 *
 * @category Object
 */
export declare function pick<I extends POJO<any>, O = Partial<I>>(keys: string[]): (data: I) => O;
