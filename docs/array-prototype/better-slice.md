# better Array.prototype.slice

Array.prototype.slice accepts one two numbers as arguments: `begin` and `end`. 
We extend it that accept a callback function instead of each number. 
We will find index with the callback function, then run slice. 
If nothing found, we will set the `begin` as `-Infinity` but `end` as `Infinity`, 
that means not slice. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/array-prototype/better-slice.js';

[ 0, 1, 2, 3, ].slice( x=> x > 0, );     // .slice( 1, );               [ 1, 2, 3, ]
[ 0, 1, 2, 3, ].slice( 0, x=> x > 2, );  // .slice( 0, 3, );            [ 0, 1, 2, ]
[ 0, 1, 2, 3, ].slice( 1, x=> x < 0, );  // .slice( 1, Infinity, );     [ 1, 2, 3, ]
[ 0, 1, 2, 3, ].slice( x=> x < 0, 3, );  // .slice( -Infinity, 3, );    [ 0, 1, 2, ]
```
