/**
 * An accumulator function for use in reducing an array.
 */
declare type Accumulator<I extends any[], O> = (acc: O, x: I[number]) => O;

/**
 * Adds two numbers
 *
 * @param data
 * @param x
 *
 * @example
 * ```
 * add(3, 5);     // 8
 * ```
 *
 * @category Math
 */
export declare function add(data: number, x: number): number;

/**
 * @param x
 *
 * @example
 * ```
 * add(3)(5);     // 8
 * ```
 *
 * @category Math
 */
export declare function add(x: number): (data: number) => number;

/**
 * Returns `true` if and only if all `conditions` are true for the `data`.
 *
 * @param data
 * @param conditions
 *
 * @example
 * ```
 * all(2, [isGt(0), isLt(4), Number.isInteger]);      // true
 * all(2.5, [isGt(0), isLt(4), Number.isInteger]);    // false
 * ```
 *
 * @category Logic
 */
export declare function all<T>(data: T, conditions: Predicate<T>[]): boolean;

/**
 * @param conditions
 *
 * @example
 * ```
 * all([isGt(0), isLt(4), Number.isInteger])(2);      // true
 * ```
 *
 * @category Logic
 */
export declare function all<T>(conditions: Predicate<T>[]): (data: T) => boolean;

/**
 * Returns true if all elements of the `data` array pass the condition.
 *
 * @param data
 * @param condition
 *
 * @example
 * ```
 * allElements([2, 3, 4], isGt(1));    // true
 * allElements([2, 3, 4], isGt(3));    // false
 * ```
 *
 * @category Array
 */
export declare function allElements<I extends any[]>(data: I, condition: Predicate<ElementType<I>>): boolean;

/**
 * @param condition
 *
 * @example
 * ```
 * allElements(isGt(1))([2, 3, 4]);    // true
 * ```
 *
 * @category Array
 */
export declare function allElements<I extends any[]>(condition: Predicate<ElementType<I>>): (data: I) => boolean;

/**
 * Returns true if all values of the `data` object pass the `condition` condition,
 * otherwise false.
 *
 * @param data
 * @param condition
 *
 * @example
 * ```
 * allProps({ x: 5, y: 10 }, isGt(0));    // true
 * allProps({ x: 5, y: 10 }, isGt(7));    // false
 * ```
 *
 * @category Object
 */
export declare function allProps<I extends POJO<any>>(data: I, condition: Predicate<ValueType<I>>): boolean;

/**
 * @param condition
 *
 * @example
 * ```
 * allProps(isGt(0))({ x: 5, y: 10 });    // true
 * ```
 *
 * @category Object
 */
export declare function allProps<I extends POJO<any>>(condition: Predicate<ValueType<I>>): (data: I) => boolean;

/**
 * Returns an array of arrays of length `size` with consecutive elements
 * from the original array. Returns an empty array if `size` is shorter
 * than the array, or is not a positive integer.
 *
 * @param data
 * @param size
 *
 * @example
 * ```
 * aperture([2, 4, 6, 8, 10], 3);     // [[2, 4, 6], [4, 6, 8], [6, 8, 10]]
 * ```
 *
 * @category Array
 */
export declare function aperture<I extends any[]>(data: I, size: number): I[];

/**
 * @param size
 *
 * @example
 * ```
 * aperture(3)([2, 4, 6, 8, 10]);     // [[2, 4, 6], [4, 6, 8], [6, 8, 10]]
 * ```
 *
 * @category Array
 */
export declare function aperture<I extends any[]>(size: number): (data: I) => I[];

/**
 * Returns a `data` the `value` array appended. To append an element
 * (rather than another array) to an array instead, use {@link appendElement}.
 *
 * @param data
 * @param value
 *
 * @example
 * ```
 * append([2, 3, 4], [10, 11]);            // [2, 3, 4, 10, 11]
 * append("ostrich", "weasel");            // "ostrichweasel"
 * ```
 *
 * @category Array
 * @category String
 */
export declare function append<I extends any[] | string>(data: I, value: I): I;

/**
 * @param value
 *
 * @example
 * ```
 * append([10, 11])([2, 3, 4]);            // [2, 3, 4, 10, 11]
 * append<string>("weasel")("ostrich")     // "ostrichweasel"
 * ```
 *
 * @category Array
 * @category String
 */
export declare function append<I extends any[] | string>(value: I): (data: I) => I;

/**
 * Appends the element to the end of the `data` array and returns a copy.
 * For strings, or to append an array to another array, use {@link append}.
 *
 * @param data
 * @param value
 *
 * @example
 * ```
 * appendElement([2, 3, 4], 10);            // [2, 3, 4, 10]
 * ```
 *
 * @category Array
 */
export declare function appendElement<I extends any[]>(data: I, value: ElementType<I>): I;

/**
 * @param value
 *
 * @example
 * ```
 * appendElement(10)([2, 3, 4]);            // [2, 3, 4, 10]
 * ```
 *
 * @category Array
 */
export declare function appendElement<I extends any[]>(value: ElementType<I>): (data: I) => I;

/**
 * Returns its argument unchanged
 * (similar to identity in some other libraries)
 *
 * @param value
 *
 * @example
 * asIs(42);    // 42
 *
 * @category Logic
 */
export declare function asIs<T>(value: T): T;

/**
 * Returns the element of `data` at `index`, or an empty string if `index` is out of bounds
 * or otherwise invalid.
 *
 * @param data
 * @param index  counts backward from end of array if negative, must be integer
 *
 * @example
 * ```
 * charAt("ostrich", 2);       // "t"
 * charAt("ostrich", -2);      // "c"
 * charAt("ostrich", 10);      // ""
 * ```
 *
 * @category String
 */
export declare function charAt(data: string, index: number): string;

/**
 * @param index
 *
 * @example
 * ```
 * charAt(2)("ostrich");       // "t"
 * ```
 * @category String
 */
export declare function charAt(index: number): (data: string) => string;

/**
 * Breaks `data` into an array of subarrays or substrings, each of length `size`.
 * If `size` does not divide evenly into the length of `data`, the last subarray
 * will contain fewer than `size` elements. Returns an empty array if `size` is invalid.
 *
 * @param data
 * @param size must be a postive integer
 *
 * @example
 * ```
 * chunk([2, 3, 4, 5, 6, 7], 2);     // [[2, 3], [4, 5], [6, 7]]
 * chunk([2, 3, 4, 5, 6], 3);        // [[2, 3, 4], [5, 6]]
 * chunk("ostrich", 3);              // ["ost", "ric", "h"]
 * ```
 *
 * @category Array
 */
export declare function chunk<I extends any[] | string>(data: I, size: number): I[];

/**
 * @param size
 *
 * @example
 * ```
 * chunk(2)([2, 3, 4, 5, 6, 7]);     // [[2, 3], [4, 5], [6, 7]]
 * ```
 *
 * @category Array
 */
export declare function chunk<I extends any[] | string>(size: number): (data: I) => I[];

/**
 * Returns `min` if `data` is less than `min`, `max` if `data` is greater than `max`.
 * If `data` is already between `min` and `max`, then the value of `data` is returned unchanged.
 *
 * @param data
 * @param min
 * @param max
 *
 * @example
 * ```
 * clamp(15, 0, 100);        // 15
 * clamp(-5, 0, 100);        // 0
 * clamp(140, 0, 100);       // 100
 * ```
 *
 * @category Math
 */
export declare function clamp(data: number, min: number, max: number): number;

/**
 * @param min
 * @param max
 *
 * @example
 * ```
 * clamp(0, 100)(-5);        // 0
 * ```
 *
 * @category Math
 */
export declare function clamp(min: number, max: number): (data: number) => number;

/**
 * Indicates whether or not the `data` array contains the element `value`,
 * or the `data` string contains the substring `value`.
 *
 * @param data
 * @param value
 *
 * @example
 * ```
 * contains([2, 3, 4], 4);           // true
 * contains([2, 3, 4], 10);          // false
 * contains("ostrich", "rich");      // true
 * contains("ostrich", "cat");       // false
 * ```
 *
 * @category Array
 * @category String
 */
export declare function contains(data: any[] | string, value: any): boolean;

/**
 * @param value
 *
 * @example
 * ```
 * contains(4)([2, 3, 4]);           // true
 * ```
 *
 * @category Array
 * @category String
 */
export declare function contains(value: any): (data: any[] | string) => boolean;

/**
 * Creates a new array with `length` elements, each filled with `value`.
 *
 * Creates an empty array for invalid `length` (non-integer or negative).
 *
 * @param length
 * @param value
 *
 * @example
 * ```
 * createArrayOf(5, 4);         // [4, 4, 4, 4, 4]
 * ```
 *
 * @category Array
 */
export declare function createArrayOf<E>(length: number, value: E): E[];

/**
 * Creates an array of equally spaced numbers from `start` to `end`. You may control
 * the spacing or number of points by setting any of the following:
 * - `n.intervals` e.g., [1, 2, 3] would have two intervals--1 to 2 and 2 to 3 (minimum 1).
 * - `n.points` to set the total number of points (minimum 2)
 * - `n.size` to set the difference between successive points. If `end - start` does
 * not divide evenly by `n.space`, then `n.space` will automatically be adjusted to
 * allow even spacing.
 *
 * If the value of `n` is not valid, then an empty array will be returned.
 *
 * @param start
 * @param end
 * @param spacing
 *
 * @example
 * createArrayRange(2, 22, { points: 5 });       // [2, 7, 12, 17, 22]
 * createArrayRange(2, 22, { intervals: 5 });    // [2, 6, 10, 14, 18, 22]
 * createArrayRange(2, 22, { space: 4 });        // [2, 6, 10, 14, 18, 22]
 * createArrayRange(2, 22, { space: 4.1 });      // [2, 6, 10, 14, 18, 22]
 * ```
 *
 * @category Array
 */
