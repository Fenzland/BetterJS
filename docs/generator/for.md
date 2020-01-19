# Generator.for

Make a generator of classic for(;;) loop.

## Usage

```javascript
import 'https://better-js.fenz.land/src/generator/for.js';

Generator.for( 1, i=> i < 8, i=> i - - 1, );
// same as
(function*(){
	for( let i= 1; i < 8; ++i )
		yield i;
})();

// Tips: as well known, JS has no real 'plus operator'. 
// `+` is weak because of confusing 'plus' and 'concat', so we avoid to use it. 
// `- -` (minus the negative) is the best imitation. 
```
