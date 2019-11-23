# Function.pipe and Function.compose

The `compose` is a main idea of Functional Programming, but it's designed backwardly. 
So people come up with a forward version: `pipe`. We implement them at the `Function` global module. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/fp/compose.js';

const composedB= Function.compose( function_2, function_1, function_0, );

const composedF= Function.pipe( function_0, function_1, function_2, );
```
