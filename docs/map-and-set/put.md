# Map.prototype.put, Set.prototype.put, WeakMap.prototype.put and WeakSet.prototype.put

Put entries into Map, Set, WeakMap or WeakSet, like constructors accept. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/map-and-set/put.js';

const map= new Map();
map.put( [ [ 'foo', 0, ], [ 'bar', 1, ], ], );

const set= new Set();
set.put( 0, 1, 2, );

const weakMap= new WeakMap();
weakMap.put( [ [ map, 0, ], [ set, 1, ], ], );

const weakSet= new WeakSet();
weakSet.put( [ map, set, weakMap, weakSet, ], );

```
