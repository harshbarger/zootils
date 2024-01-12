import { describe, expect, it } from "vitest";
import { match } from "../src/match";

describe("match", () => {
  const double = (x: number) => x * 2;
  const addFive = (x: number) => x + 5;
  const isPositive = (x: number) => x > 0;

  it("detects and handles equality to primitives", () => {
    expect(match(10).when(10, double).when(0, addFive).otherwise(-2)).toBe(20);
    expect(match(0).when(10, double).when(0, addFive).otherwise(-2)).toBe(5);
    expect(match(100).when(10, double).when(0, addFive).otherwise(-2)).toBe(-2);
  });

  it("handles single predicates", () => {
    expect(
      match(10).when(isPositive, 4).when(Number.isInteger, 20).otherwise(double)
    ).toBe(4);
    expect(
      match(-10)
        .when(isPositive, 4)
        .when(Number.isInteger, 20)
        .otherwise(double)
    ).toBe(20);
    expect(
      match(-10.4)
        .when(isPositive, 4)
        .when(Number.isInteger, 20)
        .otherwise(double)
    ).toBe(-20.8);
  });

  it("handles arrays of conditions", () => {
    expect(
      match(-10)
        .when([-10, isPositive], "a")
        .otherwise((x) => x.toString())
    ).toBe("a");
    expect(
      match(4)
        .when([-10, isPositive], "a")
        .otherwise((x) => x.toString())
    ).toBe("a");
    expect(
      match(-4)
        .when([-10, isPositive], "a")
        .otherwise((x) => x.toString())
    ).toBe("-4");
  });
});
