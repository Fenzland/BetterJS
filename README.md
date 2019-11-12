BetterJS
================================

JS is a pretty good language, but it can be better. 

This libarary does not export anything, but modifies build-in APIs. 

As a build-in APIs modifier, this module should be imported at the first. 
To be used with other build-in APIs modifiers is not recommanded. 

## Usage

To use full BetterJS, just import the index.js: 
```javascript
import 'https://better-js.fenz.land/index.js';

const anchor= '<a href="https://better-js.fenz.land/"></a>';

const href= anchor.matchGroup( /href="([^"]*)"/, 1, );
```

Or you can only use specific feature like below. 
```javascript
import 'https://better-js.fenz.land/src/promisive.js';

await timeout( 250, );
```

There are some breaking changes that may trouble you, you can use the breaking-free version. 
```javascript
import 'https://better-js.fenz.land/breaking-free.js';

const caches= new Map();

const data= caches.getOrSet( 'key', ()=> fetch( 'key', ), );
```

Some parts of BetterJS may depend on others. 
So when you import one feature, another feature may available too. 
But a breaking-free feature will never depend on a breaking feature.  
