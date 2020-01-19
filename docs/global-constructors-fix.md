
## fix Generator and AsyncGenerator

_This feature makes breaking change, not included in *breaking-free* version_

There are some faulty designs with the prototype chains of Generator and AsyncGenerator. 

For example, here are a generator function and returns a generator, and the generator has a constructor. 
```javascript
const generatorFunction= function*(){};
const generator= generatorFunction();
const constructor= generator.constructor;
```

The `generator` is an object, so it certainly should be 
```javascript
generator instanceof constructor // false
```
But as we've tried out, it unexpectedly false. 

The `generatorFunction`, in some sense, construct the `generator`, so it looks should be 
```javascript
generatorFunction === constructor // false
```
but it's also false. At the least fortune, there is one thing true. 
```javascript
generator instanceof generatorFunction // true
```

And all generators have the same constructor, that's the global `Generator` provided by BetterJS. 
```javascript
constructor === Generator // true
```

Let's see the prototype graph
```
generator
    |
    |
    |     --constructor-→ undefined
    ↓    /
__proto__ ←--prototype--- generatorFunction --name--→  'generatorFunction'
    |
    |
    |     --constructor--
    ↓    /               ↘
__proto__ ←--prototype--- Generator --name--→ ''

```

There are three mistakes:

1. the constructor of the first depth point to undefined, but should be `generatorFunction`.
2. the `Generator` is in the prototype chain, but instanceof returrns false, that should be true.
3. the `Generator` has a empty name, it should be `'Generator'`.

We fix 2 and 3, but unable to fix the mistake 1. 

With BetterJS, we have
```javascript
generator instanceof constructor       // true
generator instanceof generatorFunction // true

generatorFunction === constructor      // false
constructor === Generator              // true
Generator.name === 'Generator'
```
