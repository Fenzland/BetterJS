import { test, } from '../Robberfly.js';
import '../../src/array-prototype/shuffle-and-shuffled.js';

test( '{Array}.shuffle', ( { assertTo, assertBe, assertAs, }, )=> {
	const foo= [ 0, 1, 2, 3, ];
	const bar= [ ...foo, ];
	const baz= bar.shuffle();
	
	assertBe( bar, baz, );
	assertAs( new Set( foo, ), new Set( bar, ), );
	
	const counter= {
		'0123':0, '1023':0, '0213':0, '1203':0, '2013':0, '2103':0,
		'0132':0, '1032':0, '0231':0, '1230':0, '2031':0, '2130':0,
		'0312':0, '1302':0, '0321':0, '1320':0, '2301':0, '2310':0,
		'3012':0, '3102':0, '3021':0, '3120':0, '3201':0, '3210':0,
	};
	
	for( let i= 0x10000; i > 0; --i )
		++counter[bar.shuffle().join( '', )];
	
	const total= Object.entries( counter, ).reduce( ( sum, [ permutation, count, ], )=> {
		
		// not always but almost be true
		assertTo( count > 0x800, );
		// not always but almost be true
		assertTo( count < 0xC00, );
		
		return sum - - count;
	}, 0, );
	
	assertBe( total, 0x10000, );
}, );

test( '{Array}.shuffled', ( { assertTo, assertBe, assertNotBe, assertAs, }, )=> {
	const foo= [ 0, 1, 2, 3, ];
	const bar= [ ...foo, ];
	const baz= bar.shuffled();
	
	assertNotBe( bar, baz, );
	assertAs( new Set( foo, ), new Set( bar, ), );
	
	const counter= {
		'0123':0, '1023':0, '0213':0, '1203':0, '2013':0, '2103':0,
		'0132':0, '1032':0, '0231':0, '1230':0, '2031':0, '2130':0,
		'0312':0, '1302':0, '0321':0, '1320':0, '2301':0, '2310':0,
		'3012':0, '3102':0, '3021':0, '3120':0, '3201':0, '3210':0,
	};
	
	for( let i= 0x10000; i > 0; --i )
		++counter[bar.shuffled().join( '', )];
	
	const total= Object.entries( counter, ).reduce( ( sum, [ permutation, count, ], )=> {
		
		// not always but almost be true
		assertTo( count > 0x800, );
		// not always but almost be true
		assertTo( count < 0xC00, );
		
		return sum - - count;
	}, 0, );
	
	assertBe( total, 0x10000, );
}, );
