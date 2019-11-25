# better entries, keys and values of Map and Set

_This feature makes breaking change, not included in *breaking-free* version_

The standard `entries`, `keys` and `values` methods of maps and sets absurdly return useless iterators. 
You cannot do anything with them but use `...` to convert them into arrays. 
We make them return arrays directly just like `Object.entries`, `Object.keys` and `Object.values` do.  

## Usage

```javascript
import 'https://better-js.fenz.land/src/map-and-set/better-entries.js';

const map= new Map( [ 'foo', 1, ], [ 'bar', 6, ], );

map.entries(); // [ [ 'foo', 1, ], [ 'bar', 6, ], ]
map.keys();    // [ 'foo', 'bar', ]
map.values();  // [ 1, 6, ]

const set= new Set( [ 'foo', 'bar', ], );

set.entries(); // [ [ 'foo', 'foo', ], [ 'bar', 'bar', ], ]
set.keys();    // [ 'foo', 'bar', ]
set.values();  // [ 'foo', 'bar', ]
```
