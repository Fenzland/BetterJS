import { test, } from '../Robberfly.js';
import '../../src/array-prototype/get-and-subArray.js';

test( '{Array}.get', ( { assertBe, }, )=> {
	const array= [ 0, 1, 2, ];
	
	assertBe( array.get( 0, ), 0, );
	assertBe( array.get( 1, ), 1, );
	assertBe( array.get( 2, ), 2, );
	assertBe( array.get( 3, ), undefined, );
	assertBe( array.get( -1, ), 2, );
	assertBe( array.get( -2, ), 1, );
	assertBe( array.get( -3, ), 0, );
	assertBe( array.get( -4, ), undefined, );
}, );

test( '{Array}.subArray', ( { assertAs, }, )=> {
	const array= [ 0, 1, 2, ];
	
	assertAs( array.subArray( 0, ), [ 0, 1, 2, ], );
	assertAs( array.subArray( 1, ), [ 1, 2, ], );
	assertAs( array.subArray( 2, ), [ 2, ], );
	assertAs( array.subArray( 3, ), [], );
	assertAs( array.subArray( 4, ), [], );
	assertAs( array.subArray( -1, ), [ 2, ], );
	assertAs( array.subArray( -2, ), [ 1, 2, ], );
	assertAs( array.subArray( -3, ), [ 0, 1, 2, ], );
	assertAs( array.subArray( -4, ), [ 0, 1, 2, ], );
	
	assertAs( array.subArray( 0, Infinity, ), [ 0, 1, 2, ], );
	assertAs( array.subArray( 1, Infinity, ), [ 1, 2, ], );
	assertAs( array.subArray( 2, Infinity, ), [ 2, ], );
	assertAs( array.subArray( 3, Infinity, ), [], );
	assertAs( array.subArray( 4, Infinity, ), [], );
	assertAs( array.subArray( -1, Infinity, ), [ 2, ], );
	assertAs( array.subArray( -2, Infinity, ), [ 1, 2, ], );
	assertAs( array.subArray( -3, Infinity, ), [ 0, 1, 2, ], );
	assertAs( array.subArray( -4, Infinity, ), [ 0, 1, 2, ], );
	
	assertAs( array.subArray( 0, 0, ), [], );
	assertAs( array.subArray( 0, 1, ), [ 0, ], );
	assertAs( array.subArray( 1, 1, ), [ 1, ], );
	assertAs( array.subArray( 1, 6, ), [ 1, 2, ], );
	assertAs( array.subArray( 3, 6, ), [], );
	assertAs( array.subArray( 3, -2, ), [ 1, 2, ], );
	assertAs( array.subArray( -2, 1, ), [ 1, ], );
	assertAs( array.subArray( -5, 1, ), [], );
	assertAs( array.subArray( -5, 3, ), [ 0, ], );
}, );
