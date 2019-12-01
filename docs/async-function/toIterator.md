# GeneratorFunction.toIterator

Convert everything into a iterator.

## Usage

```javascript
import 'https://better-js.fenz.land/src/docs/generator-function/toIterator.js';

toIterator( function *(){ yield* [ 0, 1, 2, ]; }, );              // iterator with [ 0, 1, 2, ]
toIterator( { *[Symbol.iterator](){ yield* [ 0, 1, 2, ]; }, }, ); // iterator with [ 0, 1, 2, ]
toIterator( [ 0, 1, 2, ], );                                      // iterator with [ 0, 1, 2, ]
toIterator( '012', );                                             // iterator with [ '0', '1', '2', ]
toIterator( 0, );                                                 // iterator with [ 0, ]
toIterator( undefined, );                                         // iterator with []
```
