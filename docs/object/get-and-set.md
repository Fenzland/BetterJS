# Object.get and Object.set

Functional getting and setting properties. 
`Object.get` will not get properties from prototypes. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/object/get-and-set.js';

const obj= { foo:'bar', };

Object.get( obj, 'foo', );           // 'bar'
Object.get( obj, 'hasOwnPropery', ); // undefined

Object.set( obj, 'bar', 'baz', );    // 'baz'

obj; // { foo:'bar', bar:'baz', }
```

Use in Functional Programming

```javascript
const data= [ { id:1, name:'foo', }, { id:2, name:'bar', }, ];
const getName= Object.get.postpare( 'name', );

data.map( getName, ); // [ 'foo', 'bar', ]
```

```javascript
value
	|> calculate
	|> Object.set.prepare( object, 'property', ) // set middle value in pipeline to an object
	|> continueWithValue
```
