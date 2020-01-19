# Function.prototype.rename

rename a function and return itself.

```javascript
import 'https://better-js.fenz.land/src/function-prototype/named.js';

const foo= ()=> {};

const bar= function(){};

function baz()
{}

class qux
{}

foo.name; // foo
bar.name; // bar
baz.name; // baz
qux.name; // qux

foo.rename( 'newName', ); // return the function
bar.rename( 'newName', ); // return the function
baz.rename( 'newName', ); // return the function
qux.rename( 'newName', ); // return the function

foo.name; // newName
bar.name; // newName
baz.name; // newName
qux.name; // newName

```
