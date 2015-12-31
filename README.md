  # multidim-array-index

> maps multidimensional array indices to monodimensional array index

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## Install

With [npm](https://www.npmjs.com/) do

```
npm install multidim-array-index --save
```

## Usage

Signature is `(dimension, indices)` where
* **dimensions**: array that defines the shape of the multi dimensional array.
* **indices**: array of the indices to transform.
It returns the *index* of an equivalent mono dimensional array.

## Examples

All code in the examples below is intended to be contained into a [single file](https://github.com/fibo/multidim-array-index/blob/master/test.js).

```
var multiDimArrayIndex = require('multidim-array-index')
```

### 1-dim

```
var i3 = multiDimArrayIndex.bind(null, [3])

i3([0]) // 0
i3([1]) // 1
i3([2]) // 2
```

### 2-dim

```
var i2x2 = multiDimArrayIndex.bind(null, [2, 2])

i2x2([0, 0]) // 0
i2x2([0, 1]) // 1
i2x2([1, 0]) // 2
i2x2([1, 1]) // 3
```

### 3-dim

```
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

## License

[MIT](http://g14n.info/mit-license/)

