# Promise.try

[`Promise.try`](https://github.com/tc39/proposal-promise-try) is still on stage 1 of the TC39 process. 
We provide it little earlier. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/promise/try.js';

Promise.try( callback ).then(
	value=> {
		// when the callback returns
	},
	reason=> {
		// when the callback throws
	},
);

```
