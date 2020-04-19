import { test, } from '../Robberfly.js';
import '../../src/array-prototype/better-slice.js';

test( 'better {Array}.slice', async ( { assertAs, }, )=> {
	const foo= [ 0, 1, 2, 3, 4, 5, ];
	
	assertAs( foo.slice( 0, x=> x > 2, ), [ 0, 1, 2, ], );
	assertAs( foo.slice( 0, x=> x < 5, ), [], );
	assertAs( foo.slice( 0, x=> x < 0, ), [ 0, 1, 2, 3, 4, 5, ], );
	
	assertAs( foo.slice( x=> x > 2, ), [ 3, 4, 5, ], );
	assertAs( foo.slice( x=> x > 2, 4, ), [ 3, ], );
	assertAs( foo.slice( x=> x < 0, ), [ 0, 1, 2, 3, 4, 5, ], );
	
	assertAs( foo.slice( x=> x > 1, x=> x < 4, ), [], );
	assertAs( foo.slice( x=> x > 1, x=> x > 4, ), [ 2, 3, 4, ], );
	assertAs( foo.slice( x=> x > 1, x=> x < 0, ), [ 2, 3, 4, 5, ], );
	assertAs( foo.slice( x=> x < 0, x=> x > 3, ), [ 0, 1, 2, 3, ], );
	assertAs( foo.slice( x=> x < 0, x=> x < 0, ), [ 0, 1, 2, 3, 4, 5, ], );
}, );
