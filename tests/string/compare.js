import { test, } from '../Robberfly.js';
import '../../src/string/compare.js';

test( 'String.compare', ( { assertBe, assertAs, }, )=> {
	assertBe( String.compare( '', '', ), 0, );
	assertBe( String.compare( '', '0', ), -1, );
	assertBe( String.compare( '0', '1', ), -1, );
	assertBe( String.compare( 'a', 'b', ), -1, );
	assertBe( String.compare( 'aa', 'b', ), -1, );
	assertBe( String.compare( 'a', 'aa', ), -1, );
	assertBe( String.compare( 'A', 'a', ), -1, );
	assertBe( String.compare( '0', '', ), 1, );
	assertBe( String.compare( '1', '0', ), 1, );
	assertBe( String.compare( 'b', 'a', ), 1, );
	assertBe( String.compare( 'b', 'aa', ), 1, );
	assertBe( String.compare( 'aa', 'a', ), 1, );
	assertBe( String.compare( 'a', 'A', ), 1, );
	
	assertAs(
		[ 'c', 'A', 'a', 'aa', 'ab', ].sort( String.compare, ),
		[ 'A', 'a', 'aa', 'ab', 'c', ],
	)
}, );
