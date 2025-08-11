# Zootils

This is an early stage release that I'm using in personal projects. The docs aren't yet as fully polished
as I would like for a public project, but if I'm using it as is, I'd might as well release it so you can too.
After it's a little more battle-tested, I plan to bump the version to 1.0.

## Introduction

Zootils is a utility library for Typescript. Except for the unary functions,
all functions can be called two ways, as inspired by the [Remeda](https://remedajs.com) library.
The functions can be called data-first, or they can return a unary function whose parameter will be the data.
The latter makes them useful in the functional programming style.

## Installation

```
npm install zootils
```

## Basic Usage

```ts
import { add } from "zootils";

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
