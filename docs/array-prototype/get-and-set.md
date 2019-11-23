# Array.prototype.get and Array.prototype.set

If you want to access the last or penultimate item of an array, you have to calculate the index like this: 

```javascript
const array= [ /* ... */ ];

const last= array[array.length - 1];
const penu= array[array.length - 2];

array[array.length - 1]= new_last;
array[array.length - 2]= new_penu;
```
It's perfect if we can do what like Python:

```javascript
const array= [ /* ... */ ];

const last= array[-1];
const penu= array[-2];

array[-1]= new_last;
array[-2]= new_penu;
```

But we cannot implement it without terrible Proxy wrapping. 
So we provide two method `get` and `set` on `Array.prototype` instead.  

## Usage

```javascript
const array= [ /* ... */ ];

const last= array.get( -1, );
const penu= array.get( -2, );

array.set(-1, new_last, );
array.set(-2, new_penu, );
```

There is a difference between our `set()` and `[]=` when index over length. 

```javascript
const foo= [];
const bar= [];

foo.set( 3, 'value', );
bar[3]= 'value';

foo // []
bar // [ empty × 3, 'value', ]
```

Here are the behaviors of `set()`:
* if 0 <= index < length :   set the item of [index]
* if -length <= index < 0 :  set the item of [length + index]
* if index = length :        push the item to the tail of array
* if index < -length :       noop
* if length < index :        noop
