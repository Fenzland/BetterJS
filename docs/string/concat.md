# String.concat

Concat given strings, if arrays given, auto flatten them. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/string/concat.js';

String.concat( 'foo', 'bar', 0, null, ); // 'foobar0null'

// auto flatten
''.concat( [ 'foo', 'bar', ], 'baz', ); // 'foo,barbaz'
String.concat( [ 'foo', 'bar', ], 'baz', ); // 'foobarbaz'
```
