# Object.deeplyGet and Object.deeplySet

We provide `deeplyGet` and `deeplySet` to help you to get or set with a deep level data structure. 
Different with `.` operator, `deeplyGet` cannot get properties from prototype. 
The `deeplySet` can build structure automatically, so you can start easily. 
At that time, a number as index will help you to create an array. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/object/deeplyGet-and-deeplySet.js';

const object= {
	foo: {
		bar: {
			baz: 1,
		},
	},
};

Object.deeplyGet( object, [ 'foo', 'bar', 'baz', ], ); // 1
Object.deeplyGet( object, [ 'foo', 'foo', 'foo', ], ); // undefined
Object.deeplyGet( object, [ 'constructor', ], );       // undefined
Object.deeplyGet( object, [ '__proto__', ], );         // undefined

Object.deeplySet( object, [ 'foo', 'baz', 0, '0', ], 'dog', );

// object becomes:
({
	foo: {
		bar: {
			baz: 1,
		},
		baz: [
			{ 0:'dog', },
		],
	},
});
```
