// Yes, `export {}; declare global` would be nice,
// but the API Extractor used by vite-plugin-dts seems to need direct imports.

/**
 * A function that returns a boolean.
 */
export type Predicate<I> = (x: I) => boolean;

/**
 * A function that returns a boolean and accepts an index as the second argument.
 */
export type IndexedPredicate<I> = (x: I, i: number) => boolean;

/**
 * A plain object with string keys.
 */
export type POJO<T> = Record<string, T>;

/**
 * The type of a property in a POJO (plain JavaScript object).
 */
export type ValueType<T extends POJO<any>> = T[keyof T];

/**
 * The type of an element in an array.
 */
export type ElementType<T extends any[]> = T[number];

/**
 * A function that takes a single input.
 */
export type Fn<I, O> = (x: I) => O;

/**
 * A function, or a constant of the same type as the function's output.
 */
export type FnOrConst<I, O> = O | Fn<I, O>;

/**
 * A function that returns a boolean, or a constant of the same type as the function's input.
 */
export type PredicateOrConst<I> = I | Predicate<I>;

/**
 * An accumulator function for use in reducing an array.
 */
export type Accumulator<I extends any[], O> = (
  acc: O,
  x: I[number]
) => O;
