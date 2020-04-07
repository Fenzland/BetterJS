# Function.prototype.debounce

When a event dispatched frequently, but you need only to do work with the final states, you need `debounce`. 

For example, you have a search input, and you need do some searching work after user input. 
If you bind the event on the 'input' event directly, it will search when every character inputed, it's too heavy and unnecessary. 
The best practice is to wait a quarter of second for each 'input' event, make sure the user does stop inputing, then do the searching. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/fp/debounce.js';

const searchInput= document.querySelector( 'input[type="search"]', );
const search= ()=> {
	// some high cost work like fetch
};

searchInput.addEventListener( 'input', search, ); // that will search when every character inputed, it's too heavy and unnecessary.

searchInput.addEventListener( 'input', search.debounce(), ); // only search after user stop inputing,
//the default delay argument is 250ms, it's suitable for general input or scroll event.
searchInput.addEventListener( 'input', search.debounce( 1000, ), ); // you can change the delay interval as you wish.
```


## Asynchronous Programming

There are lots of implementations of debounce function. Why the one of BetterJS is better? 
Because of asynchronous programming friendly, the method returns a async function, it's returnable, and awaitable. 

```javascript
// when you create a debounced function;
const debounced= (x=> x).debounce();

// and run several time in a short time;
const promise_0= debounced(0);
const promise_1= debounced(1);
const promise_2= debounced(2);

// after the function run
await timeout( 300, );

// you can get the final result with each promise
await promise_0 === 2;
await promise_1 === 2;
await promise_2 === 2;

// in fact, they are three copies of the same promise, 
// always resolved or rejected at the same time and with the same value.

```
