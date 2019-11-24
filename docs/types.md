# better types

The operator `typeof` is not a good type detector. 
If you find that `typeof value` is `'object'`, you have no idea about what the value actually is. 
It may be a promise, an array, a map or set, a generator, string or number object, even `null`. 
On the other hand, 

We make a new type system named BJT (BetterJS Type). In this system, a value has a group of type. 
For example, type of `new String()` is `object:string`, means it's both an object and a string; 
type of `()=>{}` is `object:function`, it's both an object and a function. 
You can use `typeOf` to get the type label, or use `typesOf` to get an array that split with `:`. 
And the most useful function is the `withType`, that's a 

## Usage

The APIs of SyncPromise are almost all the same as Promise, only except the constructor. 

```javascript
import 'https://better-js.fenz.land/src/types.js';

typeof null;                                // 'object'
typeOf( null, );                            // 'null'

typeOf( ()=> {}, );                         // 'object:function'
typesOf( ()=> {}, );                        // [ 'object', 'function', ]
withType( ()=> {}, 'object', );             // true
withType( ()=> {}, 'function', );           // true
withType( ()=> {}, 'object', 'function', ); // true

```

## Available types

* `undefined`
* `null`
* `boolean`
* `string`
* `number`
* `bigint`
* `symbol`
* `object`
* `object:boolean`
* `object:string`
* `object:number`
* `object:bigint`
* `object:symbol`
* `object:regexp`
* `object:array`
* `object:map`
* `object:set`
* `object:weakmap`
* `object:weakset`
* `object:weakref`
* `object:function`
* `object:async:function`
* `object:class`
* `object:async:class`
* `object:generatorfunction:function`
* `object:async:generatorfunction:function`
* `object:generator`
* `object:async:generator`
* `object:promise`
