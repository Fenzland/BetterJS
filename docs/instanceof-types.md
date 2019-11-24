# better instanceof (breaking)

_This feature makes breaking change, not included in *breaking-free* version_

We change the behaviors of `instanceof` to the types. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/instanceof-types.js';

true instanceof Boolean === true;
'string' instanceof String === true;
Infinity instanceof Number === true;
0n instanceof BigInt === true;
Symbol('a') instanceof Symbol === true;
Object.create( null, ) instanceof Object === true;

const foo= ()=> {};
Reflect.setPrototypeOf( foo, null, );
foo instanceof Function === true;

const bar= [];
Reflect.setPrototypeOf( bar, null, );
bar instanceof Array === true;

```

You can use original `instanceof` via `Reflect.hasInstance`. 

```javascript
Reflect.hasInstance( Boolean, true, ) === false;
Reflect.hasInstance( String, 'string', ) === false;
Reflect.hasInstance( Number, Infinity, ) === false;
Reflect.hasInstance( BigInt, 0n, ) === false;
Reflect.hasInstance( Symbol, Symbol('a'), ) === false;
Reflect.hasInstance( Object, Object.create( null, ), ) === false;

const foo= ()=> {};
Reflect.setPrototypeOf( foo, null, );
Reflect.hasInstance( Function, foo, ) === false;

const bar= [];
Reflect.setPrototypeOf( bar, null, );
Reflect.hasInstance( Array, bar, ) === false;
```
