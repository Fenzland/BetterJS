# Promise.any

[`Promise.any`](https://github.com/tc39/proposal-promise-any) is still on stage 3 of the TC39 process. 
We provide it little earlier. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/promise/any.js';

Promise.any( promises, ).then(
	firstValue=> {
		// when any promises resolved
	},
	aggregateError=> {
		// when all promises rejected
		
		// the reason of Promise.any is an aggregateError, an iterable object extends Error
		const [ ...reasons ]= aggregateError;
	},
);

```
