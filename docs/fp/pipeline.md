# pipeline

[The Pipeline Operator](https://github.com/tc39/proposal-pipeline-operator) is still on stage 1 of the TC39 process. 
We provide a method to hack this awesome feature. 

```javascript
import 'https://better-js.fenz.land/src/fp/pipeline.js';

// unless value is undefined, null or an object without prototype.
value['|>'](
	function_0,
	function_1,
	function_2,
);
```