export declare function createArrayRange(start: number, end: number, spacing: SpacingOption): number[];

/**
 * Creates a new array with `length` elements. Element values are determined
 * by a `transform` of the element index.
 *
 * Creates an empty array for invalid `length` (non-integer or negative).
 *
 * @param length
 * @param transform
 *
 * @example
 * ```
 * createArrayWith(5, i => i ** 2);         // [0, 1, 4, 9, 16]
 * ```
 *
 * @category Array
 */
export declare function createArrayWith<E>(length: number, transform: (x: number) => E): E[];

/**
 * Divide `data` by `x`.
 *
 * @param data
 * @param x
 *
 * @example
 * ```
 * divideBy(6, 3);     // 2
 * ```
 *
 * @category Math
 */
export declare function divideBy(data: number, x: number): number;

/**
 * @param x
 *
 * @example
 * ```
 * divideBy(3)(6);     // 2
 * ```
 *
 * @category Math
 */
export declare function divideBy(x: number): (data: number) => number;

/**
 * Divide `data` into `x`, i.e., divide `x` by `data`.
 *
 * @param data
 * @param x
 *
 * @example
 * ```
 * divideInto(6, 3);     // 0.5
 * ```
 *
 * @category Math
 */
export declare function divideInto(data: number, x: number): number;

/**
 * @param x
 *
 * @example
 * ```
 * divideInto(3)(6);     // 0.5
 * ```
 *
 * @category Math
 */
export declare function divideInto(x: number): (data: number) => number;

/**
 * Returns the element of `data` at `index`, or `undefined` if `index` is out of bounds
 * or otherwise invalid.
 *
 * @param data
 * @param index counts backward from end of array if negative, must be integer
 *
 * @example
 * ```
 * elementAt([2, 4, 6], 2);      // 6
 * elementAt([2, 4, 6], -2);     // 4
 * elementAt([2, 4, 6], 5);      // undefined
 * ```
 *
 * @category Array
 */
export declare function elementAt<I extends any[]>(data: I, index: number): ElementType<I> | undefined;

/**
 * @param index
 *
 * @example
 * ```
 * elementAt(2)([2, 4, 6]);      // 6
 * ```
 *
 * @category Array
 */
export declare function elementAt<I extends any[]>(index: number): (data: I) => ElementType<I> | undefined;

/**
 * Indicates whether the element of array `data` at `index` passes the `condition`.
 * If `index` is invalid or out of bounds, returns false.
 *
 * @param data
 * @param index
 * @param condition
 *
 * @example
 * ```
 * elementPasses([-1, 0, 1], 2, x => x > 0);     // true
 * elementPasses([-1, 0, 1], 0, x => x > 0);     // false
 * elementPasses([-1, 0, 1], 5, x => x > 0);     // false (since index is out of bounds)
 * ```
 *
 * @category Array
 */
export declare function elementPasses<I extends any[]>(data: I, index: number, condition: Predicate<ElementType<I>>): boolean;

/**
 * @param index
 * @param condition
 *
 * @example
 * ```
 * elementPasses(2, x => x > 0)([-1, 0, 1]);      // true
 * ```
 *
 * @category Array
 */
export declare function elementPasses<I extends any[]>(index: number, condition: Predicate<ElementType<I>>): (data: I) => boolean;

/**
 * The type of an element in an array.
 */
declare type ElementType<T extends any[]> = T[number];

/**
 * Indicates whether the `data` is strictly equal to (`===`) `value`.
 *
 * @param data
 * @param value
 *
 * @example
 * ```
 * equals(5, 5);       // true
 * equals(5, "5");     // false
 * ```
 *
 * @category Logic
 */
export declare function equals<T>(data: T, value: T): boolean;

/**
 * @param value
 *
 * @example
 * ```
 * equals(5)(5);       // true
 * ```
 *
 * @category Logic
 */
export declare function equals<T>(value: T): (data: T) => boolean;

/**
 * Returns true if `data` is equal to one of the `values`, false otherwise.
 *
 * @param data
 * @param values
 *
 * @example
 * ```
 * equalsOneOf(1, [1, 2, 3]);    // true
 * equalsOneOf(4, [1, 2, 3]);    // false
 * ```
 *
 * @category Logic
 */
export declare function equalsOneOf(data: any, values: any[]): boolean;

/**
 * @example
 * ```
 * equalsOneOf([1, 2, 3])(1);    // true
 * ```
 *
 * @category Logic
 */
export declare function equalsOneOf(values: any[]): (data: any) => boolean;

/**
 * Returns an array containing all matches to `regex` in the string
 * `data`, or an empty array if there are no matches. The global
 * flag will be added automatically if not already present on `regex`,
 * since this function is designed to get all matches. (To return
 * only the first match, use {@link: firstMatch} instead.)
 *
 * @param data
 * @param regex
 *
 * @example
 * ```
 * everyMatch('weasels', /[aeiou]/);      // ['e', 'a', 'e']
 * everyMatch('weasels', /[xyz]/);        // []
 * ```
 *
 * @category String
 */
export declare function everyMatch(data: string, regex: RegExp): string[];

/**
 * @param regex
 *
 * @example
 * ```
 * everyMatch(/[aeiou]/)('weasels');      // ['e', 'a', 'e']
 * ```
 *
 * @category String
 */
export declare function everyMatch(regex: RegExp): (data: string) => string[];

/**
 * Similar to `Array.prototype.filter`, but with the difference that
 * the `condition` function is not called with an index as the second parameter.
 * This prevents unexpected behavior when the `transform`
 * function has a second optional parameter that respresents
 * something other than an index. Use {@link filterWithIndex} instead if
 * you need the index.
 *
 * @param data
 * @param condition
 *
 * @example
 * ```
 * filter([4, -2, 0, 2, -4], isPositive);               // [4, 2]
 * ```
 *
 * @category Array
 */
export declare function filter<I extends any[]>(data: I, condition: Predicate<ElementType<I>>): I;

/**
 * @param condition
 *
 * @example
 * ```
 * filter(isPositive)([4, -2, 0, 2, -4]);      // [4, 2]
 * ```
 *
 * @category Array
 */
export declare function filter<I extends any[]>(condition: Predicate<ElementType<I>>): (data: I) => I;

/**
 * Similar to {@link filter} (which is in turn similar to
 * `Array.prototype.map`), but the `condition` function requires
 * an index as the second parameter. Use {@link filter} instead
 * if you do not need the index.
 *
 * @param data
 * @param condition
 *
 * @example
 * ```
 * filterWithIndex([4, -2, 0, 2, -4], (_, i) => isEven(i));      // [4, 0, -4]
 * ```
 *
 * @category Array
 */
export declare function filterWithIndex<I extends any[]>(data: I, condition: IndexedPredicate<ElementType<I>>): I;

/**
 * @param condition
 *
 * @example
 * ```
 * filterWithIndex((_, i) => isEven(i))([4, -2, 0, 2, -4]);      // [4, 0, -4]
 * ```
 *
 * @category Array
 */
export declare function filterWithIndex<I extends any[]>(condition: IndexedPredicate<ElementType<I>>): (data: I) => I;

/**
 * Returns the index of the first element of `data` that passes `condition`,
 * or returns `NaN` if no eleement passes.
 *
 * @remarks There are two reason that `NaN` is used as the return value when
 * so element is found instead of -1, as is used in JavaSCript's built-in
 * `Array.prototype.finsIndex`. One is that `NaN` is more consistent with the
 * conventions used elsewhere in this library. The other is that the functions
 * in this library routinely recongize an index of -1 as the last element of an array,
 * so surprising behavior could occur if -1 were used to epresent an ostensibly
 * non-existent index.
 *
 * @param data
 * @param condition
 *
 * @example
 * ```
 * findIndex([2, 4, -2, 10], isNegative);          // 2
 * findIndex([2, 4, 12, 10], isNegative);          // NaN
 * ```
 *
 * @category Array
 */
export declare function findIndex<I extends any[]>(data: I, condition: Predicate<ElementType<I>>): number;

/**
 * @param condition
 *
 * @example
 * ```
 * findIndex(isNegative)([2, 4, -2, 10]);          // 2
 * ```
 *
 * @category Array
 */
export declare function findIndex<I extends any[]>(condition: Predicate<ElementType<I>>): (data: I) => number;

/**
 * Returns the index of the last element of `data` that passes `condition`,
 * or returns `NaN` if no eleement passes.
 *
 * @remarks There are two reason that `NaN` is used as the return value when
 * so element is found instead of -1, as is used in JavaSCript's built-in
 * `Array.prototype.finsIndex`. One is that `NaN` is more consistent with the
 * conventions used elsewhere in this library. The other is that the functions
 * in this library routinely recongize an index of -1 as the last element of an array,
 * so surprising behavior could occur if -1 were used to epresent an ostensibly
 * non-existent index.
 *
 * @param data
 * @param condition
 *
 * @example
 * ```
 * findLastIndex([2, -4, -2, 10], isNegative);         // 2
 * findLastIndex([2, 4, 12, 10], isNegative);          // NaN
 * ```
 *
 * @category Array
 */
