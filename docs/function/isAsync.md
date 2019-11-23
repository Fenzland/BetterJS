# Object.isAsync

This is use for detecting whether a function or a class is an asynchronous. 

_This function may slow cause using Function.prototype.toString. 
If not really need, better to avoid to use. 
And it's better to not let your functions to long._

## Usage

```javascript
import 'https://better-js.fenz.land/src/function/isXXX.js';

Function.isAsync( async ()=> {}, );        // true
Function.isAsync( async function(){}, );   // true
Function.isAsync( async function*(){}, );  // true
Function.isAsync( async class{}, );        // true  // not supported
Function.isAsync( ()=> {}, );              // false
Function.isAsync( function(){}, );         // false
Function.isAsync( function*(){}, );        // false
Function.isAsync( class{}, );              // false

Function.isAsync( 0, );                    // false
```
