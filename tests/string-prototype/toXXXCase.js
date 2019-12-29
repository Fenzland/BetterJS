import { test, } from '../Robberfly.js';
import '../../src/string-prototype/toXXXCase.js';

test( '{String}.toXXXCase', ( { assertBe, }, )=> {
	
	assertBe( 'CamelCase'.toCamelCase(), 'camelCase', );
	assertBe( 'camel_case'.toCamelCase(), 'camelCase', );
	assertBe( 'CAMEL_CASE'.toCamelCase(), 'camelCase', );
	assertBe( 'camel-case'.toCamelCase(), 'camelCase', );
	
	assertBe( 'flagCase'.toFlagCase(), 'FlagCase', );
	assertBe( 'flag_case'.toFlagCase(), 'FlagCase', );
	assertBe( 'FLAG_CASE'.toFlagCase(), 'FlagCase', );
	assertBe( 'flag-case'.toFlagCase(), 'FlagCase', );
	
	assertBe( 'snakeCase'.toSnakeCase(), 'snake_case', );
	assertBe( 'SnakeCase'.toSnakeCase(), 'snake_case', );
	assertBe( 'SNAKE_CASE'.toSnakeCase(), 'snake_case', );
	assertBe( 'snake-case'.toSnakeCase(), 'snake_case', );
	
	assertBe( 'pythonCase'.toPythonCase(), 'PYTHON_CASE', );
	assertBe( 'PythonCase'.toPythonCase(), 'PYTHON_CASE', );
	assertBe( 'python_case'.toPythonCase(), 'PYTHON_CASE', );
	assertBe( 'python-case'.toPythonCase(), 'PYTHON_CASE', );
	
	assertBe( 'barbecueCase'.toBarbecueCase(), 'barbecue-case', );
	assertBe( 'BarbecueCase'.toBarbecueCase(), 'barbecue-case', );
	assertBe( 'barbecue_case'.toBarbecueCase(), 'barbecue-case', );
	assertBe( 'BARBECUE_CASE'.toBarbecueCase(), 'barbecue-case', );
	
}, );
