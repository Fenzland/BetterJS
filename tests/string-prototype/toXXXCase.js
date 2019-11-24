import { test, } from '../Robberfly.js';
import '../../src/string-prototype/toXXXCase.js';

test( '{String}.toXXXCase', ( { assertBe, }, )=> {
	
	assertBe( 'CamelCase'.toCamelCase(), 'camelCase', );
	assertBe( 'camel_case'.toCamelCase(), 'camelCase', );
	assertBe( 'camel-case'.toCamelCase(), 'camelCase', );
	
	assertBe( 'flagCase'.toFlagCase(), 'FlagCase', );
	assertBe( 'flag_case'.toFlagCase(), 'FlagCase', );
	assertBe( 'flag-case'.toFlagCase(), 'FlagCase', );
	
	assertBe( 'snakeCase'.toSnakeCase(), 'snake_case', );
	assertBe( 'SnakeCase'.toSnakeCase(), 'snake_case', );
	assertBe( 'snake-case'.toSnakeCase(), 'snake_case', );
	
	assertBe( 'barbecueCase'.toBarbecueCase(), 'barbecue-case', );
	assertBe( 'BarbecueCase'.toBarbecueCase(), 'barbecue-case', );
	assertBe( 'barbecue_case'.toBarbecueCase(), 'barbecue-case', );
	
}, );
