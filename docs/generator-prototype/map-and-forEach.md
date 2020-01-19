# Generator.prototype.map, Generator.prototype.forEach

`Generator.prototype.forEach` let you run for-of in a expression. 
`Generator.prototype.map` returns the result more. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/generator-prototype/forEach.js';

const generatorFunction= function*(){
	yield 1;
	yield 2;
}

const generator= generatorFunction();

generator.forEach( $=> console.log( $, ), ); // log 1, 2 and return undefined
```

```javascript
import 'https://better-js.fenz.land/src/generator-prototype/map.js';

const generatorFunction= function*(){
	yield 1;
	yield 2;
}

const generator= generatorFunction();

generator.map( $=> $*2, ); // [ 2, 4, ]
```
