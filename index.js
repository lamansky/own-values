'use strict'

module.exports = obj => Reflect.ownKeys(obj).map(k => obj[k])
