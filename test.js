'use strict'

const assert = require('assert')
const equals = require('equals')
const ownValues = require('.')

describe('ownValues()', function () {
  it('should return an array of values', function () {
    assert(equals(ownValues({a: 1}), [1]))
  })

  it('should include non-enumerable values', function () {
    const obj = {a: 1}
    Object.defineProperty(obj, 'b', {enumerable: false, value: 2})
    assert(equals(Object.values(obj), [1]))
    assert(equals(ownValues(obj), [1, 2]))
  })
})
