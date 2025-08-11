import { createArrayWith } from ".";

/**
 * Ways to specify spacing in {@link createArrayRange}
 */
type SpacingOption =
  | { intervals: number }
  | { points: number }
  | { size: number };

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
export function createArrayRange(
  start: number,
  end: number,
  spacing: SpacingOption
) {
  let count = NaN;

  if ("intervals" in spacing) {
    count = intervalSpacing(spacing);
  } else if ("points" in spacing) {
    count = pointSpacing(spacing);
  } else if ("size" in spacing) {
    count = sizeSpacing(spacing, start, end);
  }

  return isNaN(count) ? [] : getRangeFromCount(start, end, count);
}

// HELPERS

function intervalSpacing(s: { intervals: number }): number {
  return Number.isInteger(s.intervals) && s.intervals >= 1
    ? s.intervals + 1
    : NaN;
}

function pointSpacing(s: { points: number }): number {
  return Number.isInteger(s.points) && s.points >= 2 ? s.points : NaN;
}

function sizeSpacing(
  s: { size: number },
  start: number,
  end: number
): number {
  return s.size > 0
    ? Math.max(Math.round(Math.abs((end - start) / s.size) + 1), 2)
    : NaN;
}

const getRangeFromCount = (
  start: number,
  end: number,
  count: number
) => {
  const interval = (end - start) / (count - 1);
  const result = createArrayWith(
    count,
    (i: number) => start + i * interval
  );
  result[result.length - 1] = end; // prevents rounding issues at end
  return result;
};

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  it("returns correct array given interval count", () => {
    expect(createArrayRange(2, 22, { intervals: 5 })).toEqual([
      2, 6, 10, 14, 18, 22,
    ]);
  });

  it("returns correct array given point count", () => {
    expect(createArrayRange(2, 22, { points: 5 })).toEqual([
      2, 7, 12, 17, 22,
    ]);
  });

  it("returns correct array given size", () => {
    expect(createArrayRange(2, 22, { size: 4.05 })).toEqual([
      2, 6, 10, 14, 18, 22,
    ]);
    expect(createArrayRange(2, 22, { size: 100 })).toEqual([2, 22]);
    expect(createArrayRange(2, 22, { size: 20 })).toEqual([2, 22]);
  });

  it("returns empty arrays for invalid input", () => {
    expect(createArrayRange(2, 22, { points: 1 })).toEqual([]);
    expect(createArrayRange(2, 22, { points: 1.5 })).toEqual([]);
    expect(createArrayRange(2, 22, { intervals: 0 })).toEqual([]);
    expect(createArrayRange(2, 22, { intervals: 1.5 })).toEqual([]);
  });
}
