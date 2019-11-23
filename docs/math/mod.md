# Math.mod

The C language make a mistake with the mod operator `%` with negative number. 

* `-1 % 3` should be `2` but returns `-1` actually. 
* `1 % -3` should be `-2` but returns `1` actually. 

Only few of languages do the correct calculation, like Python. 
But almost all languages inherit this mistake, includes JavaScript. 

BetterJS provide `Math.mod` for the correct modulo calculation. 

## Usage

The APIs of SyncPromise are almost all the same as Promise, only except the constructor. 

```javascript
import 'https://better-js.fenz.land/src/math.js';

Math.mod( -1, 3, ); // 2
Math.mod( 1, -3, ); // -2
```
