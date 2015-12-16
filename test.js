var multiDimArrayIndex = require('./index')
var test = require('tape')

test('1-dim', function (t) {
  t.plan(3)

  var i3 = multiDimArrayIndex.bind(null, [3])

  t.equal(i3([0]), 0)
  t.equal(i3([1]), 1)
  t.equal(i3([2]), 2)
})

test('2-dim', function (t) {
  t.plan(4)

  var i2x2 = multiDimArrayIndex.bind(null, [2, 2])

  t.equal(i2x2([0, 0]), 0)
  t.equal(i2x2([0, 1]), 1)
  t.equal(i2x2([1, 0]), 2)
  t.equal(i2x2([1, 1]), 3)
})

test('3-dim', function (t) {
  t.plan(8)

  var i2x2x2 = multiDimArrayIndex.bind(null, [2, 2, 2])

  t.equal(i2x2x2([0, 0, 0]), 0)
  t.equal(i2x2x2([0, 0, 1]), 1)
  t.equal(i2x2x2([0, 1, 0]), 2)
  t.equal(i2x2x2([0, 1, 1]), 3)
  t.equal(i2x2x2([1, 0, 0]), 4)
  t.equal(i2x2x2([1, 0, 1]), 5)
  t.equal(i2x2x2([1, 1, 0]), 6)
  t.equal(i2x2x2([1, 1, 1]), 7)
})
