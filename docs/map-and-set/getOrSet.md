# Map.prototype.getOrSet

There is a extremely frequent using of Map is holding some cache. 

The fixed program is:
* checking the existing with a key;
* if data exists, return them;
* else run the fetching or calculating code and get the data;
* set the data back to the map;
* return the data;

BetterJS provide `Map.prototype.getOrSet` help you to avoid the repeating work, 
and do this with a single method. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/map-and-set/getOrSet.js';

const caches= new Map();

const data= caches.getOrSet( 'key', ()=> fetch( 'key', ), );

const dataAgain= caches.getOrSet( 'key', ()=> { /* will not run */ }, );
```
