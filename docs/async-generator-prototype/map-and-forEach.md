# AsyncGenerator.prototype.map, AsyncGenerator.prototype.forEach

Different from `mapAwait` and `forEachAwait`, `map` and `forEach` runs concurrently. 
`forEach` will not await callback resolve. If you need await them, use `map` and `Promise.all`

## Usage

```javascript
import 'https://better-js.fenz.land/src/async-generator-prototype/forEach.js';

const asyncGeneratorFunction= async function*(){
	yield 1;
	yield 2;
}

const asyncGenerator= asyncGeneratorFunction();

asyncGenerator.forEach( async $=> {
	console.log( $, 'start', );
	await timeout();
	console.log( $, 'end', );
}, ); // return Promise(void)
// 1 start
// 2 start
// 1 end
// 2 end
```

```javascript
import 'https://better-js.fenz.land/src/async-generator-prototype/map.js';

const asyncGeneratorFunction= async function*(){
	yield 1;
	yield 2;
}

const asyncGenerator= asyncGeneratorFunction();

asyncGenerator.map( async $=> {
	console.log( $, 'start', );
	await timeout();
	console.log( $, 'end', );
	
	return $*2;
}, ); // return Promise([ 2, 4, ])
// 1 start
// 2 start
// 1 end
// 2 end
```
