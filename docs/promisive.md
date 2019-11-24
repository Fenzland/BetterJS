# global then

## Usage

A shortcut of `Promise.resolve().then()`. 

```javascript
import 'https://better-js.fenz.land/src/promisive.js';

then( ()=> {
	// what you want to run at next micro task
}, );

```

You can also use it to delay a asynchronous function. 

```javascript
async ()=> {
	
	await then();
	
	// delayed
}
```

# timeout

A promisive setTimeout. 

```javascript
import 'https://better-js.fenz.land/src/promisive.js';

timeout( 1000, ).then( ()=> {
	// what you want to run after 1 second
}, );

```

You can pass a value by the secondary parameter. 

```javascript
timeout( 1000, 6, ).then( foo=> {
	foo === 6;
}, );
```

The most lovely case is using with `await`. 

```javascript
async ()=> {
	// do something
	await timeout( 200, );
	// do something else
}
```

# nextFrame

A promisive requestAnimationFrame. 

```javascript
import 'https://better-js.fenz.land/src/promisive.js';

nextFrame( 8, ).then( foo=> {
	// what you want to run at next animation frame
	foo === 8;
}, );

```

Using with `await`, make your animation work filled with happiness. 

```javascript
async ()=> {
	while( inAnimate() )
	{
		render();
		
		await nextFrame();
	}
}
```

# window.loaded, window.unloaded and window.beforeunloaded

Event and Promise are two main ideas for modern asynchronous programming. 
Event is appropriate for repeating event. 
On the other hand, Promise is designed for one-off handlers. 
There are some one-off event designed before Promise appearing. 
Reform them into promises is useful. 

```javascript
import 'https://better-js.fenz.land/src/promisive.js';

window.loaded.then( ()=> {
	// what you want to run after window loaded
}, );

window.beforeunloaded.then( ()=> {
	// what you want to run before window unloaded
}, );

window.unloaded.then( ()=> {
	// what you want to run after window unloaded
}, );

```

You can use with `await` as well. 

```javascript
async ()=> {
	await window.loaded;
	
	// what you want to run after window loaded
	
	await window.beforeunloaded;
	
	// what you want to run before window unloaded
	
	await window.unloaded;
	
	// what you want to run after window unloaded
}
```
