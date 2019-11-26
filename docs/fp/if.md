# Function.if

Accept a condition and a function, return the function back if condition is true, return noop else. 
Condition can be a function too, which accept the same parameters as the function, it will decide when the running. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/fp/if.js';

Function.if( true, x=> x*2 );  // return x=> x*2 back
Function.if( false, x=> x*2 ); // return noop
Function.if( x>3, x=> x*2 );   // return a function works like (x=> x>3? x*2: x)

```
