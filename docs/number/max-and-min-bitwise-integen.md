# Number.MAX_BITWISE_INTEGER and Number.MIN_BITWISE_INTEGER

Store max and mini integer can safely operate with bitwise operators. 

# Usage

```javascript
import 'https://better-js.fenz.land/src/number.js';

if( x <= Number.MAX_BITWISE_INTEGER && x >= Number.MIN_BITWISE_INTEGER )
{
	x ^ 1;
	x & 66;
	x | 66;
	x << 2;
	x >> 2;
	x >>> 2;
}
```
