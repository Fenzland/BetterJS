# throws

[ECMAScript throw expressions](https://github.com/tc39/proposal-throw-expressions) is in stage 2, 
and nobody implement it currently. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/expressional-error-control.js';

()=> throws( new Error(), );

(
	foo? foo.foo():
	bar? bar:
	throws( new Error(), )
);

baz|| throws( new Error(), );
```

# tries

The try-catch syntax is ugly and not flexible enough. We need a expressional way to control errors.

The function 'tries' runs a callback and returns [SyncPromise](./SyncPromise.md) if synchronous or Promise if asynchronous. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/expressional-error-control.js';

tries( ()=> {
	if( ok )
		return someValue;
	else
		throw someError;
}, )
	.then(/* ... */)
	.catch(/* ... */)
	.finally(/* ... */)
;
```
