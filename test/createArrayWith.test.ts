import { describe, expect, it } from "vitest";
import { createArrayWith } from "../src/createArrayWith";

describe("createArrayWith", () => {
  it("makes array of constants", () => {
    expect(createArrayWith(4, 5)).toEqual([5, 5, 5, 5]);
  });

  it("makes array from function", () => {
    expect(createArrayWith(3, (i) => i ** 2)).toEqual([0, 1, 4]);
  });

  it("returns empty array for zero or invalid length", () => {
    expect(createArrayWith(0, 6)).toEqual([]);
    expect(createArrayWith(2.5, 6)).toEqual([]);
    expect(createArrayWith(-2, 6)).toEqual([]);
  });
});
