# better frozen

_This feature makes breaking change, not included in *breaking-free* version_

There is a short-sighted design that when an empty object is sealed, Object.isFrozen returns true, 
and when an empty object is prevented extensions, Object.isFrozen and Object.isSealed return true.

That make us unable to know what happend with the object. 

We fix this: Object.isFrozen returns whether the object is processed with Object.freeze, 
Object.isSealed returns whether the object is processed with Object.sealed or Object.freeze. 

|                             | isFrozen | isSealed | !isExtensible | better isFrozen | better isSealed | better !isExtensible |
|:---------------------------:|:--------:|:--------:|:-------------:|:---------------:|:---------------:|:--------------------:|
| primitive value             |   true   |   true   |     true      |      true       |      true       |        true          |
| freeze( {}, )               |   true   |   true   |     true      |      true       |      true       |        true          |
| freeze( {...}, )            |   true   |   true   |     true      |      true       |      true       |        true          |
| seal( {}, )                 |   true   |   true   |     true      |      false      |      true       |        true          |
| seal( {...}, )              |   false  |   true   |     true      |      false      |      true       |        true          |
| preventExtensions( {}, )    |   true   |   true   |     true      |      false      |      false      |        true          |
| preventExtensions( {...}, ) |   false  |   false  |     true      |      false      |      false      |        true          |

## Usage

```javascript
import 'https://better-js.fenz.land/src/object/better-frozen.js';

Object.isFrozen( object, );
Object.isSealed( object, );
Object.isExtensible( object, );
```
