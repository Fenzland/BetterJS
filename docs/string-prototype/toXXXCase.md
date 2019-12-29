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
'CAMEL_CASE'.toCamelCase();       // 'camelCase'
'camel-case'.toCamelCase();       // 'camelCase'

'flagCase'.toFlagCase();          // 'FlagCase'
'flag_case'.toFlagCase();         // 'FlagCase'
'FLAG_CASE'.toFlagCase();         // 'FlagCase'
'flag-case'.toFlagCase();         // 'FlagCase'

'snakeCase'.toSnakeCase();        // 'snake_case'
'SnakeCase'.toSnakeCase();        // 'snake_case'
'SNAKE_CASE'.toSnakeCase();       // 'snake_case'
'snake-case'.toSnakeCase();       // 'snake_case'

'pythonCase'.toPythonCase();      // 'PYTHON_CASE'
'PythonCase'.toPythonCase();      // 'PYTHON_CASE'
'python_case'.toPythonCase();     // 'PYTHON_CASE'
'python-case'.toPythonCase();     // 'PYTHON_CASE'

'barbecueCase'.toBarbecueCase();  // 'barbecue-case'
'BarbecueCase'.toBarbecueCase();  // 'barbecue-case'
'barbecue_case'.toBarbecueCase(); // 'barbecue-case'
'BARBECUE_CASE'.toBarbecueCase(); // 'barbecue-case'

```
