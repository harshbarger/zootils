// src/Chain.ts
var Chain = class _Chain {
  constructor(value) {
    this.value = value;
  }
  doTransform(transform) {
    return transform instanceof Function ? transform(this.value) : transform;
  }
  conditionPasses(condition) {
    return condition instanceof Function ? condition(this.value) : condition === this.value;
  }
  inspect() {
    console.log(this.value);
    return this;
  }
  then(transform) {
    return new _Chain(this.doTransform(transform));
  }
  finally(transform) {
    return this.doTransform(transform);
  }
  // <U extends T extends U ? unknown : never> ensures U is a supertype of T.
  if(condition, transform) {
    return this.conditionPasses(condition) ? new _Chain(this.doTransform(transform)) : this;
  }
  ifNot(condition, transform) {
    return this.conditionPasses(condition) ? this : new _Chain(this.doTransform(transform));
  }
  ifElse(condition, ifTransform, elseTransform) {
    const result = this.conditionPasses(condition) ? this.doTransform(ifTransform) : this.doTransform(elseTransform);
    return new _Chain(result);
  }
  finallyIf(condition, transform) {
    return this.conditionPasses(condition) ? this.doTransform(transform) : this.value;
  }
  finallyIfNot(condition, transform) {
    return this.conditionPasses(condition) ? this.value : this.doTransform(transform);
  }
  finallyIfElse(condition, ifTransform, elseTransform) {
    return this.conditionPasses(condition) ? this.doTransform(ifTransform) : this.doTransform(elseTransform);
  }
};
function chain(value) {
  return new Chain(value);
}

// src/Match.ts
var NO_MATCH_YET = "__NO_MATCH_YET__";
var Match = class {
  value;
  result;
  constructor(value) {
    this.value = value;
    this.result = NO_MATCH_YET;
  }
  doTransform(transform) {
    return transform instanceof Function ? transform(this.value) : transform;
  }
  conditionPasses(condition) {
    return condition instanceof Function ? condition(this.value) : condition === this.value;
  }
  when(condition, transform) {
    if (this.result === NO_MATCH_YET) {
      const conditionsPass = Array.isArray(condition) ? condition.some((c) => this.conditionPasses(c)) : this.conditionPasses(condition);
      if (conditionsPass) {
        this.result = this.doTransform(transform);
      }
    }
    return this;
  }
  otherwise(transform) {
    if (this.result === NO_MATCH_YET) {
      this.result = this.doTransform(transform);
    }
    return this.result;
  }
};
function match(value) {
  return new Match(value);
}

// src/internals.ts
function getAdjustedIndex(value, i, allowed = "onlyInBounds") {
  if (i < -value.length || !Number.isInteger(i) || allowed === "inBoundsOrOnePast" && i > value.length || allowed === "onlyInBounds" && i >= value.length) {
    return NaN;
  }
  return i >= 0 ? i : value.length + i;
}
function purry(fn, ...args) {
  if (args.length === fn.length) {
    return fn(...args);
  }
  return (data) => fn(data, ...args);
}

// src/slice.ts
function _slice(data, interval) {
  const { from, to } = { from: 0, to: Number.MAX_SAFE_INTEGER, ...interval };
  const start = getAdjustedIndex(data, from);
  const end = getAdjustedIndex(data, to, "inBoundsOrLarger");
  if (isNaN(start) || isNaN(end)) {
    return typeof data === "string" ? "" : [];
  }
  const copy = structuredClone(data);
  return copy.slice(start, end);
}
function slice(...args) {
  return purry(_slice, ...args);
}
export {
  Chain,
  Match,
  chain,
  match,
  slice
};
