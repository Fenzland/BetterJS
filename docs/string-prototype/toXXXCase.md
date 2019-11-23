# toCamelCase, toFlagCase, toSnakeCase and toBarbecueCase

Change stings between different cases: 

* camelCase
* FlagCase
* snake_case
* barbecue-case

## Usage

```javascript
import 'https://better-js.fenz.land/src/string-prototype/toXXXCase.js';

'CamelCase'.toCamelCase();        // 'camelCase'
'camel_case'.toCamelCase();       // 'camelCase'
'camel-case'.toCamelCase();       // 'camelCase'

'flagCase'.toFlagCase();          // 'FlagCase'
'flag_case'.toFlagCase();         // 'FlagCase'
'flag-case'.toFlagCase();         // 'FlagCase'

'snakeCase'.toSnakeCase();        // 'snake_case'
'SnakeCase'.toSnakeCase();        // 'snake_case'
'snake-case'.toSnakeCase();       // 'snake_case'

'barbecueCase'.toBarbecueCase();  // 'barbecue-case'
'BarbecueCase'.toBarbecueCase();  // 'barbecue-case'
'barbecue_case'.toBarbecueCase(); // 'barbecue-case'

```
