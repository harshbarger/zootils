// Yes, `export {}; declare global` would be nice,
// but the API Extractor used by vite-plugin-dts seems to need direct imports.

export type Predicate<I> = (x: I) => boolean;
export type IndexedPredicate<I> = (x: I, i: number) => boolean;
export type POJO<T> = Record<string, T>;
export type ValueType<T extends POJO<any>> = T[keyof T];
export type ElementType<T extends any[]> = T[number];
export type Fn<I, O> = (x: I) => O;
export type FnOrConst<I, O> = O | Fn<I, O>;
export type PredicateOrConst<I> = I | Predicate<I>;
export type Accumulator<I extends any[], O> = (
  acc: O,
  x: I[number]
) => O;
