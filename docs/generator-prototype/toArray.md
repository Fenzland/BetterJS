# Generator.prototype.toArray

convert a generator to an array.

## Usage

```javascript
import 'https://better-js.fenz.land/src/generator-prototype/toArray.js';

const generatorFunction= function*(){
	yield 1;
	yield 2;
}

const generator= generatorFunction();

generator.toArray(); // [ 1, 2, ]
```
