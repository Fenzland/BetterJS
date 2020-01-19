# Object.map

Iterate enumerable properties of object and returns a new object. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/object/map.js';

const object= { foo:0, bar:1, [Symbol()]:2, };

Object.map( object, $=> $*2, ); // { foo:0, bar:2, }

object; // { foo:0, bar:1, [Symbol()]:2, } not change

```

Parameters and context of callback are like this:
```javascript
object= { foo:'bar', }

Object.map( object, function( value, key, self, ){
	value === 'bar';
	key === 'foo';
	self === object;
	this === context;
}, context, );
```
