# Map.prototype.map and Set.prototype.map

BetterJS provide method `map` on prototypes of `Map` and `Set`. 
Them works like forEach but returns a map or set with the returned values. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/map-and-set/map.js';

const map= new Map( /* ... */, );

const newMap= map.map( ( item, key, theMap, )=> { /* ... */ return newValue; }, );

newMap instanceof Map;


const set= new Set( /* ... */, );

const newSet= set.pop( ( item, key, theSet, )=> { /* ... */ return newValue; }, );

newSet instanceof Set;

```
