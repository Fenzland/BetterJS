# bind syntax hack

[The Bind Syntax](https://github.com/tc39/proposal-bind-operator) is still on stage 0 of the TC39 process. 
And it's not a well design. We design a better version. And hack it with a method on `Object.prototype`. 

# Usage

```javascript
import 'https://better-js.fenz.land/src/fp/bind-syntax-hack.js';

const foo= [ 0, 1, 2, ];

function *odd(){
	for( const [ index, value, ] of this.entries() )
	if( Math.mod( index, 2, ) === 1 )
		yield value;
}

const sliceFoo= foo['::'].slice;
const iterateFoo= foo['::'][Symbol.iterator];
const oddOfFoo= foo['::']( odd, );

// maybe after the proposal redesign and implement
const sliceFoo= foo::slice;
const iterateFoo= foo::[Symbol.iterator];
const oddOfFoo= foo::{odd};

```
