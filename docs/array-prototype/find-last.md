# Array.prototype.findLast and Array.prototype.findLastIndex

What like `Array.prototype.findLast` and `Array.prototype.findLastIndex`, but start from the end of array. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/array-prototype/finding.js';

const array= [ /* ... */ ];

array.findLast( ()=> { /* ... */ }, );
array.findLastIndex( ()=> { /* ... */ }, );
```

When not found, `findLastIndex` returns `-1` as other build-in index finders. 
If you need it return `NaN`, use `findLastIdx` from BetterJS ([see here](../find-index.md)). 
