# binded functions on Promise

There are weird design that functions on Promise cannot designed as methods and cannot call without Promise as context. 
We bind them to Promise, so you can treat them as normal functions. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/promise/binded.js';

const { resolve, reject, all, race, }= Promise;

resolve( value, );
reject( reason, );
all( [ ...promise, ...values, ], );
race( [ ...promise, ...values, ], );

```

```javascript
import 'https://better-js.fenz.land/src/promise/better-allSettled.js';

const { allSettled, }= Promise;

allSettled( [ ...promise, ...values, ], );
```

```javascript
import 'https://better-js.fenz.land/src/promise/any.js';

const { any, }= Promise;

any( [ ...promise, ...values, ], );
```

```javascript
import 'https://better-js.fenz.land/src/promise/make.js';

const { make, }= Promise;

make();
```

```javascript
import 'https://better-js.fenz.land/src/promise/try.js';

const { try:_try, }= Promise;

_try();
```