export declare function findLastIndex<I extends any[]>(data: I, condition: Predicate<ElementType<I>>): number;

/**
 * @param condition
 *
 * @example
 * ```
 * findLastIndex(isNegative)([2, -4, -2, 10]);          // 2
 * ```
 *
 * @category Array
 */
export declare function findLastIndex<I extends any[]>(condition: Predicate<ElementType<I>>): (data: I) => number;

/**
 * Returns the last element in the `data` array that passes the `condition`, or returns
 * the `fallback` value if no element meets the `condition`.
 *
 * @param data
 * @param condition
 * @param fallback
 *
 * @example
 * ```
 * findLastOr([2, -10, -2, 6], isNegative, NaN)).toBe(-2);
 * findLastOr([2, 10, 4, 6], isNegative, NaN)).toBe(NaN);
 * ```
 *
 * @category Array
 */
export declare function findLastOr<I extends any[]>(data: I, condition: Predicate<ElementType<I>>, fallback: unknown): ElementType<I> | typeof fallback;

/**
 * @param condition
 * @param fallback
 *
 * @example
 * ```
 * findLastOr(x => x < 0, NaN)([2, -10, -2, 6]).toBe(-2);
 * ```
 *
 * @category Array
 */
export declare function findLastOr<I extends any[]>(condition: Predicate<ElementType<I>>, fallback: unknown): (data: I) => ElementType<I> | typeof fallback;

/**
 * Returns the first element in the `data` array that passes the `condition`, or returns
 * the `fallback` value if no element meets the `condition`.
 *
 * @param data
 * @param condition
 * @param fallback
 *
 * @example
 * ```
 * findOr([2, 10, -2, -6], isNegative, NaN);      // -2
 * findOr([2, 10, 4, 6], isNegative, NaN);        // NaN
 * ```
 *
 * @category Array
 */
export declare function findOr<I extends any[]>(data: I, condition: Predicate<ElementType<I>>, fallback: unknown): ElementType<I> | typeof fallback;

/**
 * @param condition
 * @param fallback
 *
 * @example
 * ```
 * findOr(isNegative, NaN)([2, 10, -2, -6]);      // -2
 * ```
 *
 * @category Array
 */
export declare function findOr<I extends any[]>(condition: Predicate<ElementType<I>>, fallback: unknown): (data: I) => ElementType<I> | typeof fallback;

/**
 * Returns the first element of an array, or `undefined` if the array is empty.
 *
 * @param data
 * @returns
 *
 * @example
 * ```
 * first([3, 4, 6]);    // 3
 * ```
 *
 * @category Array
 */
export declare function first<I extends any[]>(data: I): ElementType<I> | undefined;

/**
 * Returns the first match to `regex` in `data`, or an empty string if no match exists. The global flag will be removed from `regex`
 * automatically if present, since this function is designed to find
 * only the first match. (To return all matches, use {@link everyMatch}
 * instead.)
 *
 * @param data
 * @param regex
 *
 * @example
 * ```
 * firstMatch('weasel', /[aeiou]/);     // 'e'
 * firstMatch('weasel', /[xyz]/);       // ''
 * ```
 *
 * @category String
 */
export declare function firstMatch(data: string, regex: RegExp): string;

/**
 * @param regex
 *
 * @example
 * ```
 * firstMatch(/[aeiou]/)('weasel');     // 'e'
 * ```
 *
 * @category String
 */
export declare function firstMatch(regex: RegExp): (data: string) => string | undefined;

/**
 * Flatten an array one level.
 *
 * @param data
 *
 * @example
 * ```
 * flatten([[3, 4], [5]]);      // [3, 4, 5]
 * flatten([[[1, 2, 3]], [[4, 5], 6], [7, 8, [9]]]);
 *                         // [[1, 2, 3], [4, 5], 6, 7, 8, [9]]
 * ```
 *
 * @category Array
 */
export declare function flatten<I extends (any | any[])[]>(data: I): ElementType<I>;

/**
 * A function that takes a single input.
 */
declare type Fn<I, O> = (x: I) => O;

/**
 * A function that returns a boolean and accepts an index as the second argument.
 */
declare type IndexedPredicate<I> = (x: I, i: number) => boolean;

/**
 * Inserts the `content` element into the `data` array, or the `content` substring into the `data` string
 * at the `index` position. If `index` is equal to the length of `data`, then `content` will be
 * appended to the end. Returns a shallow copy of `data` if the index is invalid.
 *
 * @param data
 * @param index negative counts backward from end, must be integer, must be in bounds
 * or equal to the length of `data`.
 * @param content
 *
 * @example
 * ```
 * insert([2, 3, 4], 1, 10);        // [2, 10, 3, 4]
 * insert([2, 3, 4], -1, 10);       // [2, 3, 10, 4]
 * insert("ostrich", 1, "aa");      // "oaastrich"
 * insert("ostrich", 7, "aa");      // "ostrichaa"
 * ```
 *
 * @category Array
 * @category String
 */
export declare function insert<I extends any[] | string>(data: I, index: number, content: I extends any[] ? ElementType<I> : string): I;

/**
 * @param index
 * @param content
 *
 * @example
 * ```
 *  * insert(1, 10)(2, 3, 4]);       // [2, 10, 3, 4]
 * ```
 *
 * @category Array
 * @category String
 */
export declare function insert<I extends any[] | string>(index: number, content: I extends any[] ? ElementType<I> : string): (data: I) => I;

/**
 * Inserts the `content` array into the `data` array at the `index` position. If `index` is equal to
 * the length of `data`, then `content` will be appended to the end. Returns a shallow copy
 * of `data` if the index is invalid.
 *
 * @param data
 * @param index negative counts backward from end, must be integer, must be in array bounds
 * or equal to the length of the array.
 * @param content
 *
 * @example
 * ```
 * insertArray([2, 3, 4], 1, [10, 11]);       // [2, 10, 11, 3, 4];
 * insertArray([2, 3, 4], -1, [10, 11]);       // [2, 3, 10, 11, 4];
 * insertArray([2, 3, 4], 3, [10, 11]);       // [2, 3, 4, 10, 11];
 * ```
 *
 * @category Array
 */
export declare function insertArray<I extends any[]>(data: I, index: number, content: I): I;

/**
 * @param index
 * @param content
 *
 * @example
 * ```
 * insertArray(1, [10, 11])([2, 3, 4]);       // [2, 10, 11, 3, 4];
 * ```
 *
 * @category Array
 */
export declare function insertArray<I extends any[]>(index: number, content: I): (data: I) => I;

/**
 * Returns the value a fraction `data` between the numbers `x1` and `x2`.
 * `data` may be outside the range [0, 1], in which case the result will be
 * outside the range [`x1`, `x2`].
 *
 * @param data
 * @param x1
 * @param x2
 *
 * @example
 * ```
 * interpolate(0.1, 100, 200);    // 110
 * interpolate(-0.1, 100, 200);   // 90
 * ```
 *
 * @category Math
 */
export declare function interpolate(data: number, x1: number, x2: number): number;

/**
 * @param x1
 * @param x2
 *
 * @example
 * ```
 * interpolate(100, 200)(0.1);    // 110
 * ```
 *
 * @category Math
 */
export declare function interpolate(x1: number, x2: number): (data: number) => number;

/**
 * Indicates whether `data` is between the values of `min` and `max`
 * (including the endpoints).
 *
 * @param data
 * @param min
 * @param max
 *
 * @example
 * ```
 * isBetween(10, 5, 20);      // true
 * isBetween(30, 5, 20);      // false
 * ```
 *
 * @category Math
 */
export declare function isBetween(data: number, min: number, max: number): boolean;

/**
 * @param min
 * @param max
 *
 * @example
 * ```
 * isBetween(5, 20)(10);      // true
 * ```
 *
 * @category Math
 */
export declare function isBetween(min: number, max: number): (data: number) => boolean;

/**
 * Indicates whether `data` is within `tolerance` of `x` (in either direction)
 *
 * @param data
 * @param x
 * @param tolerance
 *
 * @example
 * ```
 * isCloseTo(5.01, 5, 0.01);     // true
 * isCloseTo(4.99, 5, 0.1);      // true
 * isCloseTo(5.01, 5, 0.001);    // false
 * ```
 *
 * @category Math
 */
export declare function isCloseTo(data: number, x: number, tolerance: number): boolean;

/**
 * @param x
 * @param tolerance
 *
 * @example
 * ```
 * isCloseTo(5, 0.1)(5.01);      // true
 * ```
 *
 * @category Math
 */
export declare function isCloseTo(x: number, tolerance: number): (data: number) => boolean;

/**
 * Indicates whether `data` is divislbe by `divisor`. If either `data` or `divisor`
 * is not an integer, then a tolerance of 1e-15 will be allowed to allow for floating
 * point errors.
 *
 * @param data
 * @param divisor
 *
 * @example
 * ```
 * isDivisibleBy(12, 3);             // true
 * isDivisibleBy(14, 3);             // false
 * isDivisibleBy(12 + 1e-17, 3);     // true (due to allowed tolerance of 1e-15)
 * ```
 *
 * @category Math
 */
