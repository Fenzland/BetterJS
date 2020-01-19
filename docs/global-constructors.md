# accessible AsyncFunction, GeneratorFunction and AsyncGeneratorFunction

BetterJS let you access AsyncFunction, GeneratorFunction, AsyncGeneratorFunction 
Generator and AsyncGenerator with global scope. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/global-constructors.js';

(async ()=> {}) instanceof AsyncFunction;
(function *(){}) instanceof GeneratorFunction;
(async function *(){}) instanceof AsyncGeneratorFunction;

(function *(){})() instanceof Generator;
(async function *(){})() instanceof AsyncGenerator;
```
