# better entries, keys and values of Array

_This feature makes breaking change, not included in *breaking-free* version_

The standard `entries`, `keys` and `values` methods of arrays absurdly return useless iterators. 
You cannot do anything with them but use `...` to convert them into arrays. 
We make them return arrays directly just like `Object.entries`, `Object.keys` and `Object.values` do.  

## Usage

```javascript
import 'https://better-js.fenz.land/src/array-prototype/better-entries.js';

const array= [ 'a', 'b', 'c', ];

array.entries(); // [ [ 0, 'a', ], [ 1, 'b', ], [ 2, 'c', ], ]
array.keys();    // [ 0, 1, 2, ]
array.values();  // [ 'a', 'b', 'c', ]
```
