# Zootils

Zootils is a utility library for Typescript. Except for the unary functions,
all functions can be called in a data-first form, or they can be called without the
data to return a function whose one parameter will be the data. This pattern was
inspired by the [Remeda](https://remedajs.com) library.

```ts
// Data-first

add(3, 5);      // 8

// Returning a function

const add5 = add(5);
add5(3);        // 8
```

## Design Principles


