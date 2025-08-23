/**
 * If index is invalid, returns NaN.
 * If index is negative, return positive equivalent index.
 * Otherwise return index.
 *
 * @internal
 */
export function getAdjustedIndex(
  value: string | any[],
  i: number,
  allowed:
    | "inBoundsOrLarger"
    | "inBoundsOrOnePast"
    | "onlyInBounds" = "onlyInBounds"
): number {
  if (
    i < -value.length ||
    !Number.isInteger(i) ||
    (allowed === "inBoundsOrOnePast" && i > value.length) ||
    (allowed === "onlyInBounds" && i >= value.length)
  ) {
    return NaN;
  }

  return i >= 0 ? i : value.length + i;
}

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
export function purry(
  fn: (...args: any) => any,
  ...args: ReadonlyArray<any>
) {
  if (args.length === fn.length) {
    return fn(...args);
  }

  return (data: any) => fn(data, ...args);
}

/**
 * Adds the global flag to a regular expression if it isn't
 * there already. (Returns a copy if the flag must be added.)
 *
 * @param regex
 *
 * @internal
 */
export function ensureGlobalFlag(regex: RegExp): RegExp {
  return regex.global
    ? regex
    : new RegExp(regex.source, regex.flags + "g");
}

/**
 * Removes the gloabl flag from a regular expression if there is
 * one. (Returns a copy if the flag must be removed.)
 *
 * @param regex
 *
 * @internal
 */
export function ensureNoGlobalFlag(regex: RegExp): RegExp {
  return regex.global
    ? new RegExp(regex.source, regex.flags.replace("g", ""))
    : regex;
}

/**
 * Returns an empty string if `value` is string, or empty array if `value` is array.
 * @param value
 * @returns
 *
 * @internal
 */
export function empty<I extends string | any[]>(value: I): I {
  return (Array.isArray(value) ? [] : "") as I;
}
