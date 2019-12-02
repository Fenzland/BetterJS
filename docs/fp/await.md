# Function.prototype.await

This method let your functions can await the parameters. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/fp/await.js';

const sync= ( x, y, z, )=> `x:${x}, y:${y}, z:${z}`;
const awaiting= sync.await();

const x= Promise.resolve( 6, );
const y= Promise.resolve( 1, );
const z= Promise.resolve( 3, );

sync( await x, await y, await z, ); // `x:6, y:1, z:3`
awaiting( x, y, z, );  // Promise with `x:6, y:1, z:3`
```
