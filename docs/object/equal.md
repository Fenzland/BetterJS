# Object.equal

JavaScript has several ways to compare to values: `==`, `===`, `Object.is`... 
They are different on some tricky values like `NaN`, `-0`. 
`==` is a way we need to avoid to use, so we'll not talk about;
`===` assume two `NaN`s are different, but `0` equals `-0`; 
`Object.is` assume two `NaN`s are equal, but `0` and `-0` are different. 
And there is a internal way, use in `Array.prototype.includes`, 
and the key `Set` and `Map`, different with any other exposed way, 
it assume two `NaN`s are equal, `0` and `-0` are equal. 
We implement it as a function `Object.equal`. 


## Usage

```javascript
import 'https://better-js.fenz.land/src/object/equal.js';

Object.equal( NaN, NaN, );      // true
Object.equal( 0, -0, );         // true


if( Object.equal( foo, bar, ) )
{
	[ foo, ].includes( bar, ) === true;
	[ bar, ].includes( foo, ) === true;
	
	new Set( [ foo, bar, ], ).size === 1;
	
	new Map( [ [ foo, value, ], ], ).get( bar, ) === value;
}
```
