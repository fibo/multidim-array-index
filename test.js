var multiDimArrayIndex = require('./index')
var test = require('tape')

var error = multiDimArrayIndex.error

var i3 = multiDimArrayIndex.bind(null, [3])
var i2x3 = multiDimArrayIndex.bind(null, [2, 3])
var i2x2x2 = multiDimArrayIndex.bind(null, [2, 2, 2])

test('1-dim', function (t) {
  t.plan(3)

  t.equal(i3([0]), 0)
  t.equal(i3([1]), 1)
  t.equal(i3([2]), 2)
})

test('2-dim', function (t) {
  t.plan(6)

  t.equal(i2x3([0, 0]), 0)
  t.equal(i2x3([0, 1]), 1)
  t.equal(i2x3([0, 2]), 2)
  t.equal(i2x3([1, 0]), 3)
  t.equal(i2x3([1, 1]), 4)
  t.equal(i2x3([1, 2]), 5)
})

test('3-dim', function (t) {
  t.plan(8)

  t.equal(i2x2x2([0, 0, 0]), 0)
  t.equal(i2x2x2([0, 0, 1]), 1)
  t.equal(i2x2x2([0, 1, 0]), 2)
  t.equal(i2x2x2([0, 1, 1]), 3)
  t.equal(i2x2x2([1, 0, 0]), 4)
  t.equal(i2x2x2([1, 0, 1]), 5)
  t.equal(i2x2x2([1, 1, 0]), 6)
  t.equal(i2x2x2([1, 1, 1]), 7)
})

test('Errors', function (t) {
  t.plan(2)

  t.throws(function () {
    i3([11])
  }, new RegExp(error.outOfBoundIndex))

  t.throws(function () {
    i2x2x2([1, 2, 3])
  }, new RegExp(error.outOfBoundIndex))
})
