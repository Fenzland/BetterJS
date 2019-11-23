# Function.prototype.curry and Function.prototype.yrruc

The currying is another main idea of Functional Programming. Different with compose, it work on a single function. 
So we implement it as a method on `Function.prototype`, if you need a function rather then method, you can just detach it. 
Just like `curry` function of most JavaScript FP library, our `curry` support multi-parameters but not only one. 
One step further, our curried functions keeps a length information, 
you can know how many parameters will cause the final result before you call it. 

Once the parameters are enough, the function not returns a new functions anymore, but final value. 
It's a fact that most functions in JavaScript ecosystem put the main parameter at the first but not last. 
They are not suitable to work with traditional `curry`. Different with ugly placeholder solution of other FP libraries. 
We design a new method that works like a reversed `curry`, which feed parameters or options at the end of parameter list. 
And we name it `yrruc` read as /jrʌk/.

## Usage

```javascript
import 'https://better-js.fenz.land/src/fp/curry.js';

const func= ( a, b, c, d, )=> `a:${a}, b:${b}, c:${c}, d:${d}`;

const curried= func.curry();

curried.length; // 4

curried( 0, ); // returns a curried function with length 3
// works like 
// (( b, c, d, )=> `a:0, b:${b}, c:${c}, d:${d}`).curry();

curried( 0, 1, ); // returns a curried function with length 2
// works like 
// (( c, d, )=> `a:0, b:1, c:${c}, d:${d}`).curry();

curried( 0, 1, 2, 3, );
curried( 0, 1, )( 2, 3, );
curried( 0, )( 1, 2, 3, );
curried( 0, )( 1, )( 2, )( 3, );
// all return 'a:0, b:1, c:2, d:3'


const yrruced= func.yrruc();

yrruced.length; // 4

yrruced( 0, ); // returns a yrruced function with length 3
// works like 
// (( a, b, c, )=> `a:${a}, b:${b}, c:${c}, d:0`).yrruc();

yrruced( 0, 1, ); // returns a yrruced function with length 2
// works like 
// (( a, b, )=> `a:${a}, b:${b}, c:0, d:1`).yrruc();

yrruced( 0, 1, 2, 3, );          // 'a:0, b:1, c:2, d:3'
curried( 0, 1, )( 2, 3, );       // 'a:2, b:3, c:0, d:1'
yrruced( 0, )( 1, 2, 3, );       // 'a:1, b:2, c:3, d:0'
yrruced( 0, )( 1, )( 2, )( 3, ); // 'a:3, b:2, c:1, d:0'
```

You can also pass options or extra parameters at the `curry` or `yrruc` method. 

```javascript
func.curry( 0, 1, );
// works like 
// (( c, d, )=> `a:0, b:1, c:${c}, d:${d}`).curry();

func.yrruc( 0, 1, );
// works like 
// (( a, b, )=> `a:${a}, b:${b}, c:0, d:1`).yrruc();
```

With this two methods, we can put any functions into the pipeline. 
Here is a example for working without placeholder. 

```javascript

const c= 2;

const myFunc= func.curry( 0, 1, ).yrruc( 3, );

c |> myFunc; // 'a:0, b:1, c:2, d:3'

// JavaScript still not support |> operator, you can use BetterJS/fp/pipeline.js instead currently
```
