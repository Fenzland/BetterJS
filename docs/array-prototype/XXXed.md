# non-modifying methods on Array.prototype

We provide non-modifying version for each self modifing methods. They are:

* popped
* shifted
* unshifted
* pushed
* spliced
* reversed
* sorted
* shuffled

## Usage

```javascript
// import 'https://better-js.fenz.land/src/array-prototype/mapAndFilter.js';

[ 0, 1, 2, 3, ].popped();                     // [ 0, 1, 2, ]
[ 0, 1, 2, 3, ].shifted();                    // [ 1, 2, 3, ]
[ 0, 1, 2, 3, ].unshifted( 4, );              // [ 4, 0, 1, 2, ]
[ 0, 1, 2, 3, ].pushed( 4, );                 // [ 1, 2, 3, 4, ]
[ 0, 1, 2, 3, ].spliced( 1, 2, 4, );          // [ 0, 4, 3, ]
[ 0, 1, 2, 3, ].reversed();                   // [ 3, 2, 1, 0, ]
[ 3, 1, 0, 2, ].sorted( ( x, y, )=> x - y, ); // [ 0, 1, 2, 3, ]
[ 0, 1, 2, 3, ].shuffled();                   // maybe [ 1, 3, 0, 2, ]
```

