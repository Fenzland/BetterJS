# Array.prototype.dig and Array.prototype.digLast

The `find` and `seek` can only return an item of array. 
But the `dig` returns the value returned by your callback function if it is not undefined. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/array-prototype/finding.js';

const obj= { bar:null, baz:0, }

[ 'foo', 'bar', 'baz', 'qux' ].dig( x=> obj[x], );     // null
[ 'foo', 'bar', 'baz', 'qux' ].digLast( x=> obj[x], ); // 0
```
