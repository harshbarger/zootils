/**
 * If index is invalid, returns NaN
 * If index is negative, return positive equivalent index
 * Otherwise return index
 *
 * @internal
 */
export function getAdjustedIndex(
  value: string | unknown[],
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
export function purry(fn: (...args: any) => any, ...args: ReadonlyArray<any>) {
  if (args.length === fn.length) {
    return fn(...args);
  }

  return (data: any) => fn(data, ...args);
}

/**
 * @param value
 * @param transform
 *
 * @example
 * ```
 * doTransform(5, x => x * 2);   // 10
 * doTransform(5, 3);            // 3
 * ```
 */
export function doTransform<I, O>(value: I, transform: Transform<I, O>): O {
  return transform instanceof Function ? transform(value) : transform;
}
