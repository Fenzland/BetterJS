# Object.isObject

There is a incredible fact that JavaScript has on simple way to detect whether a value is an object. 

There are some alternative way, but all of them with troubles.

* `typeof value === 'object'`, `typeof` return `'object'` for `null`, and return `'function'` for functions and class. 
* `instanceof Object`, return `false` for `Object.create( null, )` and module object. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/object/isObject.js';

Object.isObject( true, );                   // false
Object.isObject( 1, );                      // false
Object.isObject( 1n, );                     // false
Object.isObject( 'string', );               // false
Object.isObject( Symbol( 'string', ), );    // false
Object.isObject( undefined, );              // false
Object.isObject( null, );                   // false
Object.isObject( new Number( 1 ), );        // true
Object.isObject( [], );                     // true
Object.isObject( {}, );                     // true
Object.isObject( Object.create( null, ), ); // true
Object.isObject( await import (url), );     // true
Object.isObject( new class {}(), );         // true
Object.isObject( ()=> {}, );                // true
Object.isObject( class {}, );               // true
```
