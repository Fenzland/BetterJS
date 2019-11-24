# better Array.prototype.forEach (breaking)

_This feature makes breaking change, not included in *breaking-free* version_

Native `forEach` of array will not iterate the items pushed during iterating. We fix this. 

```javascript
import 'https://better-js.fenz.land/src/array-prototype/forEach-fix.js';

[ 1, 2, ].forEach( ( item, index, array, )=> {
	if( item < 3 )
		array.push( item*2, );
	
	console.log( item, );
}, );

// without BetterJS logs: 1 2
// with BetterJS logs: 1 2 2 4 4
```
