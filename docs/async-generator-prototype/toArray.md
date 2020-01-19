# AsyncGenerator.prototype.toArray

convert a generator to an array in a promise.

## Usage

```javascript
import 'https://better-js.fenz.land/src/async-generator-prototype/toArray.js';

const asyncGeneratorFunction= async function*(){
	yield 1;
	yield 2;
}

const asyncGenerator= asyncGeneratorFunction();

await asyncGenerator.toArray(); // [ 1, 2, ]
```