export declare function isDivisibleBy(data: number, divisor: number): boolean;

/**
 * @param divisor
 *
 * @example
 * ```
 * isDivisibleBy(12)(3);             // true
 * ```
 *
 * @category Math
 */
export declare function isDivisibleBy(divisor: number): (data: number) => boolean;

/**
 * Indicates whether a number is even. Unlike `isDivisibleBy(2)`, `isEven` doesn't
 * not allow any tolerance for rounding errors in floating point numbers.
 *
 * @param data
 * @returns
 *
 * @example
 * ```
 * isEven(4);        // true
 * isEven(4.1);      // false
 * ```
 *
 * @category Math
 */
export declare function isEven(data: number): boolean;

/**
 * Indicates whether `data` is greater than `value`.
 *
 * @param data
 * @param value
 *
 * @example
 * ```
 * isGt(5, 4);       // true
 * isGt(5, 5);       // false
 * ```
 *
 * @category Math
 */
export declare function isGt(data: number, value: number): boolean;

/**
 * @param value
 *
 * @example
 * ```
 * isGt(5)(4);       // true
 * ```
 *
 * @category Math
 */
export declare function isGt(value: number): (data: number) => boolean;

/**
 * Indicates whether `data` is greater than or equal to `value`.
 *
 * @param data
 * @param value
 *
 * @example
 * ```
 * isGte(5, 4);       // true
 * isGte(5, 5);       // true
 * isGte(3, 5);       // false
 * ```
 *
 * @category Math
 */
export declare function isGte(data: number, value: number): boolean;

/**
 * @param value
 *
 * @example
 * ```
 * isGte(5)(4);       // true
 * ```
 *
 * @category Math
 */
export declare function isGte(value: number): (data: number) => boolean;

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

/**
 * Tells whether the plain object `obj` has its own key named `data`.
 *
 * @param data
 * @param obj
 *
 * @example
 * ```
 * isKeyOf("a", { a: "weasel" });      // true
 * isKeyOf("a", { an: "ostrich" });    // false
 * ```
 *
 * @category Object
 */
export declare function isKeyOf(data: string, obj: POJO<any>): boolean;

/**
 * @param obj
 *
 * @example
 * ```
 * isKeyOf({ a: "weasel" })("a");      // true
 * ```
 *
 * @category Object
 */
export declare function isKeyOf(obj: POJO<any>): (data: string) => boolean;

/**
 * Indicates whether `data` is less than `value`
 *
 * @param data
 * @param value
 *
 * @example
 * ```
 * isLt(4, 5);       // true
 * isLt(5, 5);       // false
 * ```
 *
 * @category Math
 */
export declare function isLt(data: number, value: number): boolean;

/**
 * Indicates whether `data` is less than `value`
 *
 * @param value
 *
 * @example
 * ```
 * isLt(5)(4);       // true
 * ```
 *
 * @category Math
 */
export declare function isLt(value: number): (data: number) => boolean;

/**
 * Indicates whether `data` is less than or equal to `value`
 *
 * @param data
 * @param value
 *
 * @example
 * ```
 * isLte(4, 5);       // true
 * isLte(5, 5);       // true
 * isLte(3, 2);       // false
 * ```
 *
 * @category Math
 */
export declare function isLte(data: number, value: number): boolean;

/**
 * @param value
 *
 * @example
 * ```
 * isLte(6)(5);       // true
 * ```
 *
 * @category Math
 */
export declare function isLte(value: number): (data: number) => boolean;

/**
 * Indicates whether a number is negative.
 *
 * @param data
 * @returns
 *
 * @example
 * ```
 * isNegative(-2);    // true
 * isNegative(0);     // false
 * ```
 *
 * @category Math
 */
export declare function isNegative(data: number): boolean;

/**
 * Indicates whether a number is non-negative, i.e., positive or zero.
 *
 * @param data
 *
 * @example
 * ```
 * isNonNegative(2);      // true
 * isNonNegative(0);      // true
 * isNonNegative(-2);     // false
 * ```
 *
 * @category Math
 */
export declare function isNonNegative(data: number): boolean;

/**
 * Returns false if `data` is `null` or `undefined`, otherwise true.
 *
 * @param data
 * @returns
 *
 * @example
 * ```
 * isNotNullish(null);      // true
 * isNotNullish(undefined); // true
 * isNotNullish(0);         // false
 * ```
 *
 * @category Logic
 */
export declare function isNotNullish(data: any): boolean;

/**
 * Tells whether `data` is `null` or `undefined`.
 *
 * @param data
 * @returns
 *
 * @example
 * ```
 * isNullish(null);      // true
 * isNullish(undefined); // true
 * isNullish(0);         // false
 * ```
 *
 * @category Logic
 */
export declare function isNullish(data: any): boolean;

/**
 * Returns `true` if `data` is a number `false` otherwise.
 *
 * @param data
 * @returns
 *
 * @example
 * ```ts
 * isNumber(42;            // true
 * isNumber("42");         // false
 * ```
 *
 * @category Logic
 */
export declare function isNumber(data: any): data is number;

/**
 * Indicates whether a number is an odd integer.
 *
 * @param data
 * @returns
 *
 * @example
 * ```
 * isEven(3);        // true
 * isEven(3.1);      // false
 * ```
 *
 * @category Math
 */
export declare function isOdd(data: number): boolean;

/**
 * Indicates whether a number is positive.
 *
 * @param data
 *
 * @example
 * ```
 * isPositive(2);     // true
 * isPositive(0);     // false
 * ```
 *
 * @category Math
 */
export declare function isPositive(data: number): boolean;

/**
 * Returns `true` if `data` is a string, `false` otherwise.
 *
 * @param data
 * @returns
 *
 * @example
 * ```ts
 * isString("ostrich");     // true
 * isString(3);             // false
 * ```
 *
 * @category Logic
 */
export declare function isString(data: any): data is string;

/**
 * Concatenates the strings in the `data` array, inserting the
 * `separator` string between each.
 *
 * @param data
 * @param separator
 *
 * @example
 * ```
 * join(['a', 'b', 'c'], '_');     // 'a_b_c'
 * ```
 *
 * @category Array
 */
export declare function join(data: string[], separator: string): string;

/**
 * @param separator
 *
 * @example
 * ```
 * join('')(['a', 'b', 'c']);     // 'abc'
 * ```
 *
 * @category Array
 */
export declare function join(separator: string): (data: string[]) => string;

/**
 * Returns the last element of an array, or `undefined` if the array is empty.
 *
 * @param data
 *
 * @example
 * ```
 * last([3, 4, 6]);    // 6
 * last([]);           // undefined
 * ```
 *
 * @category Array
 */
export declare function last<I extends any[]>(data: I): ElementType<I> | undefined;

/**
 * Returns the length of a string or array
 *
 * @param data
 * @returns
 *
 * @example
 * ```
 * length([2, 3, 4]);      // 3
 * length("ostrich");      // 7
 * ```
 *
 * @category Array
 * @category String
 */
declare function length_2(data: any[] | string): number;
export { length_2 as length }

/**
 * Indicates whether the length of the `data` string or array passes the `condition`.
 *
 * @param data
 * @param condition
 *
 * @example
 * ```
 * lengthPasses([2, 3, 4], isLt(5));     // true
 * lengthPasses("ostrich", isLt(5));     // false
 * ```
 *
 * @category Array
 * @category String
 */
export declare function lengthPasses(data: any[] | string, condition: Predicate<number>): boolean;

/**
 * @param condition
 *
 * @example
 * ```
 * lengthPasses(isLt(5))([2, 3, 4]);     // true
 * ```
 *
 * @category Array
 * @category String
 */
export declare function lengthPasses<I extends any[] | string>(condition: Predicate<number>): (data: any[] | string) => boolean;

/**
 * Maps a value `data` from the range [`x1`, `x2`] to the range [`y1`, `y2`].
 *
 * @param data
 * @param x1
 * @param x2
 * @param y1
 * @param y2
 *
 * @example
 * ```
 * linearMap(11, 10, 20, 100, 200);    // 110
 * ```
 *
 * @category Math
 */
export declare function linearMap(data: number, x1: number, x2: number, y1: number, y2: number): number;

/**
 * @param x1
 * @param x2
 * @param y1
 * @param y2
 *
 * @example
 * ```
 * linearMap(10, 20, 200, 100)(9);     // 210
 * ```
 *
 * @category Math
 */
export declare function linearMap(x1: number, x2: number, y1: number, y2: number): (data: number) => number;

/**
 * Returns a copy of a string with all upper case letters
 * changed to lower case.
 * @param data
 * @returns
 *
 * @example
 * ```
 * lowerCase('SCUBA Diver');     // 'scuba diver'
 * ```
 *
 * @category String
 */
export declare function lowerCase(data: string): string;

/**
 * Similar in concept `Array.prototype.map`, but with
 * the distinction that it does not automatically call
 * `transform` with a second argument for the index.
 * This prevents unexpected behavior when the `transform`
 * function has a second optional parameter that respresents
 * something other than an index (e.g., `parseInt`). Use
 * {@link mapWithIndex} instead if you need the index.
 *
 * @param data
 * @param transform
 *
 * @example
 * ```
 * map([2, 3, 4], x => x * 2);        [4, 6, 8];
 * ```
 *
 * @category Array
 */
