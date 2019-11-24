# removeEventListenersByType and removeAllEventListeners

It's difficult to remove listeners from a standard EventTarget. 
Especially when we need to destroy a event target, 
we have to get all reference of listeners and remove them one by one. 

BetterJS will make it much easier. You can remove listeners by type, 
or just remove all listeners. That's useful when you destroy a DOM. 

## Usage

```javascript
// main version
import 'https://better-js.fenz.land/src/event-target-prototype/listener-control.js';

// breaking-free version
import 'https://better-js.fenz.land/src/event-target-prototype/listener-control.breaking-free.js';

dom.removeEventListenersByType( 'click', );

dom.removeAllEventListeners();
dom.remove();
```
