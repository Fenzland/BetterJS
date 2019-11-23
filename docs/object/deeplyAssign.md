# Object.deeplyAssign

Lot's of library provide deeply cloning function. The may named `deepClone` or `deepCopy`. 
We also provide this function, and designed follows `Object.assign` and named `deeplyAssign`. 

Our `Object.deeplyAssign` support circular references with fully cloning. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/object/deeplyAssign.js';

const source_0= {
	foo: {
		bar: {
			baz: 1,
		},
	},
};

const source_1= {
	foo: {
		bar: {
			qux: 2,
		},
	},
};

const target= {};

Object.deeplyAssign( target, source_0, source_1, ); // return target itself

// target becomes below structure, and totally standalone with source_0 and source_1.
({
	foo: {
		bar: {
			baz: 1,
			qux: 2,
		},
	},
});

```

#### with circular references

```javascript
const foo= {};
const bar= {};

foo.foo= foo;
foo.bar= bar;
bar.bar= bar;

const result= Object.deeplyAssign( {}, foo, );

({
	foo: /* ref to result itself */,
	bar: { /* an object cloned with bar */
		bar: /* ref to the clone of bar */,
	},
});
```
