# Promise.make

When you create a promise with `new Promise`, you have to tell the constructor when to resolve or reject it in the resolver function at once. 
That's inconvenient when we not sure about this. We may need to take out the resolve and reject function. 

## Usage

There are 2 ways to use this feature: public and private.

### public

In this case, the resolve and reject functions are mounted on the promise. 
Everybody that can access the promise, can resolve or reject it too. 

```javascript
import 'https://better-js.fenz.land/src/promise/make.js';

const promise= Promise.make();

promise.then( ()=> { /*...*/ }, );
promise.catch( ()=> { /*...*/ }, );
promise.finally( ()=> { /*...*/ }, );

async ()=> {
	await promise;
}

if( ok )
	promise.resolve( value, );
else
	promise.reject( reason, );
```

### private

In this case, the resolve and reject functions are unmounted from the promise. 
Only the owner can resolve or reject the promise. 

```javascript
const { promise, resolve, reject, }= Promise.make();

promise.then( ()=> { /*...*/ }, );
promise.catch( ()=> { /*...*/ }, );
promise.finally( ()=> { /*...*/ }, );

async ()=> {
	await promise;
}

if( ok )
	resolve();
else
	reject();
```

