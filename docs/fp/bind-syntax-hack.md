# bind syntax hack

[The Bind Syntax](https://github.com/tc39/proposal-bind-operator) is still on stage 0 of the TC39 process. 
And it's not a well design. We design a better version. And hack it with a method on `Object.prototype`. 

# Usage

```javascript
import 'https://better-js.fenz.land/src/fp/bind-syntax-hack.js';

const foo= document.getElementById( 'foo' );

function addClass( className ){
	this.classList.add( className );
}

const setAttributeToFoo= foo['::']( 'setAttribute', );
const addClassToFoo= foo['::']( addClass, );

// maybe after the proposal redesign and implement
const setAttributeToFoo= foo::setAttribute;
const removeAttributeFromFoo= foo::['removeAttribute'];
const addClassToFoo= foo::{addClass};

```
