import { purry } from "./internals";

function _isInstanceOf(
  data: any,
  className: { new (...args: any[]): any }
): boolean {
  return data instanceof className;
}

/**
 * Tells whether `data` is an instance of the class `className`.
 *
 * @param data
 * @param className
 *
 * @example
 * ```
 * class A {}
 * const a = new A();
 *
 * isInstanceOf(a, A);              // true
 * isInstanceOf([1, 2, 3], Array);  // true
 * isInstanceOf({}, A);             // false
 * ```
 *
 * @category Other
 */
export function isInstanceOf(
  data: any,
  className: { new (...args: any[]): any }
): boolean;

/**
 * @param className
 *
 * @example
 * ```
 * class A {}
 * const a = new A();
 *
 * isInstanceOf(A)(a);              // true
 * ```
 *
 * @category Logic
 */
export function isInstanceOf(className: {
  new (...args: any[]): any;
}): (data: any) => boolean;

export function isInstanceOf(...args: any[]) {
  return purry(_isInstanceOf, ...args);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  class A {
    constructor() {}
  }

  class B {
    constructor(x: number) {}
  }

  const a = new A();
  const b = new B(10);

  it("identifies an instance or non-instance", () => {
    expect(isInstanceOf(a, A)).toBe(true);
    expect(isInstanceOf(B)(b)).toBe(true);
    expect(isInstanceOf(a, B)).toBe(false);
    expect(isInstanceOf(b, A)).toBe(false);
    expect(isInstanceOf({}, A)).toBe(false);
    expect(isInstanceOf({ x: 10 }, B)).toBe(false);
    expect(isInstanceOf([1, 2], Array)).toBe(true);
  });
}
