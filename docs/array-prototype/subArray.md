# Array.prototype.subArray

The `Array.prototype.slice` access the secondary parameter as the `end`, 
there need be a similar method that access the secondary parameter as the `length`. 
That's the `subArray`. `subArray` support negative start and negative length.  

## Usage

```javascript
const array= [ 0, 1, 2, 3, ];

array.subArray( 1, 1, );   // [ 1, ]
array.subArray( -2, 1, );  // [ 2, ]
array.subArray( 2, -2, );  // [ 0, 1, ]
array.subArray( -1, -2, ); // [ 1, 2, ]

// edge cases
array.subArray( 5, -2, );  // [ 3, ]
array.subArray( -5, 4, );  // [ 0, 1, ]

```
