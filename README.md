BetterJS
================================

JS is a pretty good language, but it can be better. 

This library does not export anything, but modifies build-in APIs. 

As a build-in APIs modifier, this module should be imported at the first. 
To be used with other build-in APIs modifiers is not recommanded. 

## Usage

To use full BetterJS, just import the index.js: 
```javascript
import 'https://better-js.fenz.land/index.js';

const anchor= '<a href="https://better-js.fenz.land/"></a>';

const href= anchor.matchGroup( /href="([^"]*)"/, 1, );
```

TypeScript is also available (require TypeScript >= 3.7):
```typescript
import 'https://better-js.fenz.land/index.ts';

const π:number= Math.π;
```

Or you can only use specific feature like below. 
```javascript
import 'https://better-js.fenz.land/src/promisive.js';

await timeout( 250, );
```

There are some breaking changes that may trouble you, you can use the breaking-free version. 
```javascript
import 'https://better-js.fenz.land/breaking-free.js';

const caches= new Map();

const data= caches.getOrSet( 'key', ()=> fetch( 'key', ), );
```

Some parts of BetterJS may depend on others. 
So when you import one feature, another feature may available too. 
But a breaking-free feature will never depend on a breaking feature.  

## Features

### on globalThis

* [SyncPromise](./docs/SyncPromise.md)
* [throws and tries](./docs/expressional-error-control.md)
* [global then, promisive timeout, nextFrame and window onload](./docs/promisive.md)
* [lists extend array](./docs/lists-extend-array.md) (breaking)
* [accessible AsyncFunction, GeneratorFunction, AsyncGeneratorFunction, Generator and AsyncGenerator](./docs/global-constructors.md)
* [fix Generator and AsyncGenerator](./docs/global-constructors-fix.md)
* [better types](./docs/types.md)

### on types

* [better instanceof](./docs/instanceof-types.md) (breaking)

#### String

* [matchGroup](./docs/string-prototype/matchGroup.md)
* [toCamelCase, toFlagCase, toSnakeCase and toBarbecueCase](./docs/string-prototype/toXXXCase.md)
* [better index finding](./docs/find-index.md)

* [String.compare](./docs/string/compare.md)
* [String.concat](./docs/string/concat.md)

#### Number

* [Number.isInfinite](./docs/number/isInfinite.md)
* [Number.equal](./docs/number/equal.md)
* [Number.or](./docs/number/or.md)
* [Number.MAX_BITWISE_INTEGER and Number.MIN_BITWISE_INTEGER](./docs/number/max-and-min-bitwise-integen.md)

#### BigInt

* [toJSON](./docs/bigint-prototype/toJSON.md)

#### Object

* [Object.isObject](./docs/object/isObject.md)
* [Object.isPrimitive](./docs/object/isPrimitive.md)
* [Object.isPureObject](./docs/object/isPureObject.md)
* [Object.equal](./docs/object/equal.md)
* [Object.areSame](./docs/object/areSame.md)
* [Object.deeplyGet and Object.deeplySet](./docs/object/deeplyGet-and-deeplySet.md)
* [Object.deeplyAssign](./docs/object/deeplyAssign.md)
* [Object.haveOwnProperty, Object.bePrototypeOf, Object.propertyBeEnumerable](./docs/object/staticize.md)
* [Object.map](./docs/object/map.md)
* [Object.get and Object.set](./docs/object/get-and-set.md)
* [better frozen](./docs/object/better-frozen.md) (breaking)

#### Function

* [Function.isFunction and Function.isClass](./docs/function/isFunction-and-isClass.md)
* [Function.isAsync](./docs/function/isAsync.md)
* [Function.prototype.new](./docs/function-prototype/new.md)
* [Function.prototype.rename](./docs/function-prototype/rename.md)
* [AsyncFunction.prototype.limit](./docs/async-function-prototype/limit.md)
* [GeneratorFunction.toIterator](./docs/generator-function/toIterator.md)

* [Function.pipe and Function.compose](./docs/fp/compose.md)
* [curry and yrruc](./docs/fp/curry.md)

#### Promise

* [Promise.any](./docs/promise/any.md)
* [Promise.try](./docs/promise/try.md)
* [Promise.make](./docs/promise/make.md)
* [better allSettled](./docs/promise/better-allSettled.md)
* [binded functions on Promise](./docs/promise/binded.md)

#### Array

* [better forEach](./docs/array-prototype/forEach-fix.md) (breaking)
* [sequentially async iterators](./docs/array-prototype/sequentially-async-iterators.md)
= [convolute](./docs/array-prototype/convolute.md)
* [get and set](./docs/array-prototype/get-and-set.md)
* [subArray](./docs/array-prototype/subArray.md)
* [findLast and findLastIndex](./docs/array-prototype/find-last.md)
* [seek and seekLast](./docs/array-prototype/seek.md)
* [dig and digLast](./docs/array-prototype/dig.md)
* [better index findings](./docs/find-index.md)
* [mapAndFilter](./docs/array-prototype/mapAndFilter.md)
* [implode and feed](./docs/array-prototype/implode-and-feed.md)
* [better slice](./docs/array-prototype/better-slice.md)
* [better reduce](./docs/array-prototype/better-reduce.md) (breaking)
* [better entries, keys and values](./docs/array-prototype/better-entries.md) (breaking)
* [shuffle](./docs/array-prototype/shuffle.md)
* [non-modifying methods](./docs/array-prototype/XXXed.md)

* [Array.concat](./docs/array/concat.md)

#### Map and Set

