import { test, } from '../Robberfly.js';
import '../../src/fp/detachCurry.js';

test( 'FP: {Function}.detachYrruc', async ( { assertBe, assertAs, assertFunction, assertRun, }, )=> {
	const map= [].map.detachYrruc();
	
	assertFunction( map, );
	assertBe( map.length, 2, );
	
	assertAs( map( x=> x*2, )( [ 0, 1, 2, ], ), [ 0, 2, 4, ], );
	assertAs( map( [ 0, 1, 2, ], x=> x*2, ), [ 0, 2, 4, ], );
}, );

test( 'FP: {Function}.detachCurry', async ( { assertBe, assertAs, assertFunction, assertRun, }, )=> {
	const map= [].map.detachCurry();
	
	assertFunction( map, );
	assertBe( map.length, 2, );
	
	assertAs( map( [ 0, 1, 2, ], )( x=> x*2, ), [ 0, 2, 4, ], );
	assertAs( map( [ 0, 1, 2, ], x=> x*2, ), [ 0, 2, 4, ], );
}, );

test( 'FP: {Function}.detachTailCurry', async ( { assertBe, assertAs, assertFunction, assertRun, }, )=> {
	const map= [].map.detachTailCurry();
	
	assertFunction( map, );
	assertBe( map.length, 2, );
	
	assertAs( map( x=> x*2, )( [ 0, 1, 2, ], ), [ 0, 2, 4, ], );
	assertAs( map( x=> x*2, [ 0, 1, 2, ], ), [ 0, 2, 4, ], );
}, );
