import { test, } from '../Robberfly.js';
import '../../src/array-prototype/sorted.js';

test( '{Array}.sorted', ( { assertNotBe, assertAs, }, )=> {
	const foo= [ 6, 5, 7, 2, 0, 1, 8, ];
	const bar= foo.sorted();
	const baz= foo.sorted( ( x, y, )=> y - x, );
	
	assertNotBe( foo, bar, );
	assertNotBe( foo, baz, );
	assertAs( foo, [ 6, 5, 7, 2, 0, 1, 8, ], );
	assertAs( bar, [ 0, 1, 2, 5, 6, 7, 8, ], );
	assertAs( baz, [ 8, 7, 6, 5, 2, 1, 0, ], );
}, );
