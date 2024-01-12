import { getAdjustedIndex, purry } from "./internals";

type Interval = Partial<{
  from: number;
  to: number;
}>;

export function _slice<I extends any[] | string>(data: I, interval: Interval) {
  const { from, to } = { from: 0, to: Number.MAX_SAFE_INTEGER, ...interval };
  const start = getAdjustedIndex(data, from);
  const end = getAdjustedIndex(data, to, "inBoundsOrLarger");

  if (isNaN(start) || isNaN(end)) {
    return (typeof data === "string" ? "" : []) as I;
  }

  const copy = structuredClone(data);
  return copy.slice(start, end) as I;
}

export function slice(data: string, interval: Interval): string;
export function slice<I extends any[]>(data: I, interval: Interval): I;
export function slice<I extends string | any[]>(
  interval: Interval
): (data: I) => I;
export function slice(...args: any[]) {
  return purry(_slice, ...args);
}
