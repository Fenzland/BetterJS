# accessible AsyncFunction, GeneratorFunction and AsyncGeneratorFunction

BetterJS let you access AsyncFunction, GeneratorFunction and AsyncGeneratorFunction with global scope. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/global-constructors.js';

(async ()=> {}) instanceof AsyncFunction;
(function *(){}) instanceof GeneratorFunction;
(async function *(){}) instanceof AsyncGeneratorFunction;
```