export declare function map<I extends any[], O extends any[] = I>(data: I, transform: (x: ElementType<I>) => O[number]): O;

/**
 * @param transform
 *
 * @example
 * ```
 * map(x => x * 2)([4, 6, 8]);    [4, 6, 8];
 * ```
 *
 * @category Array
 */
export declare function map<I extends any[], O extends any[] = I>(transform: (x: ElementType<I>) => O[number]): (data: I) => O;

/**
 * Applies a transform function to each property value in the object.
 *
 * @param data
 * @param transform
 *
 * @example
 * ```
 * mapProps({ a: 1, b: 2, c: 3 }, x => x * 2);   // { a: 2, b: 4, c: 6 }
 * ```
 *
 * @category Object
 */
export declare function mapProps<I extends POJO<any>, O extends POJO<any>>(data: I, transform: (x: ValueType<I>) => ValueType<O>): O;

/**
 * @param transform
 *
 * @example
 * ```
 * mapProps(x => x * 2)({ a: 1, b: 2, c: 3 });   // { a: 2, b: 4, c: 6 }
 * ```
 *
 * @category Object
 */
export declare function mapProps<I extends POJO<any>, O extends POJO<any>>(transform: (x: ValueType<I>) => ValueType<O>): (data: I) => O;

/**
 * Similar to {@link map} (which is in turn similar to `Array.prototype.map`),
 * but the `transform` function requires an index as the second parameter.
 * Use {@link map} instead if you do not need the index.
 *
 * @param data
 * @param transform
 *
 * @example
 * ```
 * mapWithIndex([2, 3, 4], (x, i) => x + i);        [2, 4, 6];
 * ```
 *
 * @category Array
 */
export declare function mapWithIndex<I extends any[], O extends any[] = I>(data: I, transform: (x: ElementType<I>, i: number) => O[number]): O;

/**
 * @param transform
 *
 * @example
 * ```
 * mapWithIndex((x, i) => x + i)([2, 3, 4]);        [2, 4, 6];
 * ```
 *
 * @category Array
 */
export declare function mapWithIndex<I extends any[], O extends any[] = I>(transform: (x: ElementType<I>, i: number) => O[number]): (data: I) => O;

/**
 * Returns `true` if the string `data` matches the regular expression `regex`, `false` otherwise.
 *
 * @param data
 * @param regex
 *
 * @example
 * ```
 * matchesRegex('weasels', /easel/);     // true
 * matchesRegex('weasels', /^easel$/);   // false
 * ```
 *
 * @category String
 */
export declare function matchesRegex(data: string, regex: RegExp): boolean;

/**
 * @param regex
 *
 * @example
 * ```
 * matchesRegex(/easel/)('weasels');     // true
 * matchesRegex(/^easel$/)('weasels');   // false
 * ```
 *
 * @category String
 */
export declare function matchesRegex(regex: RegExp): (data: string) => boolean;

/**
 * Calculates `data` mod `modulus` using KKnuth's definition of modulus,
 * which reflects the definition of mod used in mathematics. For a function
 * that follows JavaScript's `%` operator instead, see {@link modulo}.
 * @param data
 * @param modulus
 *
 * @example
 * ```
 * mathModulo(7, 6);         // 1
 * mathModulo(6)(-7);        // 5
 * mathModulo(7, -6);        // -5
 * mathModulo(-6, -7);       // -1
 * ```
 *
 * @category Math
 */
export declare function mathModulo(data: number, modulus: number): number;

/**
 * @param modulus
 *
 * @example
 * ```
 * mathModulo(7)(-6);       // -5
 * ```
 *
 * @category Math
 */
export declare function mathModulo(modulus: number): (data: number) => number;

/**
 * Returns the maximum value of the array, or `NaN` if the array is empty.
 *
 * @param data
 * @returns
 *
 * @example
 * ```
 * maximum([3, -1, 7, -2]);       // 7
 * ```
 *
 * @category Array
 * @category Math
 */
export declare function maximum(data: number[]): number;

/**
 * Applies a `transform` to each element of the array, then returns the maximum
 * of the transformed array. Returns `NaN` if the array is empty.
 *
 * @param data
 * @param transform
 *
 * @example
 * ```
 * maximumWith([1, 4, -6, -2], Math.abs);        // 6
 * ```
 *
 * @category Array
 * @category Math
 */
export declare function maximumWith<I extends any[]>(data: I, transform: (x: ElementType<I>) => number): number;

/**
 * @param transform
 *
 * @example
 * ```
 * maximumWith(Math.abs, [1, 4, -6, -2]);        // 6
 * ```
 *
 * @category Array
 * @category Math
 */
export declare function maximumWith<I extends any[]>(transform: (x: ElementType<I>) => number): (data: I) => number;

/**
 * Returns the mean of an array of numbers, or `NaN` if the array is empty.
 *
 * @param data
 * @returns
 *
 * @example
 * ```
 * mean([3, 5, 10]);          // 6
 * ```
 *
 * @category Array
 * @category Math
 */
export declare function mean(data: number[]): number;

/**
 * Applies the `transform` function to each element of an array, then returns
 * the mean of the result. Returns `NaN` if the array is empty.
 *
 * @param data
 * @param transform
 *
 * @example
 * ```
 * meanWith([1, 3, -8], Math.abs);       // 4
 * ```
 *
 * @category Array
 * @category Math
 */
export declare function meanWith<I extends any[]>(data: I, transform: Fn<ElementType<I>, number>): number;

/**
 * @param transform
 *
 * @example
 * ```
 * meanWith(Math.abs)([1, 3, -8]);       // 4
 * ```
 *
 * @category Array
 * @category Math
 */
export declare function meanWith<I extends any[]>(transform: Fn<ElementType<I>, number>): (data: I) => number;

/**
 * Returns the minimum value of the array, or `NaN` if the array is empty.
 *
 * @param data
 * @returns
 *
 * @example
 * ```
 * minimum([3, -1, -7, 2]);       // -7
 * ```
 *
 * @category Array
 * @category Math
 */
export declare function minimum(data: number[]): number;

/**
 * Applies a `transform` to each element of the array, then returns the minimum
 * of the transformed array. Returns `NaN` if the array is empty.
 *
 * @param data
 * @param transform
 *
 * @example
 * ```
 * minimumWith([1, 4, -6, -2], Math.abs);        // 1
 * ```
 *
 * @category Array
 * @category Math
 */
export declare function minimumWith<I extends any[]>(data: I, transform: (x: ElementType<I>) => number): number;

/**
 * @param transform
 *
 * @example
 * ```
 * minimumWith(Math.abs, [1, 4, -6, -2]);        // 1
 * ```
 *
 * @category Array
 * @category Math
 */
export declare function minimumWith<I extends any[]>(transform: (x: ElementType<I>) => number): (data: I) => number;

/**
 * Calculates `data` mod `modulus`. `modulo` is implemented with the `%` operator,
 * so it follows the JavaScript specification that the sign of `a % b` is the sign of `a`,
 * and values are not required to be integers. See {@link mathModulo} for a function that
 * follows Knuth's definition, which better reflects the use of mod in mathematics.
 *
 * @param data
 * @param modulus
 *
 * @example
 * ```
 * modulo(12, 10);         // 2
 * modulo(-12, 10);        // -2
 * ```
 *
 * @category Math
 */
export declare function modulo(data: number, modulus: number): number;

/**
 * @param modulus
 *
 * @example
 * ```
 * modulo(10)(12);         // 2
 * ```
 */
export declare function modulo(modulus: number): (data: number) => number;

/**
 * Multiplies two numbers
 *
 * @param data
 * @param x
 *
 * @example
 * ```
 * multiply(3, 5);     // 15
 * ```
 *
 * @category Math
 */
export declare function multiply(data: number, x: number): number;

/**
 * @param x
 *
 * @example
 * ```
 * multiply(3)(5);     // 15
 * ```
 *
 * @category Math
 */
export declare function multiply(x: number): (data: number) => number;

/**
 * Returns true if no elements of the `data` array pass the `condition`.
 *
 * @param data
 * @param condition
 *
 * @example
 * ```
 * noElements([2, 3, 4], isGt(5));    // true
 * noElements([2, 3, 4], isGt(3));    // false
 * ```
 *
 * @category Array
 */
export declare function noElements<I extends any[]>(data: I, condition: Predicate<ElementType<I>>): boolean;

/**
 * @param condition
 *
 * @example
 * ```
 * noElements(isGt(5))([2, 3, 4]);    // true
 * ```
 *
 * @category Array
 */
export declare function noElements<I extends any[]>(condition: Predicate<ElementType<I>>): (data: I) => boolean;

/**
 * Returns `true` if and only if none of the `conditions` are true for the `data`.
 *
 * @param data
 * @param conditions
 *
 * @example
 * ```
 * none(2.5, [isLt(0), isGt(4), Number.isInteger]);      // true
 * none(2, [isGt(0), isLt(4), Number.isInteger]);        // false
 * ```
 *
 * @category Logic
 */
export declare function none<T>(data: T, conditions: Predicate<T>[]): boolean;

/**
 * @param conditions
 *
 * @example
 * ```
 * none([isLt(0), isGt(4), Number.isInteger])(2.5);      // true
 * ```
 *
 * @category Logic
 */
