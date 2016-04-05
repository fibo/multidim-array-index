# multidim-array-index

> maps multidimensional array indices to monodimensional array index

**Table Of Contents:**

* [Installation](#installation)
* [Examples](#examples)
    - [1-dim](#1-dim)
    - [2-dim](#2-dim)
    - [3-dim](#3-dim)
* [API](#api)
* [License](#license)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## Installation

With [npm](https://www.npmjs.com/) do

```
npm install multidim-array-index
```

## Examples

All code in the examples below is intended to be contained into a [single file](https://github.com/fibo/multidim-array-index/blob/master/test.js).

```
var multiDimArrayIndex = require('multidim-array-index')
```

### 1-dim

In the monodimensional case, it just returns the index itself.

```javascript
var i3 = multiDimArrayIndex.bind(null, [3])

i3([0]) // 0
i3([1]) // 1
i3([2]) // 2
```

### 2-dim

For a two dimensional case, for instance a matrix, it is equivalent to the
function `(i, j, numCols) => j + i * numCols`

```javascript
var i2x3 = multiDimArrayIndex.bind(null, [2, 3])

i2x3([0, 0]) // 0
i2x3([0, 1]) // 1
i2x3([0, 2]) // 2
i2x3([1, 0]) // 3
i2x3([1, 1]) // 4
i2x3([1, 2]) // 5
```

### 3-dim

```javascript
var i2x2x2 = multiDimArrayIndex.bind(null, [2, 2, 2])

i2x2x2([0, 0, 0]) // 0
i2x2x2([0, 0, 1]) // 1
i2x2x2([0, 1, 0]) // 2
i2x2x2([0, 1, 1]) // 3
i2x2x2([1, 0, 0]) // 4
i2x2x2([1, 0, 1]) // 5
i2x2x2([1, 1, 0]) // 6
i2x2x2([1, 1, 1]) // 7
```

## API

### `multiDimArrayIndex(dimension, indices)`

* **@param** `{Array}` dimensions defines the shape of the multi dimensional array
* **@param** `{Array}` indices to transform
* **@returns** `{Number}` index of an equivalent mono dimensional array

Given dimensions `d_1, d_2, d_3 .. d_n` and indices `i_1, i_2, i_3 .. i_n` index
is computed by formula

```
index = i_n + i_(n-1) * d_n + i_(n-2) * d_n * d_(n-1) + ... + i_2 * d_n * d_(n-1) * ... * d_3 + i_1 * d_n * ... * d_2
```

### `multiDimArrayIndex.error`

An object exposing the following error messages:

* outOfBoundIndex

For example, the following snippets will throw

```javascript
// outOfBoundIndex

i3([11])
i2x2x2([1, 2, 3])
```

## License

[MIT](http://g14n.info/mit-license/)

