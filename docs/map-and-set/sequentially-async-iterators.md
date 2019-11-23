# sequentially async iterators

Like sequentially async iterators for Array, there are same things for Map and Set. 

# Map.prototype.forEachAwait and Set.prototype.forEachAwait

## Usage

```javascript
import 'https://better-js.fenz.land/src/map-and-set/forEachAwait.js';

await new Map( [ [ 0, 1, ], [ 1, 2, ], ], ).forEachAwait( async ()=> {
	// these method will run serially
}, );
// the returning promise will be resolved after the iteration complete

await new Set( [ 1, 2, ], ).forEachAwait( async ()=> {
	// these method will run serially
}, );
// the returning promise will be resolved after the iteration complete

```

# Map.prototype.mapAwait and Set.prototype.mapAwait

## Usage

```javascript
import 'https://better-js.fenz.land/src/map-and-set/mapAwait.js';

const results= await new Map( [ [ 0, 1, ], [ 1, 2, ], ], ).mapAwait( async ()=> {
	// these method will run serially
	return newItem;
}, );
// the returning promise will be resolved with the return values after the iteration complete

const results= await new Set( [ 1, 2, ], ).mapAwait( async ()=> {
	// these method will run serially
	return newItem;
}, );
// the returning promise will be resolved with the return values after the iteration complete

```

# Map.prototype.flatMapAwait and Set.prototype.flatMapAwait

## Usage

```javascript
import 'https://better-js.fenz.land/src/map-and-set/flatMapAwait.js';

const results= await new Map( [ [ 0, 1, ], [ 1, 2, ], ], ).flatMapAwait( async ()=> {
	// these method will run serially
	// and you can return a map for multiple items
	return newItem;
	return new Map( [ [ newKey0, newItem0, ], [ newKey1, newItem1, ], ], );
}, );
// the returning promise will be resolved with the return values after the iteration complete

const results= await new Set( [ 1, 2, ], ).flatMapAwait( async ()=> {
	// these method will run serially
	// and you can return a set for multiple items
	return newItem;
	return new Set( [ newItem0, newItem1, ], );
}, );
// the returning promise will be resolved with the return values after the iteration complete

```
