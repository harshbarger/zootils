/**
 * A class-based counterpart to the pipe function found in many functional libraries,
 * with some convenience methods.
 *
 * // TODO: explain need to add type annotations sometimes, e.g.,
 *
 * chain(10).finallyIf<number>((x) => x > 0, -100)
 * chain(-10).finallyIf<number | string>((x) => x > 0, "-100")
 *
 * @example
 * ```
 * // TODO
 * ```
 */
declare class Chain<T> {
    private value;
    constructor(value: T);
    private doTransform;
    private conditionPasses;
    inspect(): Chain<T>;
    then<U>(transform: Transform<T, U>): Chain<U>;
    finally<U>(transform: Transform<T, U>): U;
    if<U extends T extends U ? unknown : never>(condition: Condition<T>, transform: Transform<T, U>): Chain<U>;
    ifNot<U extends T extends U ? unknown : never>(condition: Condition<T>, transform: Transform<T, U>): Chain<U>;
    ifElse<U>(condition: Condition<T>, ifTransform: Transform<T, U>, elseTransform: Transform<T, U>): Chain<U>;
    finallyIf<U extends T extends U ? unknown : never>(condition: Condition<T>, transform: Transform<T, U>): U;
    finallyIfNot<U extends T extends U ? unknown : never>(condition: Condition<T>, transform: Transform<T, U>): U;
    finallyIfElse<U>(condition: Condition<T>, ifTransform: Transform<T, U>, elseTransform: Transform<T, U>): U;
}
/**
 * Convenience function to allow creation of `Chain` object without the `new` keyword.
 *
 * @example
 * ```
 * // The following are equivalent.
 *
 * const x = chain(5).then(add(3)).finally(multiply(2));
 * const x = new Chain(5).then(add(3)).finally(multiply(2));
 * ```
 *
 * @param value
 * @returns
 */
declare function chain<T>(value: T): Chain<T>;

declare const NO_MATCH_YET = "__NO_MATCH_YET__";
declare class Match<T, U = T> {
    value: T;
    result: U | typeof NO_MATCH_YET;
    constructor(value: T);
    private doTransform;
    private conditionPasses;
    when(condition: Condition<T> | Condition<T>[], transform: Transform<T, U>): Match<T, U>;
    otherwise(transform: Transform<T, U | typeof NO_MATCH_YET>): U;
}
/**
 * Convenience function to allow creation of `Match` object without the `new` keyword.
 *
 * @example
 * ```
 * // The following are equivalent.
 *
 * const x = match(5).when(x => x > 0, "positive").when(0, "zero").otherwise("negative");
 * const x = new Match(5).when(x => x > 0, "positive").when(0, "zero").otherwise("negative");
 * ```
 *
 * @param value
 * @returns
 */
declare function match<T, U = T>(value: T): Match<T, U>;

type Interval = Partial<{
    from: number;
    to: number;
}>;
declare function slice(data: string, interval: Interval): string;
declare function slice<I extends any[]>(data: I, interval: Interval): I;
declare function slice<I extends string | any[]>(interval: Interval): (data: I) => I;

export { Chain, Match, chain, match, slice };
