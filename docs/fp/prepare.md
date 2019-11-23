# Function.prototype.prepare and Function.prototype.postpare

The method curry need know the parameter length of function. If you need work on flexible function, 
you need the `Function.prototype.prepare` and `Function.prototype.postpare`. 

```javascript
import 'https://better-js.fenz.land/src/fp/prepare.js';

const func= ( ...args )=>args.join( '-', );

const prepared= func.prepare( '1', '2', );

prepared( '3', '4', ); // 1-2-3-4

const postpared= func.postpare( '1', '2', );

postpared( '3', '4', ); // 3-4-1-2
```

