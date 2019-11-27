# Function.prototype.new

To call a constructor, we need to use the `new` syntax. Its not easy to use with a hyper function. 
BetterJS provide another way to call constructors: 
```javascript
Constructor.new( /* ... */ );
```

## Usage

```javascript
import 'https://better-js.fenz.land/src/function-prototype/new.js';

class Foo {
	constructor( name, )
	{
		this.name= name;
	}
}

Foo.new( 'foo', ); // Foo{ name:'foo', }

[ 'foo', 'bar', 'baz', ].map( Foo.new, ); // Array [ Foo{} × 3 ]

'foo' |> Foo.new; // Foo{ name:'foo', }
```
