# Function.noop

Run the given function without parameter, and return the result
The source code is simply:

```javascript
f=> f()
```

## Usage

```javascript
import 'https://better-js.fenz.land/src/fp/run.js';

listeners.forEach( Function.run, );

parameter
	|> buildFunction
	|> Function.run
	|> handleResult
```
