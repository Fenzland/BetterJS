# Function.prototype.throttle

When a event dispatched frequently, but you need do work in a lower frequency, you need `throttle`. 

Another example, you have a button, user can click it to shoot a bullet. 
User can click as fast as they can, but the gun can only shoot per minute. 
Now you can use the `throttle`.

## Usage

```javascript
import 'https://better-js.fenz.land/src/fp/throttle.js';

eventTarget.addEventListener( 'click', shoot, ); // user can shoot as fast as they can.

eventTarget.addEventListener( 'click', shoot.throttle( 1000, ), ); // the minimum interval of shooting is 1000ms.
eventTarget.addEventListener( 'click', shoot.throttle(), ); // if the interval is omitted or undefined, it will base on animation frame.
```


## Asynchronous Programming

There are lots of implementations of throttle function. Why the one of BetterJS is better? 
Because of asynchronous programming friendly, the method returns a async function, it's returnable, and awaitable. 

```javascript
// when you create a throttled function;
const throttled= (x=> x).throttle();

// and run several time in a short time;
const promise_0= throttled(0);
const promise_1= throttled(1);
const promise_2= throttled(2);

// after the function run
await nextFrame();

// you can get the final result with each promise
await promise_0 === 2;
await promise_1 === 2;
await promise_2 === 2;

// in fact, they are three copies of the same promise, 
// always resolved or rejected at the same time and with the same value.

```
