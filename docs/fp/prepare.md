# Function.prototype.prepare and Function.prototype.postpare

In most using case, what we really need is not `curry` or `yrruc`, but just `prepare` and `postpare`. 
They are more simple then `curry` and `yrruc`, but also useful, even more useful then that two. 
There are several differences:
* `prepare` and `postpare` are flexible, but `curry` and `yrruc` care about the length of function. 
* `prepare` and `postpare` always return functions, but `curry` and `yrruc` return value if the length of arguments matches. 

```javascript
import 'https://better-js.fenz.land/src/fp/prepare.js';

const func= ( ...args )=>args.join( '-', );


const prepared= func.prepare( '1', '2', );

prepared( '3', '4', ); // 1-2-3-4


const postpared= func.postpare( '1', '2', );

postpared( '3', '4', ); // 3-4-1-2


const fullpared= func.prepare( '1', '2', '3', '4', );

fullpared(); // 1-2-3-4
```

