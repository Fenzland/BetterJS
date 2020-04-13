# BigInt.prototype.toJSON

_This feature not included in *breaking-free* version_

JSON not support `undefined` `NaN`, `Infinity`, `-Infinity`, `BigInt`s and `Symbol`s. 
JSON.stringify remove `undefined` and `Symbol`s, and convert `NaN`, `Infinity` and `-Infinity` to `null`, 
but throw `TypeError` with `BigInt`s. That's make `BigInt` unsafe, your code will be weak if you use BigInt. 

BetterJS fix the weakness by convert `BigInt` value into `Number` or `String` when `JSON.stringify`. 
Like `NaN`, `Infinity` and `-Infinity`, we cannot convert it back with `JSON.parse`. 
But we can convert back with `BigInt()` after `JSON.parse()`. 

If the value between `Number.MIN_SAFE_INTEGER` and `Number.MAX_SAFE_INTEGER`, we convert it to a `Number`, 
and convert to a hexadecimal `String` elsewise. 
(_why hexadecimal? binary string is to long, convert a long long int to decimal is slow and unnecessary. 
And two hexadecimal digits just fit to one byte, it is the best._)

This is not only add a new method, but also change the behavior of JSON.stringify. 
So breaking-free version not include this. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/bigint-prototype/toJSON.js';

JSON.stringify(1n)                  === '1';
JSON.stringify(0x1000000000000000n) === '"0x1000000000000000"';

// convert back
const json= JSON.stringify(0x1000000000000000n);

BigInt( JSON.parse( json, ), ) === 0x1000000000000000n;
```
