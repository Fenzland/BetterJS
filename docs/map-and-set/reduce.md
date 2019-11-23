# Map.prototype.map and Set.prototype.map

Method `reduce` can also add on Map and Set. 
Like better reduce on Array, we assume the initial value as undefined, if you not give it. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/map-and-set/reduce.js';

const map= new Map( /* ... */, );

const value= map.reduce( ( value, item, key, theMap, )=> { /* ... */ return stepValue; }, initValue, );


const set= new Set( /* ... */, );

const value= set.reduce( ( value, item, key, theSat, )=> { /* ... */ return stepValue; }, initValue, );
```
