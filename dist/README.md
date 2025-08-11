# Zootils

This is an early stage release that the author is using in personal projects. It isn't fully polished
for the public yet, but you're welcome to use it if you wish.

## Introduction

Zootils is a utility library for Typescript. Except for the unary functions,
all functions can be called two ways, as inspired by the [Remeda](https://remedajs.com) library.
The functions can be called data-first, or they can return a unary function whose parameter will be the data.
The latter makes them useful in the functional programming style.

```ts
// Data-first

add(3, 5); // 8

// Returning a function

const add5 = add(5);
add5(3); // 8
```

## Documentation

See the [docs](https://harshbarger.github.io/zootils/modules/src.html) for individual function documentation.

## License

[BSD 3 Clause](https://github.com/harshbarger/zootils/blob/main/LICENSE.md)
