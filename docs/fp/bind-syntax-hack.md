# bind syntax hack

There are two useful cases about function bind:
* self binding: getting a method from an object or its prototype chain, and binding it to the object itself. 
* external method: binding an external method to an object (and call usually). 

There is a proposal about the second case [The Bind Syntax](https://github.com/tc39/proposal-bind-operator). 
It's still on stage 0 of the TC39 process, and the API may change. 
We make some kind of hack on `Object.prototype` to provide this two features. 

# Usage

```javascript
import 'https://better-js.fenz.land/src/fp/bind-syntax-hack.js';

const foo= [ 0, 1, 2, 3, ];

const odd= function( base, ){
	return this.filter( ( item, index, )=> index%base, );
};

const sliceFoo= foo['::'].slice;
const iterateFoo= foo['::'][Symbol.iterator];
const oddOfFoo= foo['::']( odd, );

sliceFoo( 1, ); // [ 1, 2, 3, ]
iterateFoo();   // Array Iterator with [ 0, 1, 2, 3, ]
oddOfFoo( 2, ); // [ 1, 3, ]
```
