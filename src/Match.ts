const NO_MATCH_YET = "__NO_MATCH_YET__";

export class Match<T, U = T> {
  value: T;
  result: U | typeof NO_MATCH_YET;

  constructor(value: T) {
    this.value = value;
    this.result = NO_MATCH_YET;
  }

  private doTransform<U>(transform: Transform<T, U>) {
    return transform instanceof Function ? transform(this.value) : transform;
  }

  private conditionPasses(condition: Condition<T>) {
    return condition instanceof Function
      ? condition(this.value)
      : condition === this.value;
  }

  when(
    condition: Condition<T> | Condition<T>[],
    transform: Transform<T, U>
  ): Match<T, U> {
    if (this.result === NO_MATCH_YET) {
      const conditionsPass = Array.isArray(condition)
        ? condition.some((c) => this.conditionPasses(c))
        : this.conditionPasses(condition);

      if (conditionsPass) {
        this.result = this.doTransform(transform);
      }
    }

    return this;
  }

  otherwise(transform: Transform<T, U | typeof NO_MATCH_YET>): U {
    if (this.result === NO_MATCH_YET) {
      this.result = this.doTransform(transform);
    }

    return this.result as U;
  }
}

/**
 * Convenience function to allow creation of `Match` object without the `new` keyword.
 *
 * @example
 * ```
 * // The following are equivalent.
 *
 * const x = match(5).when(x => x > 0, "positive").when(0, "zero").otherwise("negative");
 * const x = new Match(5).when(x => x > 0, "positive").when(0, "zero").otherwise("negative");
 * ```
 *
 * @param value
 * @returns
 */
export function match<T, U = T>(value: T): Match<T, U> {
  return new Match(value);
}
