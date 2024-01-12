import { describe, expect, it } from "vitest";
import { slice } from "../src/slice";

const arr = [3, 4, 5, 6, 7];
const str = "abcde";

describe("slice", () => {
  it("handles arrays with valid slices", () => {
    expect(slice(arr, { from: 2 })).toEqual([5, 6, 7]);
    expect(slice(arr, { from: -2 })).toEqual([6, 7]);
    expect(slice(arr, { from: 1, to: 3 })).toEqual([4, 5]);
    expect(slice(arr, { from: -5, to: -3 })).toEqual([3, 4]);
    expect(slice(arr, { to: 4 })).toEqual([3, 4, 5, 6]);
    expect(slice(arr, { from: -5, to: 10 })).toEqual([3, 4, 5, 6, 7]);
    expect(slice({ from: 2 })(arr)).toEqual([5, 6, 7]);
  });

  it("returns empty arrays for invalid slices", () => {
    expect(slice(arr, { from: 7 })).toEqual([]);
    expect(slice(arr, { to: 0 })).toEqual([]);
    expect(slice(arr, { to: 2, from: 7 })).toEqual([]);
    expect(slice(arr, { to: 2, from: 2.5 })).toEqual([]);
    expect(slice(arr, { to: 2.5, from: 2 })).toEqual([]);
  });

  it("handles strings with valid slices", () => {
    expect(slice(str, { from: 2 })).toEqual("cde");
    expect(slice(str, { from: -2 })).toEqual("de");
    expect(slice(str, { from: 1, to: 3 })).toEqual("bc");
    expect(slice(str, { from: -5, to: -3 })).toEqual("ab");
    expect(slice(str, { to: 4 })).toEqual("abcd");
    expect(slice(str, { from: -5, to: 10 })).toEqual("abcde");
    expect(slice({ from: 2 })(str)).toEqual("cde");
  });

  it("returns empty strings for invalid slices", () => {
    expect(slice(str, { from: 7 })).toEqual("");
    expect(slice(str, { to: 0 })).toEqual("");
    expect(slice(str, { to: 2, from: 7 })).toEqual("");
    expect(slice(str, { to: 2, from: 2.5 })).toEqual("");
    expect(slice(str, { to: 2.5, from: 2 })).toEqual("");
  });
});
