# better Array.prototype.reduce

_This feature makes breaking change, not included in *breaking-free* version_

The Array.prototype.reduce have two usage with or without the initial value. 
Usage without initial value is bad. 
The fist parameter of callback function means item when it first called, but means value otherwise. 
Much worse, if you reduce at a empty array without initial value, it throws TypeError. 

So we remove this usage, assume the initial value as undefined when you omit it. 

The same as fixed `Array.prototype.forEach`, better reduce iterate new pushed items during iterating. 

## Usage

Just same as before, but the first parameter always means value but not item, and can use at empty array.

```javascript

[].reduce( ( sum, item, )=> sum - - item, );           // undefined
[ 1, ].reduce( ( sum, item, )=> sum - - item, );       // NaN

[].reduce( ( sum, item, )=> sum - - item, 0, );        // 0
[ 1, ].reduce( ( sum, item, )=> sum - - item, 0, );    // 1
[ 1, 2, ].reduce( ( sum, item, )=> sum - - item, 0, ); // 3
```
