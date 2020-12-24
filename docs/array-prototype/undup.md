# Array.prototype.undup Array.prototype.unduped Array.prototype.nodup

BetterJS provide a `undup` method (means unduplicate) to remove duplicate items from an array;
`unduped` (means unduplicated) return a new array instead of modify the old one;
`nodup` (means no duplicate) to check whether an array has duplicate items. 

# Usage

```javascript
import 'https://better-js.fenz.land/src/array-prototype/undup.js';

const array= [ 0, 1, 0, 2, 3, ];

console.log( array.unduped(), ) // [ 0, 1, 2, 3, ]

console.log( array, ) // [ 0, 1, 0, 2, 3, ]

console.log( array.nodup(), ) // false

array.undup() // return array itself that changed

console.log( array, ) // [ 0, 1, 2, 3, ]

console.log( array.nodup(), ) // true
```
