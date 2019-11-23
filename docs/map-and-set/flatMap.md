# Map.prototype.flatMap and Set.prototype.flatMap

Like `flatMap` on `Array`, `flatMap` on `Map` and `Set` allow you return a map or set instead of a single item. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/map-and-set/map.js';

const map= new Map( /* ... */, );

const newMap= map.flatMap( ( item, key, theMap, )=> {
	if( multiple )
		return new Map( [ [ newKey, newItem, ], ... ], );
	else
		return newItem;
}, );


const set= new Set( /* ... */, );

const newSet= set.pop( ( item, key, theSet, )=> {
	if( multiple )
		return new Set( [ newItem, ... ], );
	else
		return newItem;
}, );
```
