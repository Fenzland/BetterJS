# better addEventListener and removeEventListener

_This feature makes breaking change, not included in *breaking-free* version_

Better`addEventListener` and `removeEventListener` returns the given function back. 

## Usage

You can get the listener from `addEventListener` but not need to move it out. 

```javascript
import 'https://better-js.fenz.land/src/event-target-prototype/listener-control.js';

const listener= window.addEventListener( 'event-name', ()=> {}, );

window.removeEventListener( 'event-name', listener, );
```

When you add a listener to event like window.resize, select.change, checkbox.change etc. 
You must need to run the listener initially. With BetterJS, that's simple. 

```javascript
window.addEventListener( 'resize', ()=>{}, )();
```
