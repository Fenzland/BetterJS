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
import 'https://better-js.fenz.land/src/object/bePrototypeOf.js';


Object.bePrototypeOf( prototype, object, );
```

```javascript
import 'https://better-js.fenz.land/src/object/propertyBeEnumerable.js';


Object.propertyBeEnumerable( object, 'property', );
```
