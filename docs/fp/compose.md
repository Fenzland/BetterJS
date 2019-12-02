# Function.pipe, Function.compose, Function.asyncPipe and Function.asyncCompose

The `compose` is a main idea of Functional Programming, but it's designed backwardly. 
So people come up with a forward version: `pipe`. We implement them at the `Function` global module. 
And we also support asynchronous version: `asyncPipe` and `asyncCompose`

## Usage

```javascript
import 'https://better-js.fenz.land/src/fp/compose.js';

const composedB= Function.compose( function_2, function_1, function_0, );

const composedF= Function.pipe( function_0, function_1, function_2, );

const composedB= Function.asyncCompose( function_2, function_1, function_0, );

const composedF= Function.asyncPipe( function_0, function_1, function_2, );
```
