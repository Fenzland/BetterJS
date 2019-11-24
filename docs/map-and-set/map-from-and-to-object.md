# Map.fromObject and Map.prototype.toObject

BetterJS provide a easy way to convert data between maps and objects. 
That's `Map.fromObject` and `Map.prototype.toObject`. 

Objects can use a string or symbol as a key, and only string key can be enumerable. 
So `Map.fromObject` only takes entries with string keys. 
Maps can use anything as a key, for the same reason, `Map.prototype.toObject` only takes string key too. 
It's must be mentioned that the number or bigint keys will be ignored rather then convert to string. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/map-and-set/map-from-and-to-object.js';

const map= Map.fromObject( { 'foo':'bar', }, );

const object= map.toObject();

```
