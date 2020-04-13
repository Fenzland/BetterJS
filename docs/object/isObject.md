# Object.isObject

There is a incredible fact that JavaScript has on simple way to detect whether a value is on object. 

There are some alternative way, but all of them with troubles.

* `typeof value === 'object'`, `typeof` return `'object'` for `null`, and return `'function'` for functions and class. 
* `instanceof Object`, return `false` for `Object.create( null, )` and module object. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/object/isObject.js';

Object.isObject( 1, );                      // false
Object.isObject( new Number( 1 ), );        // true
Object.isObject( null, );                   // false
Object.isObject( {}, );                     // true
Object.isObject( Object.create( null, ), ); // true
Object.isObject( await import (url), );     // true
Object.isObject( new class {}(), );         // true
Object.isObject( ()=> {}, );                // true
Object.isObject( class {}, );               // true
```
