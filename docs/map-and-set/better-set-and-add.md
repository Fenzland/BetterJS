# better set and add of Map and Set

_This feature makes breaking change, not included in *breaking-free* version_

In JavaScript (and any other reasonable languages), an assign expression returns the assigned value. 
But the `Map.set` and the `Set.add` not do this, they return the map or set itself. 
BetterJS change them to return the assigned values. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/map-and-set/better-set-and-add.js';

const map= new Map();

map.set( 0, 1, ); // returns 1

const set= new Set();

set.add( 3, ); // returns 3
```
