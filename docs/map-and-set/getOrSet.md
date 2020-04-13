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

This method accept 2 or 3 arguments:
The first is the `key`; the second is `generator` callback, will called when the map not has the key, 
and the return value will set to the map with the key;
the third one named `afterSetting`, which is optional, will run after the generator run and the value set to the map. 

There is also `WeakMap.prototype.getOrSet`, and when you pass a privitive key, 
it just to calculate every time and return the value. and never run afterSetting. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/map-and-set/getOrSet.js';

const caches= new Map();

const first= caches.getOrSet( 'key', ()=> fetch( 'key', ), );

const second= caches.getOrSet( 'key', ()=> { /* will not run */ }, value=> { /* will not run too */ }, );

first === second;

const weakCaches= new WeakMap();
const key= {};

const first= weakCaches.getOrSet( key, ()=> fetch(), );

const second= weakCaches.getOrSet( key, ()=> { /* will not run */ }, );

first === second;

const first= weakCaches.getOrSet( 'key', ()=> 1, );

const second= weakCaches.getOrSet( 'key', ()=> 2, value=> { /* will never run */ }, );

first === 1;
second === 2;
first !== second;

```
