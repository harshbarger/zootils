type Predicate<I> = (x: I) => boolean;
type IndexedPredicate<I> = (x: I, i: number) => boolean;
type POJO<T> = Record<string, T>;
type ValueType<T extends POJO<any>> = T[keyof T];
type ElementType<T extends any[]> = T[number];
type Fn<I, O> = (x: I) => O;
type FnOrConst<I, O> = O | Fn<I, O>;
type PredicateOrConst<I> = I | Predicate<I>;
type Accumulator<I extends any[], O> = (acc: O, x: I[number]) => O;
