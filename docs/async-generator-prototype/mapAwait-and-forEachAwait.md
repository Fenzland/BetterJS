# AsyncGenerator.prototype.mapAwait, AsyncGenerator.prototype.forEachAwait

`AsyncGenerator.prototype.forEachAwait` let you run for-await-of in a expression. 
`AsyncGenerator.prototype.mapAwait` returns the result in promise more. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/async-generator-prototype/forEachAwait.js';

const asyncGeneratorFunction= async function*(){
	yield 1;
	yield 2;
}

const asyncGenerator= asyncGeneratorFunction();

asyncGenerator.forEachAwait( async $=> {
	console.log( $, 'start', );
	await timeout();
	console.log( $, 'end', );
}, ); // return Promise(void)
// 1 start
// 1 end
// 2 start
// 2 end
```

```javascript
import 'https://better-js.fenz.land/src/async-generator-prototype/mapAwait.js';

const asyncGeneratorFunction= async function*(){
	yield 1;
	yield 2;
}

const asyncGenerator= asyncGeneratorFunction();

asyncGenerator.mapAwait( async $=> {
	console.log( $, 'start', );
	await timeout();
	console.log( $, 'end', );
	
	return $*2;
}, ); // return Promise([ 2, 4, ])
// 1 start
// 1 end
// 2 start
// 2 end
```
