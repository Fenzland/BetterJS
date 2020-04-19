# better index finding

Index finding methods of string and array return `-1` for not found. 
But `-1` often means the end of string or array. 
So you have to handle this value exceptionally. 
We create a group of methods to take place these method and return `NaN` for not found. 

We not make breaking change, but add a group of methods. 
Where there is a method named `index` there is another method named `idx` by us. 

For `Array.prototype.findIdx` and `Array.prototype.findLastIdx`, 
your callback function can return a number, it will be treated as true, 
and as an offset add to the result. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/string-prototype/find-index.js';

'abcdabcd'.idxOf( 'a', );      // 0
'abcdabcd'.idxOf( 'e', );      // NaN

'abcdabcd'.lastIdxOf( 'a', );  // 4
'abcdabcd'.lastIdxOf( 'e', );  // NaN

'abcdabcd'.searchIdx( /^/, );  // 0
'abcdabcd'.searchIdx( /\d/, ); // NaN
```

```javascript
import 'https://better-js.fenz.land/src/array-prototype/finding.js';

[ 0n, 3, 2, 0n, ].idxOf( 0n, );                                 // 0
[ 0n, 3, 2, 0n, ].idxOf( 0, );                                  // NaN

[ 0n, 3, 2, 0n, ].lastIdxOf( 0n, );                             // 3
[ 0n, 3, 2, 0n, ].lastIdxOf( 'e', );                            // NaN

[ 0n, 3, 2, 0n, ].findIdx( x=> x < 1, );                        // 0
[ 0n, 3, 2, 0n, ].findIdx( x=> x < 0, );                        // NaN
[ 0n, 3, 2, 0n, ].findIdx( x=> x > 2? x%2: false, );            // 2

[ 0n, 3, 2, 0n, ].findLastIdx( x=> x < 1, );                    // 3
[ 0n, 3, 2, 0n, ].findLastIdx( x=> x < 0, );                    // NaN
[ 0n, 3, 2, 0n, ].findLastIdx( x=> x > 2? x%2: false, );        // 2

```
