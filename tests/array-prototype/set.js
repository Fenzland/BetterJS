import { test, } from '../Robberfly.js';
import '../../src/array-prototype/set.js';

test( '{Array}.set', ( { assertBe, assertAs, }, )=> {
	const array= [ 0, 1, 2, ];
	
	assertBe( array.set( 0, 8, ), 8, );
	assertAs( array, [ 8, 1, 2, ], );
	assertBe( array.set( 1, 6, ), 6, );
	assertAs( array, [ 8, 6, 2, ], );
	assertBe( array.set( 2, 4, ), 4, );
	assertAs( array, [ 8, 6, 4, ], );
	assertBe( array.set( 4, 5, ), 5, );
	assertAs( array, [ 8, 6, 4, ], );
	
	assertBe( array.set( -1, 2, ), 2, );
	assertAs( array, [ 8, 6, 2, ], );
	assertBe( array.set( -2, 1, ), 1, );
	assertAs( array, [ 8, 1, 2, ], );
	assertBe( array.set( -3, 0, ), 0, );
	assertAs( array, [ 0, 1, 2, ], );
	assertBe( array.set( -4, -1, ), -1, );
	assertAs( array, [ 0, 1, 2, ], );
	
	assertBe( array.set( 3, 7, ), 7, );
	assertAs( array, [ 0, 1, 2, 7, ], );
}, );