export declare function none<T>(conditions: Predicate<T>[]): (data: T) => boolean;

/**
 * Returns true if no value of the `data` object passes the `condition`
 * condition, otherwise false.
 *
 * @param data
 * @param condition
 *
 * @example
 * ```
 * noProps({ x: 5, y: 10 }, x => x > 15);    // true
 * noProps({ x: 5, y: 10 }, isGt(7));    // false
 * ```
 *
 * @category Object
 */
export declare function noProps<I extends POJO<any>>(data: I, condition: Predicate<ValueType<I>>): boolean;

/**
 * @param condition
 *
 * @example
 * ```
 * noProps(x => x > 15)({ x: 5, y: 10 });    // true
 * ```
 *
 * @category Object
 */
export declare function noProps<I extends POJO<any>>(condition: Predicate<ValueType<I>>): (data: I) => boolean;

/**
 * Returns `true` if at least one of the `conditions` is not true for the `data`.
 *
 * @param data
 * @param conditions
 *
 * @example
 * ```
 * notAll(2.5, [isGt(0), isLt(4), Number.isInteger]);      // true
 * notAll(2, [isGt(0), isLt(4), Number.isInteger]);        // false
 * ```
 *
 * @category Logic
 */
export declare function notAll<T>(data: T, conditions: Predicate<T>[]): boolean;

/**
 * @param conditions
 *
 * @example
 * ```
 * notAll([isGt(0), isLt(4), Number.isInteger])(2.5);      // true
 * ```
 *
 * @category Logic
 */
export declare function notAll<T>(conditions: Predicate<T>[]): (data: T) => boolean;

/**
 * Returns true if one or more elements of the `data` array fails to pass the condition.
 *
 * @param data
 * @param condition
 *
 * @example
 * ```
 * notAllElements([2, 3, 4], isGt(3));    // true
 * notAllElements([2, 3, 4], isGt(1));    // false
 * ```
 *
 * @category Array
 */
export declare function notAllElements<I extends any[]>(data: I, condition: Predicate<ElementType<I>>): boolean;

/**
 * @param condition
 *
 * @example
 * ```
 * notAllElements(isGt(1))([2, 3, 4]);    // true
 * ```
 *
 * @category Array
 */
export declare function notAllElements<I extends any[]>(condition: Predicate<ElementType<I>>): (data: I) => boolean;

/**
 * Returns true if at least one value of the `data` object fails the `condition`
 * condition, otherwise false.
 *
 * @param data
 * @param condition
 *
 * @example
 * ```
 * notAllProps({ x: 5, y: 10 }, isGt(7));    // true
 * notAllProps({ x: 5, y: 10 }, isGt(0));    // false
 * ```
 *
 * @category Object
 */
export declare function notAllProps<I extends POJO<any>>(data: I, condition: Predicate<ValueType<I>>): boolean;

/**
 * @param condition
 *
 * @example
 * ```
 * notAllProps(isGt(7))({ x: 5, y: 10 });    // true
 * ```
 *
 * @category Object
 */
export declare function notAllProps<I extends POJO<any>>(condition: Predicate<ValueType<I>>): (data: I) => boolean;

/**
 * Indicates if the `data` is not strictly equal to `value`.
 *
 * You will likely need to use a type annotation if the types of the `data`
 * and `value` are different.
 *
 * @param data
 * @param value
 *
 * @example
 * ```
 * notEqual(5, 7);                // true
 * notEqual("a", "b");            // false
 * notEqual<unknown>(5, "5")      // true
 * ```
 *
 * @category Logic
 */
export declare function notEqual<T>(data: T, value: T): boolean;

/**
 * @param value
 *
 * @example
 * ```
 * notEqual(7)(5);         true
 * ```
 *
 * @category Logic
 */
export declare function notEqual<T>(value: T): (data: T) => boolean;

/**
 * Calculates the `n`th root of `data`. `n` must be an integer and at least 2,
 * or `NaN` will result.
 *
 * @param data
 * @param n
 *
 * @example
 * ```
 * nthRoot(8, 3);      // 2
 * nthRoot(-8, 3);     // -2
 * nthRoot(-8, 4):     // NaN
 * ```
 *
 * @category Math
 */
export declare function nthRoot(data: number, n: number): number;

/**
 * @param n
 *
 * @example
 * ```
 * nthRoot(3)(8);      // 2
 * ```
 *
 *
 */
export declare function nthRoot(n: number): (data: number) => number;

/**
 * If the string `data` is shorter than `length` characters, then adds copies of `chars`
 * to the left of the string until the string `length` is reached. If `chars` is more
 * than one character in length, the last copy will be truncated if necessary to reach
 * the exact target `length`.
 *
 * Returns the data unchanged if `length` is not an integer, or if `chars` is an
 * empty string.
 *
 * @param data
 * @param length
 * @param chars
 *
 * @example
 * ```
 * padLeft("ostrich", 10, ' ');    "   ostrich";
 * padLeft("ostrich", 5, ' ');     "ostrich";
 * padLeft("cat", 10, '123');      "1231231cat";
 * ```
 *
 * @category String
 */
export declare function padLeft(data: string | number, length: number, chars: string): string;

/**
 * @param length
 * @param chars
 *
 * @example
 * ```
 * padLeft(10, ' ')("ostrich");    "   ostrich";
 * ```
 *
 * @category String
 */
export declare function padLeft(length: number, chars: string): (data: string | number) => string;

/**
 * If the string `data` is shorter than `length` characters, then adds copies of `chars`
 * to the right of the string until the string `length` is reached. If `chars` is more
 * than one character in length, the last copy will be truncated if necessary to reach
 * the exact target `length`.
 *
 * Returns the data unchanged if `length` is not an integer, or if `chars` is an
 * empty string.
 *
 * @param data
 * @param length
 * @param chars
 *
 * @example
 * ```
 * padRight("ostrich", 10, ' ');    "ostrich   ";
 * padRight("ostrich", 5, ' ');     "ostrich";
 * padRight("cat", 10, '123');      "cat1231231";
 * ```
 *
 * @category String
 */
export declare function padRight(data: string | number, length: number, chars: string): string;

/**
 * @param length
 * @param chars
 *
 * @example
 * ```
 * padRight(10, ' ')("ostrich");    "ostrich   ";
 * ```
 *
 * @category String
 */
export declare function padRight(length: number, chars: string): (data: string | number) => string;

/**
 * Returns a new object consisting of only the portion of the `data` object with the specified `keys`.
 *
 * @param data
 * @param keys
 *
 * @example
 * ```ts
 * pick({ a: 1, b: 2, c: 3 }, ["a", "b"]);   // { a: 1, b: 2 }
 * ```
 *
 * @category Object
 */
export declare function pick<I extends POJO<any>, O = Partial<I>>(data: I, keys: (keyof I)[]): O;

/**
 * Returns a new object consisting of only the portion of the `data` object with the specified `keys`.
 *
 * @param keys
 *
 * @example
 * ```ts
 * pick(["a", "b"])({ a: 1, b: 2, c: 3 });   // { a: 1, b: 2 }
 * ```
 *
 * @category Object
 */
export declare function pick<I extends POJO<any>, O = Partial<I>>(keys: string[]): (data: I) => O;

/**
 * A plain object with string keys.
 */
declare type POJO<T> = Record<string, T>;

/**
 * Raises `data` to the power of `exponent`. This is a thin wrapper around
 * the built-in `Math.pow`, so it has the same limitations, such as being unable
 * to calculate non-integrer powers of negative bases. See {@link nthRoot} for
 * a function that addresses part of these limitations.
 *
 * @param data
 * @param exponent
 *
 * @example
 * ```
 * pow(4, 3);    // 64
 * ```
 *
 * @category Math
 */
export declare function pow(data: number, exponent: number): number;

/**
 * @param exponent
 *
 * @example
 * ```
 * pow(3)(4);    // 64
 * ```
 *
 * @category Math
 */
export declare function pow(exponent: number): (data: number) => number;

/**
 * A function that returns a boolean.
 */
declare type Predicate<I> = (x: I) => boolean;

/**
 * Returns a `data` the `value` array prepended. To prepend an element
 * (rather than another array) to an array instead, use {@link prependElement}.
 *
 * @param data
 * @param value
 *
 * @example
 * ```
 * prepend([2, 3, 4], [10, 11]);            // [10, 11, 2, 3, 4]
 * prepend("ostrich", "weasel");            // "weaselostrich"
 * ```
 *
 * @category Array
 * @category String
 */
export declare function prepend<I extends any[] | string>(data: I, value: I): I;

/**
 * @param value
 *
 * @example
 * ```
 * prepend([10, 11])([2, 3, 4]);            // [10, 11, 2, 3, 4]
 * prepend<string>("weasel")("ostrich")     // "weaselostrich"
 * ```
 *
 * @category Array
 * @category String
 */
export declare function prepend<I extends any[] | string>(value: I): (data: I) => I;

/**
 * Prepends the element to the end of the `data` array and returns a copy.
 * For strings, or to prepend an array to another array, use {@link prepend}.
 *
 * @param data
 * @param value
 *
 * @example
 * ```
 * prependElement([2, 3, 4], 10);            // [10, 2, 3, 4]
 * ```
 *
 * @category Array
 */
export declare function prependElement<I extends any[]>(data: I, value: ElementType<I>): I;

