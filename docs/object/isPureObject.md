# Object.isPureObject

There is a incredible fact that JavaScript has on simple way to detect whether a value is on object. 

There are some alternative way, but all of them with troubles.

* `typeof value === 'object'`, `typeof` return `'object'` for `null`, and return `'function'` for functions and class. 
* `instanceof Object`, return `false` for `Object.create( null, )` and module object. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/object/isObject-and-isPureObject.js';

Object.isPureObject( null, );                   // false
Object.isPureObject( {}, );                     // true
Object.isPureObject( Object.create( null, ), ); // true
Object.isPureObject( await import (url), );     // true
Object.isPureObject( new class {}(), );         // false
Object.isPureObject( ()=> {}, );                // false
Object.isPureObject( class {}, );               // false
```
