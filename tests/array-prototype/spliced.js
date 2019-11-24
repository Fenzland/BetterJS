import { test, } from '../Robberfly.js';
import '../../src/array-prototype/spliced.js';

test( '{Array}.spliced', ( { assertNotBe, assertAs, }, )=> {
	const foo= [ 6, 5, 7, 2, 0, 1, 8, ];
	const bar= foo.spliced( 2, 3, 4, 9, );
	
	assertNotBe( foo, bar, );
	assertAs( foo, [ 6, 5, 7, 2, 0, 1, 8, ], );
	assertAs( bar, [ 6, 5, 4, 9, 1, 8, ], );
}, );
