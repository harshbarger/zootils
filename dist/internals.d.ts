/**
 * If index is invalid, returns NaN.
 * If index is negative, return positive equivalent index.
 * Otherwise return index.
 *
 * @internal
 */
export declare function getAdjustedIndex(value: string | any[], i: number, allowed?: "inBoundsOrLarger" | "inBoundsOrOnePast" | "onlyInBounds"): number;
/**
 * Inspired by its namesake in Remeda, lets us use the same function in data-first form
 * or as unary function for piepline.
 *
 * @example
 * ```
 * function _add(x: number, y: number): number {
 *   return x + y;
 * }
 *
 * function add(x: number, y: number): number;
 * function add(y: number): (x: number) => number;
 * function add(...args: any[]){
 *   return purry(_add, 2, ...args)
 * }
 *
 * add(3, 6);    // 9
 * add(3)(6);    // 9
 * ```
 *
 * @param fn
 * @param args
 *
 * @internal
 */
export declare function purry(fn: (...args: any) => any, ...args: ReadonlyArray<any>): any;
/**
 * @param value
 * @param transform
 *
 * @example
 * ```
 * doTransform(5, x => x * 2);   // 10
 * doTransform(5, 3);            // 3
 * ```
 *
 * @internal
 */
export declare function doTransform<I, O>(value: I, transform: FnOrConst<I, O>): O;
/**
 * Adds the global flag to a regular expression if it isn't
 * there already. (Returns a copy if the flag must be added.)
 *
 * @param regex
 *
 * @internal
 */
export declare function ensureGlobalFlag(regex: RegExp): RegExp;
/**
 * Removes the gloabl flag from a regular expression if there is
 * one. (Returns a copy if the flag must be removed.)
 *
 * @param regex
 *
 * @internal
 */
export declare function ensureNoGlobalFlag(regex: RegExp): RegExp;
/**
 * Returns an empty string if `value` is string, or empty array if `value` is array.
 * @param value
 * @returns
 *
 * @internal
 */
export declare function empty<I extends string | any[]>(value: I): I;
