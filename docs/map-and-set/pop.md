# Map.prototype.pop and WeakMap.prototype.pop

BetterJS provide method `pop` to let you can get and remove an item from a map or weakmap with a single method. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/map-and-set/pop.js';

const map= new Map( /* ... */, );

const value= map.pop( key, );

map.has( key, ); // false


const weakmap= new WeakMap( /* ... */, );

const value= weakmap.pop( key, );

weakmap.has( key, ); // false

```
