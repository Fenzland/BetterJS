# Number.equal

There are a lot of methods to compare equivalence of two JavaScript values. 
But not any of them suitable for two numbers. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/number.js';

Number.equal( 0.9 - 0.7, 0.2, );      // true
Number.equal( 0, -0, );               // true
Number.equal( Infinity, -Infinity, ); // true
Number.equal( NaN, NaN, );            // false
```
