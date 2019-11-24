# SyncPromise

The Promise brings great syntaxes: expressional error control with `.then`, `.catch`, `.finally`, 
and flat asynchronous programing with `async/await`. 
And we hope to use them for synchronous programing as well. 
That's why SyncPromise here. 

## Usage

The APIs of SyncPromise are almost all the same as Promise, only except the constructor. 

```javascript
import 'https://better-js.fenz.land/src/SyncPromise.js';

const foo= new SyncPromise( ()=> {
	if( ok )
		return someValue;
	else
		throw someReason;
}, );

// methods are all the same as Promise, but run synchronously
foo.then();
foo.catch();
foo.finally();

SyncPromise.resolve();
SyncPromise.reject();
SyncPromise.all();
SyncPromise.allSettled();
SyncPromise.race();
SyncPromise.any();
SyncPromise.try();
```

All of these methods return instances of SyncPromise (or Promise). 
So you can use promise chain too, that's run synchronously too. 

```javascript
foo
	.then(/*...*/)
	.then(/*...*/)
	.then(/*...*/)
	.then(/*...*/)
	.catch(/*...*/)
;
```

### fallback to asynchronous Promise

If there is some asynchronous thing appear during the process, 
the SyncPromise will fallback to asynchronous Promise. 
```javascript
const promise= new SyncPromise( async ()=> {}, );

promise.constructor === Promise;

new SyncPromise( ()=> {}, ) // SyncPromise
	.then( ()=> {}, )       // SyncPromise
	.then( async ()=> {}, ) // Promise
	.then( ()=> {}, )       // Promise
;
```

In fact, you needn't to care about whether it is a SyncPromise or Promise in most cases. 
The SyncPromises can take every places of Promises. 

You can await them as well, but because `await` is a asynchronous thing, SyncPromise will fallback to Promise after that. 
```javascript
console.log( '-1-', );

(async ()=> {
	console.log( '-2-', );
	
	await new SyncPromise( ()=> {}, );
	
	// We wish -4- logged before -3- too, but we cannot modify syntax feature itself
	console.log( '-4-', );
})();

console.log( '-3-', );
```
