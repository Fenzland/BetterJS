import { test, } from '../Robberfly.js';
import '../../src/string-prototype/find-index.js';

test( 'String find-index', ( { assertBe, }, )=> {
	assertBe( 'abcdabcd'.idxOf( 'a', ), 0, );
	assertBe( 'abcdabcd'.idxOf( 'b', ), 1, );
	assertBe( 'abcdabcd'.idxOf( 'c', ), 2, );
	assertBe( 'abcdabcd'.idxOf( 'e', ), NaN, );
	
	assertBe( 'abcdabcd'.lastIdxOf( 'a', ), 4, );
	assertBe( 'abcdabcd'.lastIdxOf( 'b', ), 5, );
	assertBe( 'abcdabcd'.lastIdxOf( 'c', ), 6, );
	assertBe( 'abcdabcd'.lastIdxOf( 'e', ), NaN, );
	
	assertBe( 'abcdabcd'.searchIdx( 'a', ), 0, );
	assertBe( 'abcdabcd'.searchIdx( 'b', ), 1, );
	assertBe( 'abcdabcd'.searchIdx( 'c', ), 2, );
	assertBe( 'abcdabcd'.searchIdx( 'e', ), NaN, );
	
	assertBe( 'abcdabcd'.searchIdx( /^/, ), 0, );
	assertBe( 'abcdabcd'.searchIdx( /[^ab]/, ), 2, );
	assertBe( 'abcdabcd'.searchIdx( /$/, ), 8, );
	assertBe( 'abcdabcd'.searchIdx( /^$/, ), NaN, );
}, );
