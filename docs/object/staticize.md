# Object.haveOwnProperty, Object.bePrototypeOf, Object.propertyBeEnumerable

The `Object.prototype` is the root prototype of almost all object. So it's better not to add too much properties or methods on it. 
We move `hasOwnProperty`, `isPrototypeOf`, `propertyIsEnumerable` from Object.prototype to Object and rename to 
`haveOwnProperty`, `bePrototypeOf`, `propertyBeEnumerable`. For compatible reason, we not remove origin methods. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/object/haveOwnProperty.js';


Object.haveOwnProperty( object, 'property', );
```

```javascript
import 'https://better-js.fenz.land/src/object/propertyBeEnumerable.js';


Object.propertyBeEnumerable( object, 'property', );
```

```javascript
import 'https://better-js.fenz.land/src/object/bePrototypeOf.js';


Object.bePrototypeOf( prototype, object, );
```

## different

There are some different between `Object.bePrototypeOf` and `Object.prototype.isPrototypeOf` with primitive types:

```javascript

Object.bePrototypeOf( Boolean.prototype, true, );               // true
Object.bePrototypeOf( String.prototype, 'string', );            // true
Object.bePrototypeOf( Number.prototype, 1, );                   // true
Object.bePrototypeOf( BigInt.prototype, 0n, );                  // true
Object.bePrototypeOf( Symbol.prototype, Symbol( 'symbol', ), ); // true
```

## with `undefined` and `null`

There will be some new case with `undefined` and `null`

```javascript

Object.haveOwnProperty( undefined, 'property', );      // always false
Object.haveOwnProperty( null, 'property', );           // always false
Object.propertyBeEnumerable( undefined, 'property', ); // always false
Object.propertyBeEnumerable( null, 'property', );      // always false

Object.bePrototypeOf( undefined, undefined, );         // true
Object.bePrototypeOf( null, null, );                   // true
Object.bePrototypeOf( undefined, somethingDefined, );  // false
Object.bePrototypeOf( null, somethingNotNull, );       // false

```
