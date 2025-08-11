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
export declare function isInstanceOf(data: any, className: {
    new (...args: any[]): any;
}): boolean;
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
export declare function isInstanceOf(className: {
    new (...args: any[]): any;
}): (data: any) => boolean;
