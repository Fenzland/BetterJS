# Object.isPrimitive

To detect whether a value is a primitive value. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/object/isPrimitive.js';

Object.isObject( true, );                   // true
Object.isObject( 1, );                      // true
Object.isObject( 1n, );                     // true
Object.isObject( 'string', );               // true
Object.isObject( Symbol( 'string', ), );    // true
Object.isObject( undefined, );              // true
Object.isObject( null, );                   // true
Object.isObject( new Number( 1 ), );        // false
Object.isObject( [], );                     // false
Object.isObject( {}, );                     // false
Object.isObject( Object.create( null, ), ); // false
Object.isObject( await import (url), );     // false
Object.isObject( new class {}(), );         // false
Object.isObject( ()=> {}, );                // false
Object.isObject( class {}, );               // false
```
