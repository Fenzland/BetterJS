# Function.prototype.valve

This method returns a parameter number limited function. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/fp/vlve.js';

const fixed= ( a, b, c, d, )=> [ a, b, c, d, ];
const flexible= ( ...rest )=> rest;

const foo= fixed.valve( 2, );
foo( 0, 1, 2, 3, );             // [ 0, 1, undefined, undefined, ]
foo.length;                     // 2

const bar= fixed.valve( -1, );
bar( 0, 1, 2, 3, );             // [ 0, 1, 2, undefined, ]
bar.length;                     // 3

const baz= flexible.valve( 2, );
baz( 0, 1, 2, 3, );             // [ 0, 1, ]
baz.length;                     // 2

// the default length is 1
const qux= flexible.valve();
qux( 0, 1, 2, 3, );             // [ 0, ]
qux.length;                     // 1
```
