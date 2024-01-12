import { describe, expect, it } from "vitest";
import { chain } from "../src/Chain";

describe("chain", () => {
  const double = (x: number) => x * 2;

  it("handles then and finally", () => {
    expect(chain(5).then(double).then(double).finally(double)).toBe(40);
  });

  it("handles if", () => {
    expect(chain(5).if(Number.isInteger, double).finally(double)).toBe(20);
    expect(chain(5.5).if(Number.isInteger, double).finally(double)).toBe(11);
    expect(chain(5).if(5, double).finally(double)).toBe(20);
    expect(chain(6).if(5, double).finally(double)).toBe(12);
  });

  it("handles ifNot", () => {
    expect(chain(5).ifNot(Number.isInteger, double).finally(double)).toBe(10);
    expect(chain(5.5).ifNot(Number.isInteger, double).finally(double)).toBe(22);
    expect(chain(5).ifNot(5, double).finally(double)).toBe(10);
    expect(chain(6).ifNot(5, double).finally(double)).toBe(24);
  });

  it("handles ifElse", () => {
    expect(chain(5).ifElse(Number.isInteger, double, 100).finally(double)).toBe(
      20
    );
    expect(
      chain(5.5).ifElse(Number.isInteger, double, 100).finally(double)
    ).toBe(200);
    expect(chain(5).ifElse(5, double, 100).finally(double)).toBe(20);
    expect(chain(6).ifElse(5, double, 100).finally(double)).toBe(200);
  });

  it("handles finallyIf", () => {
    expect(chain(5).finallyIf(10, double)).toBe(5);
    expect(chain(10).finallyIf(10, double)).toBe(20);
    expect(chain(10).finallyIf<number>((x) => x > 0, -100)).toBe(-100);
    expect(chain(-10).finallyIf<number>((x) => x > 0, -100)).toBe(-10);
  });

  it("handles finallyIfNot", () => {
    expect(chain(6).finallyIfNot(10, double)).toBe(12);
    expect(chain(10).finallyIfNot(10, double)).toBe(10);
    expect(chain(10).finallyIfNot<number>((x: number) => x > 0, -100)).toBe(10);
    expect(chain(-10).finallyIfNot<number>((x: number) => x > 0, -100)).toBe(
      -100
    );
  });

  it("handles finallyIfElse", () => {
    expect(chain(6).finallyIfElse(10, 0, double)).toBe(12);
    expect(chain(10).finallyIfElse(10, 0, double)).toBe(0);
    expect(chain(10).finallyIfElse((x: number) => x > 0, double, -100)).toBe(
      20
    );
    expect(chain(-10).finallyIfElse((x: number) => x > 0, double, -100)).toBe(
      -100
    );
  });
});
