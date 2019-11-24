import { test, } from '../Robberfly.js';
import '../../src/fp/detach.js';

test( 'FP: {Function}.detach', async ( { assertBe, assertAs, assertFunction, assertRun, }, )=> {
	const map= [].map.detach();
	
	assertFunction( map, );
	assertBe( map.length, 2, );
	
	assertAs( map( [ 0, 1, 2, ], x=> x*2, ), [ 0, 2, 4, ], );
}, );

test( 'FP: {Function}.detachTail', async ( { assertBe, assertAs, assertFunction, assertRun, }, )=> {
	const map= [].map.detachTail();
	
	assertFunction( map, );
	assertBe( map.length, 2, );
	
	assertAs( map( x=> x*2, [ 0, 1, 2, ], ), [ 0, 2, 4, ], );
}, );
