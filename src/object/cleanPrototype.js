import './haveOwnProperty.js';
import './bePrototypeOf.js';
import './propertyBeEnumerable.js';

/**
 * Object.prototype is the root prototype of about all things in javascript. 
 * It should'nt has added any member on it with a string key. 
 * But it has done before the symbol been come up with. 
 * We will remove some of them. 
 */

// use widely and defined in different prototypes hard to remove.
//Reflect.deleteProperty( Object.prototype, 'constructor', );
//Reflect.deleteProperty( Object.prototype, 'valueOf', );
//Reflect.deleteProperty( Object.prototype, 'toString', );
//Reflect.deleteProperty( Object.prototype, 'toLocaleString', );
//Reflect.deleteProperty( Object.prototype, 'toSource', );

// we can move them to the Object static field
Reflect.deleteProperty( Object.prototype, 'isPrototypeOf', );
Reflect.deleteProperty( Object.prototype, 'hasOwnProperty', );
Reflect.deleteProperty( Object.prototype, 'propertyIsEnumerable', );

// deprecated or non-standard
Reflect.deleteProperty( Object.prototype, '__proto__', );
Reflect.deleteProperty( Object.prototype, '__count__', );
Reflect.deleteProperty( Object.prototype, '__parent__', );
Reflect.deleteProperty( Object.prototype, '__noSuchMethod__', );
Reflect.deleteProperty( Object.prototype, '__defineGetter__', );
Reflect.deleteProperty( Object.prototype, '__defineSetter__', );
Reflect.deleteProperty( Object.prototype, '__lookupGetter__', );
Reflect.deleteProperty( Object.prototype, '__lookupSetter__', );
Reflect.deleteProperty( Object.prototype, 'eval', );
Reflect.deleteProperty( Object.prototype, 'watch', );
Reflect.deleteProperty( Object.prototype, 'unwatch', );
