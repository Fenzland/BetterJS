# Array.prototype.seek and Array.prototype.seekLast

There is a problem with the `Array.prototype.find`, you cannot set a default value when nothing found. 
If the function returns a `undefined`, you won't know it's a find result or means not found. 
So here are `seek` and `seekLast`, the second parameter is the default value when nothing found. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/array-prototype/finding.js';

[ 0, 1, 2, 3, ].seek( x=> x > 1, 6, );     // 2
[ 0, 1, 2, 3, ].seek( x=> x > 3, 6, );     // 6

[ 0, 1, 2, 3, ].seekLast( x=> x > 1, 6, ); // 3
[ 0, 1, 2, 3, ].seekLast( x=> x > 3, 6, ); // 6
```
