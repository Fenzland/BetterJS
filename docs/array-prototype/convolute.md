# Array.prototype.convolute

`Array.prototype.convolute(filter:Function):Array` access a function as `filter`, 
take items that number of `filter.length` as arguments to run the `filter`, 
take items start with first, second ... until end with the last, 
totally run `array.length - filter.length + 1` times and return array of the results.
Specially, if the `filter.length` is 0, the filter will never run and just return a new array same as the origin;
if the `filter.length` is 1, convolute works like Array.prototype.map;
if the `filter.length` is greater then array.length, do nothing but return a empty array. 


## Usage

```javascript
import 'https://better-js.fenz.land/src/array-prototype/convolute.js';

const source= [ 0, 1, 2, 3, ];

source.convolute( ()=> { throw 'never run' }, );                  // [ 0, 1, 2, 3, ]
source.convolute( x=> `${x}`, );                                  // [ '0', '1', '2', '3', ]
source.convolute( ( x, y, )=> `${x}${y}`, );                      // [ '01', '12', '23', ]
source.convolute( ( x, y, z, )=> `${x}${y}${z}`, );               //   [ '012', '123', ]
source.convolute( ( w, x, y, z, )=> `${w}${x}${y}${z}`, );        //     [ '0123', ]
source.convolute( ( v, w, x, y, z, )=> `${v}${w}${x}${y}${z}`, ); //         []
```

