import { test, } from '../Robberfly.js';
import '../../src/array-prototype/forEachAwait.js';

test( '{Array}.forEachAwait', async ( { assertBe, assertAs, assertInstanceOf, assertRun, }, )=> {
	const runLoop= assertRun();
	
	const queue= [];
	
	const returning= [ 2, 1, ].forEachAwait( async ( item, index, array, )=> {
		await new Promise( resolve=> void setTimeout( resolve, item, ), );
		
		runLoop.run();
		
		if( item < 3 )
			array.push( item*2, );
		
		queue.push( item, );
	}, );
	
	assertAs( queue, [], );
	assertInstanceOf( returning, Promise, );
	
	await returning;
	
	assertAs( queue, [ 2, 1, 4, 2, 4, ], );
	
	runLoop.assert( 5, );
}, );

