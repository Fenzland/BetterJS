# Function.prototype.toMethod

The method `detach` help you to detach method from prototype and convert into a method. 
The `toMethod` help you to do the opposite thing, to convert a function into a method. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/fp/toMethod.js';

const odd= ( array, base, )=> array.filter( ( item, index, )=> index%base, );

Array.prototype.odd= odd.toMethod();

[ 0, 1, 2, 3, ].odd( 2, ); // [ 1, 3, ]
```
In this case, the first parameter become `this`. You can pass a integer to tell which parameter become `this`:

```javascript
// with a strange ordered parameter
const strangeSlice= ( start, array, end=Infinity, )=> array.slice( start, end, );

Array.prototype.strangeSlice= strangeSlice.toMethod( 1, );

[ 0, 1, 2, 3, ].strangeSlice( 1, 2, ); // [ 1, ]
```

We also support negative index:

```javascript
// tail operation style
const strangeSlice= ( start, end, array, )=> array.slice( start, end, );

Array.prototype.tailSlice= tailSlice.toMethod( -1, );

[ 0, 1, 2, 3, ].tailSlice( 1, 2, ); // [ 1, ]
```
