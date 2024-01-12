/**
 * A class-based counterpart to the pipe function found in many functional libraries,
 * with some convenience methods.
 *
 * // TODO: explain need to add type annotations sometimes, e.g.,
 *
 * chain(10).finallyIf<number>((x) => x > 0, -100)
 * chain(-10).finallyIf<number | string>((x) => x > 0, "-100")
 *
 * @example
 * ```
 * // TODO
 * ```
 */
export class Chain<T> {
  constructor(private value: T) {}

  private doTransform<U>(transform: Transform<T, U>): U {
    return transform instanceof Function ? transform(this.value) : transform;
  }

  private conditionPasses(condition: Condition<T>) {
    return condition instanceof Function
      ? condition(this.value)
      : condition === this.value;
  }

  inspect(): Chain<T> {
    console.log(this.value);
    return this;
  }

  then<U>(transform: Transform<T, U>): Chain<U> {
    return new Chain(this.doTransform(transform));
  }

  finally<U>(transform: Transform<T, U>): U {
    return this.doTransform(transform);
  }

  // <U extends T extends U ? unknown : never> ensures U is a supertype of T.

  if<U extends T extends U ? unknown : never>(
    condition: Condition<T>,
    transform: Transform<T, U>
  ): Chain<U> {
    return this.conditionPasses(condition)
      ? new Chain(this.doTransform(transform))
      : (this as unknown as Chain<U>);
  }

  ifNot<U extends T extends U ? unknown : never>(
    condition: Condition<T>,
    transform: Transform<T, U>
  ): Chain<U> {
    return this.conditionPasses(condition)
      ? (this as unknown as Chain<U>)
      : new Chain(this.doTransform(transform));
  }

  ifElse<U>(
    condition: Condition<T>,
    ifTransform: Transform<T, U>,
    elseTransform: Transform<T, U>
  ): Chain<U> {
    const result = this.conditionPasses(condition)
      ? this.doTransform(ifTransform)
      : this.doTransform(elseTransform);
    return new Chain(result);
  }

  finallyIf<U extends T extends U ? unknown : never>(
    condition: Condition<T>,
    transform: Transform<T, U>
  ): U {
    return this.conditionPasses(condition)
      ? this.doTransform(transform)
      : (this.value as unknown as U);
  }

  finallyIfNot<U extends T extends U ? unknown : never>(
    condition: Condition<T>,
    transform: Transform<T, U>
  ): U {
    return this.conditionPasses(condition)
      ? (this.value as unknown as U)
      : this.doTransform(transform);
  }

  finallyIfElse<U>(
    condition: Condition<T>,
    ifTransform: Transform<T, U>,
    elseTransform: Transform<T, U>
  ): U {
    return this.conditionPasses(condition)
      ? this.doTransform(ifTransform)
      : this.doTransform(elseTransform);
  }
}

/**
 * Convenience function to allow creation of `Chain` object without the `new` keyword.
 *
 * @example
 * ```
 * // The following are equivalent.
 *
 * const x = chain(5).then(add(3)).finally(multiply(2));
 * const x = new Chain(5).then(add(3)).finally(multiply(2));
 * ```
 *
 * @param value
 * @returns
 */
export function chain<T>(value: T): Chain<T> {
  return new Chain(value);
}
