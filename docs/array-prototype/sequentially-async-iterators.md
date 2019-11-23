# sequentially async iterators

If you pass a asynchronous function to forEach or map, they will run them parallel. 
If you need to run serially, you need blow functions. 
It works like `for-await`, but functional.


# Array.prototype.forEachAwait

## Usage

```javascript
import 'https://better-js.fenz.land/src/array-prototype/forEachAwait.js';

await [ 1, 2, ].forEachAwait( async ()=> {
	// these method will run serially
}, );
// the returning promise will be resolved after the iteration complete

```

# Array.prototype.mapAwait

## Usage

```javascript
import 'https://better-js.fenz.land/src/array-prototype/mapAwait.js';

const results= await [ 1, 2, ].mapAwait( async ()=> {
	// these method will run serially
	return newItem;
}, );
// the returning promise will be resolved with the return values after the iteration complete

```

# Array.prototype.flatMapAwait

## Usage

```javascript
import 'https://better-js.fenz.land/src/array-prototype/flatMapAwait.js';

const results= await [ 1, 2, ].flatMapAwait( async ()=> {
	// these method will run serially
	// and you can return an array for multiple items
	return newItem;
	return [ newItem0, newItem1, ];
}, );
// the returning promise will be resolved with the return values after the iteration complete

```
