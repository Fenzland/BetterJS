import { test, } from '../Robberfly.js';
import '../../src/array-prototype/undup.js';

test( '{Array}.nodup', ( { assertBe, }, )=> {
	assertBe( [].nodup(), true, );
	assertBe( [ 0, ].nodup(), true, );
	assertBe( [ 0, 1, 2, 3, ].nodup(), true, );
	assertBe( [ 0, 1, 0, 3, ].nodup(), false, );
	assertBe( [ 0, 1, -0, 3, ].nodup(), false, );
	assertBe( [ 0, NaN, NaN, 3, ].nodup(), false, );
	
	assertBe( [ 0, 1, 2, 3, 4, 5, ].nodup( ( x, y, )=> x > y, ), true, );
	assertBe( [ 0, 1, 2, 4, 3, 5, ].nodup( ( x, y, )=> x > y, ), false, );
}, );

test( '{Array}.undup', ( { assertBe, assertAs, }, )=> {
	const foo= [ 0, 0, 2, 3, 1, 2, ];
	
	assertBe( foo.undup(), foo, );
	assertAs( foo, [ 0, 2, 3, 1, ], );
}, );

test( '{Array}.unduped', ( { assertBe, assertNotBe, assertAs, }, )=> {
	const foo= [ 0, 0, 2, 3, 1, 2, ];
	const bar= foo.unduped();
	
	assertNotBe( bar, foo, );
	assertAs( foo, [ 0, 0, 2, 3, 1, 2, ], );
	assertAs( bar, [ 0, 2, 3, 1, ], );
	
}, );
