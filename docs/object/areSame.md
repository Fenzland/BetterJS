# Object.areSame

BetterJS provide a better way to compare two values: `Object.areSame`. 


## Usage

```javascript
import 'https://better-js.fenz.land/src/object/areSame.js';

// return true
Object.areSame( NaN, NaN, );
Object.areSame( [ 0, 1, ], [ 0, 1, ], );
Object.areSame(
	{ foo:1, bar:{ baz:2, }, },
	{ bar:{ baz:2, }, foo:1, },
);
Object.areSame(
	new Set( [ 0, 1, ] ),
	new Set( [ 0, 1, ] ),
);
Object.areSame(
	new Map( [ [ 0, 1, ], [ 2, 2, ], ] ),
	new Map( [ [ 2, 2, ], [ 0, 1, ], ] ),
);

// return false
Object.areSame( [ 0, 1, ], [ 1, 0, ], );
Object.areSame(
	{ foo:1, },
	new function(){ this.foo=1; }(),
);
```
