# better Promise.allSettled

Result of Promise.allSettled use 'fulfilled' as status but not 'resolved'. 
Javascript use 'resolve' or 'resolved' everywhere but 'fulfilled' only here, 
that's strange and indiscretionary. But to fix it will make breaking change. 
We provide a properties resolved (boolean) and resolved (boolean) to take place with status. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/promise/better-allSettled.js';

await Promise.allSettled( promises, );

// result structure
[
	{
		resolved: true,
		rejected: false,
		status: 'fulfilled', // should be 'resolved' but we not fix this
		value: /**/,
	},
	{
		resolved: false,
		rejected: true,
		status: 'rejected',
		value: /**/,
	},
];
```
