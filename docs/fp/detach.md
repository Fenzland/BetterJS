# detach methods from prototypes

In JavaScript, there are lots of useful method on various prototypes. 
When we program functionally, we'd not to build the wheels repeatedly indeed.  
BetterJS give you a way to detach methods from prototypes, and become purer functions. 

## Usage

#### Function.prototype.detach

```javascript
import 'https://better-js.fenz.land/src/fp/detach.js';

const repeatString= String.prototype.repeat.detach();
// works like
// ( string, count, )=> string.repeat( count, );

repeatString( 'a', 5, ); // aaaaa
```

#### Function.prototype.detachTail

```javascript
import 'https://better-js.fenz.land/src/fp/detach.js';

const repeatString= String.prototype.repeat.detachTail();
// works like
// ( count, string, )=> string.repeat( count, );

repeatString( 5, 'a', ); // aaaaa
```

```javascript
import 'https://better-js.fenz.land/src/fp/detachCurry.js';

const repeatString= String.prototype.repeat.detachYrruc();
// short for .detach().yrruc()
// works like
// (( string, count, )=> string.repeat( count, )).yrruc();

repeatString( 'a', 5, );    // aaaaa
repeatString( 5, )( 'a', ); // aaaaa

```

```javascript
import 'https://better-js.fenz.land/src/fp/detachCurry.js';

const repeatString= String.prototype.repeat.detachCurry();
// short for .detach().curry()
// works like
// (( string, count, )=> string.repeat( count, )).curry();

repeatString( 'a', 5, );    // aaaaa
repeatString( 'a', )( 5, ); // aaaaa

```

```javascript
import 'https://better-js.fenz.land/src/fp/detachCurry.js';

const repeatString= String.prototype.repeat.detachTailCurry();
// short for .detachTail().curry()
// works like
// (( count, string, )=> string.repeat( count, )).curry();

repeatString( 5, 'a', );    // aaaaa
repeatString( 5, )( 'a', ); // aaaaa

```
