# String.compare

Compare two strings, 

## Usage

```javascript
import 'https://better-js.fenz.land/src/string/compare.js';

String.compare( '', '', );   // 0
String.compare( 'a', 'b', ); // -1
String.compare( 'b', 'a', ); // 1

[ 'ba', 'a', 'c', 'b', ].sort( String.compare, ); // [ 'a', 'b', 'ba', 'c', ]
```
