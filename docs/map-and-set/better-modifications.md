# better modifications Map and Set

_This feature makes breaking change, not included in *breaking-free* version_

When a map or set is frozen by Object.freeze(), sealed by Object.seal() or prevented extentions by 
Object.preventExtensions() or Reflect.preventExtensions(), 

We also change returning of `Map.set` and the `Set.add`, they will return the given value like a assignment expression. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/map-and-set/modifications.js';

const map= new Map();

map.set( 0, 1, ); // returns 1

const set= new Set();

set.add( 3, ); // returns 3

const frozenMap= Object.freeze( new Map( [...], ), );

frozenMap.set( ... );    // throw TypeError(cannot modify a frozen map)
frozenMap.delete( ... ); // throw TypeError(cannot modify a frozen map)
frozenMap.clear();       // throw TypeError(cannot modify a frozen map)

const frozenSet= Object.freeze( new Set( [...], ), );

frozenSet.add( ... );    // throw TypeError(cannot modify a frozen set)
frozenSet.delete( ... ); // throw TypeError(cannot modify a frozen set)
frozenSet.clear();       // throw TypeError(cannot modify a frozen set)

```
