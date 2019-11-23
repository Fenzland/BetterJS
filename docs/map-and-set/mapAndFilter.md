# Map.prototype.mapAndFilter and Set.prototype.mapAndFilter

## Usage

```javascript
import 'https://better-js.fenz.land/src/map-and-set/mapAndFilter.js';

const map= new Map( /* ... */, );

await map.mapAndFilter(
	( item, key, theMap, )=> newItem,
	( newItem, key, theMap, )=> true | false,
);


const set= new Set( /* ... */, );

await set.mapAndFilter(
	( item, key, theSat, )=> newItem,
	( newItem, key, theSat, )=> true | false,
);
```