/**
 * @param value
 *
 * @example
 * ```
 * prependElement(10)([2, 3, 4]);            // [10, 2, 3, 4]
 * ```
 *
 * @category Array
 */
export declare function prependElement<I extends any[]>(value: ElementType<I>): (data: I) => I;

/**
 * Returns the product of an array of numbers, or if the array is empty, 1.
 *
 * @param data
 * @returns
 *
 * @example
 * ```
 * product([3, 5, 7]);          // 105
 * ```
 *
 * @category Array
 * @category Math
 */
export declare function product(data: number[]): number;

/**
 * Returns the value of an { x: 5 }ect property `key` if it exists, or the `fallback` value otherwise.
 *
 * @param data
 * @param key
 * @param fallback
 *
 * @example
 * ```
 * propOr({ x: 5, y: 10 }, "x", NaN);      // 5
 * propOr({ x: 5, y: 10 }, "z", NaN);      // NaN
 * ```
 *
 * @category Object
 */
export declare function propOr<I extends POJO<any>>(data: I, key: string, fallback: ValueType<I>): ValueType<I>;

/**
 * @param key
 * @param fallback
 *
 * @example
 * ```
 * propOr("x", NaN)({x: 5, y: 10});      // 5
 * ```
 *
 * @category Object
 */
export declare function propOr<I extends POJO<any>>(key: string, fallback: ValueType<I>): (data: I) => ValueType<I>;

/**
 * Returns true if an object property `key` exists and passes the `condition`, false otherwise.
 * @param data
 * @param key
 * @param condition
 *
 * @example
 * ```
 * propPasses({ x: 5 }, "x", x => x > 0);    // true
 * propPasses({ x: 5 }, "x", x => x < 0);    // false
 * ```
 *
 * @category Object
 */
export declare function propPasses<I extends POJO<any>>(data: I, key: string, condition: Predicate<ValueType<I>>): boolean;

/**
 * @param key
 * @param condition
 *
 * @example
 * ```
 * propPasses("x", x => x > 0)({ x: 5 });    // true
 * ```
 *
 * @category Object
 */
export declare function propPasses<I extends POJO<any>>(key: string, condition: Predicate<ValueType<I>>): (data: I) => boolean;

/**
 * A data-first counterpart to `Array.prototype.reduce`, but with more permissive typing than
 * the TS library uses out of the box, allowing the result to have a different type from
 * the `data` elements themselves.
 *
 * @remarks
 * The generic type implementation may be needed if `accumulator` has overloads.
 *
 * @param data
 * @param accumulator
 * @param initial
 *
 * @example
 * ```
 * reduce<number>([3, 5, 6], add, 0);                 // 14
 * reduce(
 *  ["cat", "ferret", "ostrich"],
 *  (acc: number, el: string) => el.length + acc,
 *  0
 * );                                                 // 16
 * ```
 *
 * @category Array
 */
export declare function reduce<I extends any[], O = ElementType<I>>(data: I, accumulator: Accumulator<I, O>, initial: O): O;

/**
 * @param accumulator
 * @param initial
 *
 * @example
 * ```
 * reduce(add, 0)([3, 5, 6]);                         // 14
 * ```
 *
 * @category Array
 */
export declare function reduce<I extends any[], O = ElementType<I>>(accumulator: Accumulator<I, O>, initial: O): (data: I) => O;

/**
 * A data-frst counterpart to `Array.prototype.reduceRight`, but with more permissive typing than
 * the TS library uses out of the box, allowing the result to have a different type from
 * the `data` elements themselves.
 *
 * @param data
 * @param accumulator
 * @param initial
 *
 * @example
 * ```
 * reduceRight(
 *  [3, 5, 6],
 *  (acc: number[], el: number) => acc = [...acc, el + last(acc)],
 *  [0]
 * );                  // [0, 6, 11, 14]
 * ```
 *
 * @category Array
 */
export declare function reduceRight<I extends any[], O = ElementType<I>>(data: I, accumulator: Accumulator<I, O>, initial: O): O;

/**
 * @param accumulator
 * @param initial
 *
 * @example
 * ```
 * reduceRight(
 *  (acc: number[], el: number) => [...acc, el + last(acc)!],
 *  [0]
 * )([3, 5, 6]);                  // [0, 6, 11, 14]
 * ```
 *
 * @category Array
 */
export declare function reduceRight<I extends any[], O = ElementType<I>>(accumulator: Accumulator<I, O>, initial: O): (data: I) => O;

/**
 * Replaces all instances of `target` in `data` with either a string `replacement` or a
 * transformed string if `target` is a function. If `target` is aregular expression,
 * the global flag will be added automatically if it isn't already there, since this function
 * always replaces all innstances.
 *
 * @param data
 * @param target
 * @param replacement
 *
 * @example
 * ```
 * replaceAll('ostriches', "s", _);                    // "o_triche_*
 * replaceAll('ostriches', /[aeiou]/, '_');            // "_str_ch_s*
 * replaceAll('ostriches', /[aeiou]/, s => s.toUpperCase);      // "OstrIchEs"
 * ```
 *
 * @category String
 */
export declare function replaceSubstrings(data: string, target: string | RegExp, replacement: string | ((s: string) => string)): string;

/**
 * @param target
 * @param replacement
 *
 * @example
 * ```
 * replaceAll("s", _)("ostriches");                    // "o_triche_*
 * ```
 *
 * @category String
 */
export declare function replaceSubstrings(target: string | RegExp, replacement: string | ((s: string) => string)): (data: string) => string;

/**
 * Returns a copy of the array in reversed order.
 *
 * @param data
 *
 * @example
 * ```
 * reverse([1, 2, 3]);      // [3, 2, 1]
 * ```
 *
 * @category Array
 */
export declare function reverse(data: any[]): any[];

/**
 * Rounds a number to `places` digits after the decimal. If `places` is negative,
 * rounding will be to `-places` digits before the decimal point, e.g., `places` of -2
 * will round to the nearest hundred. `places` must be an integer.
 *
 * @param data
 * @param places
 *
 * @example
 * ```
 * round(1469.278, 2);     // 1469.28
 * round(1469.278, 0);     // 1469
 * round(1469.278, -2);    // 1500
 * ```
 *
 * @category Math
 */
export declare function round(data: number, places: number): number;

/**
 * @param places
 *
 * @example
 * ```
 * round(2)(1469.278);     // 1469.28
 * ```
 *
 * @category Math
 */
export declare function round(places: number): (data: number) => number;

/**
 * Returns a copy of the array `data` with the element at `index` set to `value`.
 * A negative `index` will count backward from the end of the array.
 * If `index` is out of bounds or not an integer, returns an unaltered copy of `data`.
 *
 * @param data
 * @param index
 * @param value
 *
 * @example
 * ```
 * setElement([2, 3, 4], 0, 10);        // [10, 3, 4]
 * setElement([2, 3, 4], -1, 10);       // [2, 3, 10]
 * ```
 *
 * @category Array
 */
export declare function setElement<I extends any[]>(data: I, index: number, value: ElementType<I>): I;

/**
 * @param index
 * @param value
 *
 * @example
 * ```
 * setElement(0, 10)([2, 3, 4]);        // [10, 3, 4]
 * ```
 *
 * @category Array
 */
export declare function setElement<I extends any[]>(index: number, value: ElementType<I>): (data: I) => I;

/**
 * Returns a shallow copy of the portion of the `data` array or string beginning at index
 * `from` and ending with, but not including, the index `to`. Negative index values count
 * backward from the end of the arrry. Returns an empty array if `from` or `to` is not an
 * integer, or if `from` is out of the array bounds.
 *
 * @param data
 * @param from
 * @param to
 *
 * @example
 * ```
 * slice([2, 3, 4, 5, 6], 2, 4);            // [4, 5]
 * slice([2, 3, 4, 5, 6], 2, -1);           // [4, 5]
 * slice("ostrich", 2, 4);                  // "tr"
 * slice("ostrich", 2, -1);                 // "tr"
 * slice([2, 3, 4, 5, 6], -4, 10);          // [3, 4, 5, 6], going past end of array is OK)
 * slice([2, 3, 4, 5, 6], -10, 4);          // [], starting at -10 is non-sensical
 * ```
 *
 * @category Array
 * @category String
 */
export declare function slice<I extends any[] | string>(data: I, from: number, to: number): I;

/**
 * @param from
 * @param to
 *
 * @example
 * ```
 * slice(2, 4)([2, 3, 4, 5, 6]);            // [4, 5]
 * ```
 *
 * @category Array
 * @category String
 */
export declare function slice<I extends any[] | string>(from: number, to: number): (data: I) => I;

/**
 * Returns a shallow copy of the `data` array or string starting from index `from`.
 * A negative index counts backwards from the end of the array.
 * Returns an empty array if `from` is not an integer or is out of bounds.
 *
 * @param data
 * @param from
 *
 * @example
 * ```
 * sliceFrom([2, 3, 4], 2);        // [4]
 * sliceFrom([2, 3, 4], -2);       // [3, 4]
 * sliceFrom("ostrich", 2);        // "trich"
 * sliceFrom("ostrich", -2);       // "ch"
 * sliceFrom([2, 3, 4], 6);        // []
 * ```
 *
 * @category Array
 * @category String
 */
export declare function sliceFrom<I extends any[] | string>(data: I, from: number): I;

