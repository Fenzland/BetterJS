# Number.or

Get the first valid number from given values. 
If the type of value is not 'number', convert it to a number. 
Return NaN if there is no valid number. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/number.js';

Number.or( 0, 1, 2, );        // 0
Number.or( '', '1', 2, );     // 1
Number.or( null, 1n, );       // 1
Number.or( Infinity, 3, );    // Infinity
Number.or( NaN, 3, );         // 3
Number.or( undefined, 'a', ); // NaN
Number.or();                  // NaN
```
