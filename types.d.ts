type Predicate<I> = (x: I) => boolean;
type Condition<I> = Predicate<I> | I;
type Transform<I, O> = O | ((x: I) => O);
