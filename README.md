# multidim-array-index

> map multidimensional array indices to monodimensional array index

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## Example

All code in the examples below is intended to be contained into a [single file](https://github.com/fibo/multidim-array-index/blob/master/test.js).

```
// 1-dim

var i3 = multiDimArrayIndex.bind(null, [3])

i3([0]) // 0
i3([1]) // 1
i3([2]) // 2

// 2-dim
var i2x2 = multiDimArrayIndex.bind(null, [2, 2])

i2x2([0, 0]) // 0
i2x2([0, 1]) // 1
i2x2([1, 0]) // 2
i2x2([1, 1]) // 3

// 3-dim
var i2x2x2 = multiDimArrayIndex.bind(null, [2, 2, 2])

i2x2x2([0, 0, 0]) // 0
```

