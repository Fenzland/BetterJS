import { test, } from '../Robberfly.js';
import '../../src/array-prototype/reversed.js';

test( '{Array}.reversed', ( { assertNotBe, assertAs, }, )=> {
	const foo= [ 6, 5, 7, 2, 0, 1, 8, ];
	const bar= foo.reversed();
	
	assertNotBe( foo, bar, );
	assertAs( foo, [ 6, 5, 7, 2, 0, 1, 8, ], );
	assertAs( bar, [ 8, 1, 0, 2, 7, 5, 6, ], );
}, );
