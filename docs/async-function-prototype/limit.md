# AsyncFunction.prototype.limit

In user interface programming, you will face to submit buttons or something like them. 
You frequently need to prevent user to submit repeatedly before previous submit process complete. 
Or you need to limit concurrency number for a async function. 
We provide `limit` to help you deal with these cases. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/async-function-prototype/limit.js';

const insideFunc= async ()=> {};

const limited= insideFunc.limit( 1, );

await Promise.all( [
	limited(), // run insideFunc as usual
	limited(), // will not run insideFunc before the first running complete
], );

limited(), // can run insideFunc again after the first running complete 


```

## why async functions

Why do we put the `limit` method in `AsyncFunction.prototype` but not `Function.prototype`. 
Because synchronous process will never concurrent in single thread JavaScript. 
And the best practice of asynchronous process is the AsyncFunction. 
With the old style functions, we can wrap them into promise style, 
and once a function returns a promise, you can and would better to add a `async` keyword. 

Some people will only use `async` where there need `await`. 
But we recommend to add `async` for every function that returns a promise. 
That brings two benefits: better readability, and `AsyncFunction.prototype` accessibility. 

```javascript
// Good
async ()=> new Promise( /* ... */ );

// Bad
()=> new Promise( /* ... */ );
```
