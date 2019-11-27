# pipeline operator hack

[The Pipeline Operator](https://github.com/tc39/proposal-pipeline-operator) is still on stage 1 of the TC39 process. 
We provide a method on `Objcet.prototype` to hack this awesome feature. 

```javascript
import 'https://better-js.fenz.land/src/fp/pipeline-operator-hack.js';

// unless value is undefined, null or an object without prototype.
value['|>'](
	function_0,
	function_1,
	function_2,
);

// after the proposal implements
value
	|> function_0
	|> function_1
	|> function_2
;
```
