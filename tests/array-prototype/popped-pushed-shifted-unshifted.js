import { test, } from '../Robberfly.js';
import '../../src/array-prototype/popped-pushed-shifted-unshifted.js';

test( '{Array}.popped', ( { assertNotBe, assertAs, }, )=> {
	const foo= [ 6, 5, 7, 2, 0, 1, 8, ];
	const bar= foo.popped();
	
	assertNotBe( foo, bar, );
	assertAs( foo, [ 6, 5, 7, 2, 0, 1, 8, ], );
	assertAs( bar, [ 6, 5, 7, 2, 0, 1, ], );
}, );

test( '{Array}.pushed', ( { assertNotBe, assertAs, }, )=> {
	const foo= [ 6, 5, 7, 2, 0, 1, 8, ];
	const bar= foo.pushed( 3, 9, );
	
	assertNotBe( foo, bar, );
	assertAs( foo, [ 6, 5, 7, 2, 0, 1, 8, ], );
	assertAs( bar, [ 6, 5, 7, 2, 0, 1, 8, 3, 9, ], );
}, );

test( '{Array}.shifted', ( { assertNotBe, assertAs, }, )=> {
	const foo= [ 6, 5, 7, 2, 0, 1, 8, ];
	const bar= foo.shifted();
	
	assertNotBe( foo, bar, );
	assertAs( foo, [ 6, 5, 7, 2, 0, 1, 8, ], );
	assertAs( bar, [ 5, 7, 2, 0, 1, 8, ], );
}, );

test( '{Array}.unshifted', ( { assertNotBe, assertAs, }, )=> {
	const foo= [ 6, 5, 7, 2, 0, 1, 8, ];
	const bar= foo.unshifted( 3, 9, );
	
	assertNotBe( foo, bar, );
	assertAs( foo, [ 6, 5, 7, 2, 0, 1, 8, ], );
	assertAs( bar, [ 3, 9, 6, 5, 7, 2, 0, 1, 8, ], );
}, );
