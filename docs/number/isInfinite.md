# Number.isInfinite

There is a faulty design that the `Number.isFinite` returns false with `NaN`. 
So we cannot use this function to detect whether a number is finite or not. 
For this purpose, we provide `Number.isInfinite` that only return true with `Infinity` or `-Infinity`. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/number.js';

Number.isInfinite( Infinity, );  // true
Number.isInfinite( -Infinity, ); // true
Number.isInfinite( 0, );         // false
Number.isInfinite( -0, );        // false
Number.isInfinite( 1, );         // false
Number.isInfinite( NaN, );       // false
```
