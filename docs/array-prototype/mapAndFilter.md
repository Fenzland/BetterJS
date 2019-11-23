# Array.prototype.mapAndFilter

There is frequent using case to map an list then filter it. 
People will use `.reduce()` instead of `.map().filter()` to avoid iterate twice. 
That has a better performance, but worse readability. 
Now, the `.mapAndFilter()` is the solution, as readable as `.map().filter()`, and as fast as `.reduce()`. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/array-prototype/mapAndFilter.js';

[ 0, 1, 2, 3, ].mapAndFilter(
	x=> x*2,
	x=> x > 3,
); // returns [ 4, 6, ]
```
