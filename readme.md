# own-values

Like `Object.values()`, but includes non-enumerable properties, analogous to `Reflect.ownKeys()`.

## Installation

Requires [Node.js](https://nodejs.org/) 6.0.0 or above.

```bash
npm i own-values
```

## API

The module exports a single function.

### Parameter

`obj` (object)

### Return Value

An array of the object’s values.

## Example

```javascript
const ownValues = require('own-values')

ownValues({key: 'value'}) // ['value']
```

## Related

* [own-entries](https://github.com/lamansky/own-entries): The “entries” version of this module.
* [values-array](https://github.com/lamansky/values-array) / [values-iterator](https://github.com/lamansky/values-iterator): Returns an array/iterator of the values of an Array, Iterator, Object, Map, Set, or Typed Array.
