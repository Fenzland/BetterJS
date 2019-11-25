# Function.prototype.through

We often need to run some process but not change the returning, just let it go through. 
The method `Function.prototype.through` let you change a function into a through mode. 
If your function has more then one parameters, you can pass an index (support negative) to tell which one to go through. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/fp/through.js';

const checkA= path=> { if( !path ) throw 'path is required'; };

const checkB= checkA.through();

checkA( '/' );  // undefined
checkB( '/', ); // '/'

// it's useful for case like this

path
	|> checkB
	|> readFile
;


const func= ( a, b, c, )=> { /* ... */ };

func.through( 1, );  // this function will return parameter 'b' through
func.through( -1, ); // this function will return parameter 'c' through
```
