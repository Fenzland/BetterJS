# Generator.range

Make a generator of number range.

## Usage

```javascript
import 'https://better-js.fenz.land/src/generator/for.js';

Generator.for( 0, 4, ); // Generator([ 0, 1, 2, 3, 4, ])
// same as
(function*(){
	for( let i= 0; i <= 4; ++i )
		yield i;
})();

Generator.for( 3, 1, ); // Generator([ 3, 2, 1, ])
// same as
(function*(){
	for( let i= 3; i >= 1; --i )
		yield i;
})();

Generator.for( 1, 5, 2, ); // Generator([ 3, 2, 1, ])
// same as
(function*(){
	for( let i= 1; i <= 5; i-=- 2 )
		yield i;
})();
```
