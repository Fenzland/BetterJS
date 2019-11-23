# Array.prototype.implode and Array.prototype.feed 

The `Array.prototype.join` silly use `,` but not empty string as default separator. 
We provide a better join method called `implode`. 

We often need add a separator at the end of string when join an array. 
That's why `feed` here. The `feed` use `\n` as the default separator.

# Usage

```javascript
import 'https://better-js.fenz.land/src/array-prototype/implode-and-feed.js';

[ 'A', 'B', 'C', ].implode();       // 'ABC'
[ 'A', 'B', 'C', ].implode( ' ', ); // 'A B C'

[ 'A', 'B', 'C', ].feed();          // 'A\nB\nC\n'
[ 'A', 'B', 'C', ].feed( ' ', );    // 'A B C '
```
