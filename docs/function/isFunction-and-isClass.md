# Object.isFunction and Function.isClass

Since ES6 class and comes, functions are not functions anymore. 
Classes are not callable like old style constructors. 
So when we check a value is an instance of `Function` or with type `'function'`, we still cannot call it safely. 
We provide `Object.isFunction` to detect a value is a callable function and `Object.isClass` to detect it is a  class. 

_These functions may slow cause using Function.prototype.toString. 
If not really need, better to avoid to use. 
And it's better to not let your functions to long._

## Usage

```javascript
import 'https://better-js.fenz.land/src/function/isXXX.js';

Function.isFunction( ()=> {}, );             // true
Function.isFunction( function(){}, );        // true
Function.isFunction( function*(){}, );       // true
Function.isFunction( async ()=> {}, );       // true
Function.isFunction( async function(){}, );  // true
Function.isFunction( async function*(){}, ); // true

Function.isFunction( '', );                  // false
Function.isFunction( NaN, );                 // false
Function.isFunction( {}, );                  // false
Function.isFunction( class{}, );             // false


Function.isClass( class{}, );                // true

Function.isClass( '', );                     // false
Function.isClass( NaN, );                    // false
Function.isClass( {}, );                     // false
Function.isClass( ()=> {}, );                // false
Function.isClass( function(){}, );           // false
Function.isClass( function*(){}, );          // false
Function.isClass( async ()=> {}, );          // false
Function.isClass( async function(){}, );     // false
Function.isClass( async function*(){}, );    // false

```