/**
 * @param from
 *
 * @example
 * ```
 * sliceFrom(2)([2, 3, 4]);        // [4]
 * ```
 *
 * @category Array
 * @category String
 */
export declare function sliceFrom<I extends any[] | string>(from: number): (data: I) => I;

/**
 * Return a shallow copy of the `data` array or string up to, but not including,
 * the index 'to`. Returns an empty array if `to` is not an integer.
 *
 * @param data
 * @param to
 *
 * @example
 * ```
 * sliceTo([2, 3, 4, 5], 2);     // [2, 3]
 * sliceTo([2, 3, 4, 5], -1);    // [2, 3, 4]
 * sliceTo([2, 3, 4, 5], 6);     // [2, 3, 4, 5]
 * sliceTo("ostrich", 2);        // "os"
 * sliceTo("ostrich", -2);       // "ostri"
 * sliceTo("ostrich", 10);       // "ostrich"
 * ```
 *
 * @category Array
 * @category String
 */
export declare function sliceTo<I extends any[] | string>(data: I, to: number): I;

/**
 * @param to
 *
 * @example
 * ```
 * sliceTo(2)([2, 3, 4, 5]);     // [2, 3]
 * ```
 *
 * @category Array
 * @category String
 */
export declare function sliceTo<I extends any[] | string>(to: number): (data: I) => I;

/**
 * Returns `true` if at least one of the `conditions` is true for the `data`.
 *
 * @param data
 * @param conditions
 *
 * @example
 * ```
 * some(2, [isLt(0), isGt(4), Number.isInteger]);      // true
 * some(2.5, [isLt(0), isGt(4), Number.isInteger]);    // false
 * ```
 *
 * @category Logic
 */
export declare function some<T>(data: T, conditions: Predicate<T>[]): boolean;

/**
 * @param conditions
 *
 * @example
 * ```
 * some([isLt(0), isGt(4), Number.isInteger])(2);      // true
 * ```
 *
 * @category Logic
 */
export declare function some<T>(conditions: Predicate<T>[]): (data: T) => boolean;

/**
 * Returns true if one or more elements of the `data` array pass the condition. Returns false for an empty array.
 *
 * @param data
 * @param condition
 *
 * @example
 * ```
 * someElements([2, 3, 4], isGt(3));    // true
 * someElements([2, 3, 4], isGt(5));    // false
 * ```
 *
 * @category Array
 */
export declare function someElements<I extends any[]>(data: I, condition: Predicate<ElementType<I>>): boolean;

/**
 * @param condition
 *
 * @example
 * ```
 * someElements(isGt(3))([2, 3, 4]);    // true
 * ```
 *
 * @category Array
 */
export declare function someElements<I extends any[]>(condition: Predicate<ElementType<I>>): (data: I) => boolean;

/**
 * Returns true if at least one value of the `data` object passes the `condition`
 * condition, otherwise false.
 *
 * @param data
 * @param condition
 *
 * @example
 * ```
 * someProps({ x: 5, y: 10 }, isGt(7));    // true
 * someProps({ x: 5, y: 10 }, isGt(15));    // false
 * ```
 *
 * @category Object
 */
export declare function someProps<I extends POJO<any>>(data: I, condition: Predicate<ValueType<I>>): boolean;

/**
 * @param condition
 *
 * @example
 * ```
 * someProps(isGt(7))({ x: 5, y: 10 });    // true
 * ```
 *
 * @category Object
 */
export declare function someProps<I extends POJO<any>>(condition: Predicate<ValueType<I>>): (data: I) => boolean;

/**
 * Sorts an array of strings alphabetically, ignoring punctuation.
 * and placing uppercase letters first.
 *
 * @param data
 *
 * @example
 * ```
 * sortAplhabetical(["a", "a c", "ab", "Ab"]);      // ["a", "Ab", "ab", "a c"]
 * ```
 *
 * @category Array
 */
export declare function sortAlphabetical(data: string[]): string[];

/**
 * Sorts an array of numbers in ascending order, wiith `NaN`s at the end.
 *
 * @param data
 *
 * @example
 * ```
 * sortNumeric([30, 6, 1, NaN, 200, 5]);      // [1, 5, 6, 30, 200, NaN]
 * ```
 *
 * @category Array
 */
export declare function sortNumeric(data: number[]): number[];

/**
 * Ways to specify spacing in {@link createArrayRange}
 */
declare type SpacingOption = {
    intervals: number;
} | {
    points: number;
} | {
    size: number;
};

/**
 * Splits the `data` string into an array of substrings based on the `separator`
 * string or regular expression. This is a wrapper around the built-in
 * `String.prototype.split` (but without the `limit` parameter), so it will exhibit
 * the same behavior for capturing groups, empty strings, etc. See the
 * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) for details.
 *
 * @param data
 * @param separator
 *
 * @example
 * ```
 * split("cat,dog", ",");                    // ['cat', 'dog']
 * split("cat,dog fox4pig", /[^a-z]+/i);      // ['cat', 'dog', 'fox', 'pig']
 * ```
 *
 * @category String
 */
export declare function split(data: string, separator: string | RegExp): string[];

/**
 * @param separator
 *
 * @example
 * ```
 * split(",")("cat,dog");                    // ['cat', 'dog']
 * ```
 *
 * @category String
 */
export declare function split(separator: string | RegExp): (data: string) => string[];

/**
 * Removes all white space characters (as identified by
 * the regular expression `\s`) from the string and
 * returns the result.
 *
 * @param data
 *
 * @example
 * ```
 * stripWhiteSpace(" os trich  ");        // "ostrich"
 * stripWhiteSpace(`ostr
 *    ich`);                              // "ostrich"
 * ```
 *
 * @category String
 */
export declare function stripWhiteSpace(data: string): string;

/**
 * Subtract `x` from `data`.
 *
 * @param data
 * @param x
 *
 * @example
 * ```
 * subtract(5, 3);     // 2
 * ```
 *
 * @category Math
 */
export declare function subtract(data: number, x: number): number;

/**
 * @param x
 *
 * @example
 * ```
 * subtract(3)(5);     // 2
 * ```
 *
 * @category Math
 */
export declare function subtract(x: number): (data: number) => number;

/**
 * Subtract `data` from `x`.
 *
 * @param data
 * @param x
 *
 * @example
 * ```
 * subtract(5, 3);     // -2
 * ```
 *
 * @category Math
 */
export declare function subtractFrom(data: number, x: number): number;

/**
 * @param x
 *
 * @example
 * ```
 * subtract(3)(5);     // -2
 * ```
 *
 * @category Math
 */
export declare function subtractFrom(x: number): (data: number) => number;

/**
 * Returns the sum of an array of numbers, or sero if the array is empty.
 *
 * @param data
 * @returns
 *
 * @example
 * ```
 * sum([3, 5, 7]);          // 15
 * ```
 *
 * @category Array
 * @category Math
 */
export declare function sum(data: number[]): number;

/**
 * Applies the `transform` function to each element in `data`,
 * then returns the sum of the transformed array.
 *
 * @param data
 * @param transform
 *
 * @example
 * ```
 * sumWith([1, 2, 3], pow(2));     // 14
 * ```
 *
 * @category Array
 * @category Math
 */
export declare function sumWith<I extends any[]>(data: I, transform: Fn<ElementType<I>, number>): number;

/**
 * @param transform
 *
 * @example
 * ```
 * sumWith(pow(2))([1, 2, 3]);     // 14
 * ```
 *
 * @category Array
 * @category Math
 */
export declare function sumWith<I extends any[]>(transform: Fn<ElementType<I>, number>): (data: I) => number;

/**
 * Converts a number to a string in hexadecimal form, or returns an empty string if
 * the number is not an non-negative integer.
 *
 * @param data
 *
 * @example
 * ```
 * toHex(24);     // "18"
 * toHex(2.4);    // ""
 * ```
 *
 * @category Math
 * @category String
 */
export declare function toHex(data: number): string;

/**
 * A thin wrapper around the built-in `String.prototype.trim` to facilitate
 * use in functional pipelines.
 *
 * @param data
 *
 * @example
 * ```
 * trim(" ostrich  ");             // "ostrich"
 * ```
 *
 * @category String
 */
export declare function trim(data: string): string;

/**
 * A thin wrapper around the built-in `String.prototype.trimStart` to facilitate
 * use in functional pipelines.
 *
 * @param data
 *
 * @example
 * ```
 * trimLeft(" ostrich  ");             // "ostrich  "
 * ```
 *
 * @category String
 */
export declare function trimLeft(data: string): string;

/**
 * A thin wrapper around the built-in `String.prototype.trimEnd` to facilitate
 * use in functional pipelines.
 *
 * @param data
 *
 * @example
 * ```
 * trimRight(" ostrich  ");             // " ostrich"
 * ```
 *
 * @category String
 */
export declare function trimRight(data: string): string;

/**
 * A thin wrapper around the built-in `String.prototype.toUpperCase` to facilitate
 * use in functional pipelines.
 * @param data
 * @returns
 *
 * @example
 * ```
 * upperCase('SCUBA Diver');     // 'SCUBA DIVER'
 * ```
 *
 * @category String
 */
export declare function upperCase(data: string): string;

/**
 * The type of a property in a POJO (plain JavaScript object).
 */
declare type ValueType<T extends POJO<any>> = T[keyof T];

export { }