* [convert between maps and objects](./docs/map-and-set/map-from-and-to-object.md)
* [better modifications](./docs/map-and-set/better-modifications.md) (breaking)
* [better entries, keys and values](./docs/map-and-set/better-entries.md) (breaking)
* [getOrSet](./docs/map-and-set/getOrSet.md)
* [put](./docs/map-and-set/put.md)
* [pop](./docs/map-and-set/pop.md)
* [map](./docs/map-and-set/map.md)
* [flatMap](./docs/map-and-set/flatMap.md)
* [reduce](./docs/map-and-set/reduce.md)
* [sequentially async iterators](./docs/map-and-set/sequentially-async-iterators.md)
* [mapAndFilter](./docs/map-and-set/mapAndFilter.md)

#### Generator

* [toArray](./docs/generator-prototype/toArray.md)
* [map and forEach](./docs/generator-prototype/map-and-forEach.md)

* [GeneratorFunction.for](./docs/generator/for.md)
* [GeneratorFunction.range](./docs/generator/range.md)

#### AsyncGenerator

* [toArray](./docs/async-generator-prototype/toArray.md)
* [mapAwait and forEachAwait](./docs/async-generator-prototype/mapAwait-and-forEachAwait.md)
* [map and forEach](./docs/async-generator-prototype/map-and-forEach.md)

### EventTarget

* [better addEventListener and removeEventListener](./docs/event-target-prototype/listener-control/better-addEventListener-and-removeEventListener.md) (breaking)
* [removeEventListenersByType and removeAllEventListeners](./docs/event-target-prototype/listener-control/removeEventListenersByType-and-removeAllEventListeners.md)

### Math

* [Math.mod](./docs/math/mod.md)
* [π, Π, e](./docs/math/constents.md)

### Functional Programming

* [pipeline operator hack](./docs/fp/pipeline-operator-hack.md)
* [bind syntax hack](./docs/fp/bind-syntax-hack.md)
* [Function.pipe and Function.compose](./docs/fp/compose.md)
* [curry and yrruc](./docs/fp/curry.md)
* [detach methods from prototypes](./docs/fp/detach.md)
* [toMethod](./docs/fp/toMethod.md)
* [prepare and postpare](./docs/fp/prepare.md)
* [through and awaitThrough](./docs/fp/through.md)
* [Function.prototype.await](./docs/fp/await.md)
* [Function.prototype.valve](./docs/fp/valve.md)
* [Function.prototype.debounce](./docs/fp/debounce.md)
* [Function.prototype.throttle](./docs/fp/throttle.md)
* [noop](./docs/fp/noop.md)
* [run](./docs/fp/run.md)
* [if](./docs/fp/if.md)

#### Paradigm free

There are three paradigms in the JavaScript world, when a function has a main parameter and some of other parameters or options. 
The traditional JavaScript paradigm (OOP) put the main parameter as the `this` context; 
another widely used paradigm is put the main parameter at the first; 
the last paradigm that from other FP languages is put the main parameter at the last of parameter list. 

We provide various way to make them work together. 
Expect `curry`, we also support `yrruc` for the first parameter paradigm; 
A group methods of `detach` to help you convert a method with `this` into a functio; 
And `toMethod` let you convert functions into methods. 

#### Using prototypes

There are dozens of Functional Programming (FP) libraries. They often leave standard methods away, and make functions themselves. 
However, BetterJS only do the basic work and fully reuse then standard methods on the prototypes to make it minimal. 

Here is the code with a typical FP library. Obviously, they implement `map`, `join`, `slice` repeatedly. 
```javascript
import { pipe, map, join, slice, } from 'https://some-url.js';

pipe(
	map( x=> String (x*2), ),
	join( '~', ),
	slice( 1, ),
)( [ 0, 1, 2, ], );
```

Here is the code with BetterJS: 
```javascript
import 'https://better-js.fenz.land/fp.js';

const map= Array.prototype.map.detachCurry();
const join= String.prototype.join.detachCurry();
const slice= String.prototype.slice.detachCurry();

// before pipe operator coming
[ 0, 1, 2, ]['|>'](
	map( x=> String (x*2), ),
	join( '~', ),
	slice( 1, ),
);

// tomorrow
[ 0, 1, 2, ]
	|> map( x=> String (x*2), )
	|> join( '~', )
	|> slice( 1, )
;

```

As we see, functions `map`, `join`, `slice` are detached from standard prototypes. It makes the library minimal. 
Benefit from taking the way of build-in APIs modifying, we can provide a '|>' method on all basic prototypes, 
so need not to wait for the pipe operator coming. And it's easy to switch to |> syntax tomorrow. 

## Why BetterJS

The regular way to make JavaScript better is to make proposals to the TC39. But it's slow and conservative. 
There is another way, which is token by Prototype.js and JQuery, to build a better environment with a library, 
to make examples for the wold. Maybe the standard will absorb your ideas (and often make it better), 
like querySelector from JQuery and a lot of prototype methods form Prototype.js. 

You may think that BetterJS is just another Prototype.js. That's true, we take similar way and do similar things. 
But BetterJS is the more modern one, and only add feature in standard compatible way. 
When standard update in tomorrow, we can follow up. We also make breaking changes, 
but in a sustainable way too. The main version will keep these changes tomorrow. 

We are not always follow the standard, but make changes in main version. 
Because even standard makes bad designs or mistakes, and they often unable to fix them, like `typeof null === 'object'`. 
If we can make it better beyond the standard can do, why not? 

Historical burdens will not exist in every project. We have main version for brand new modern projects, 
and breaking-free version for historical projects. What's more, you can pick out features you like, and make a DIY version. 
Even if you just read the code and get some ideas, our works are worthful. 

Let's make JavaScript better, let's make the world better. 
