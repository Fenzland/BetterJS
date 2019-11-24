import { test, } from '../Robberfly.js';
import '../../src/array-prototype/mapAwait.js';

test( '{Array}.mapAwait', async ( { assertBe, assertAs, assertInstanceOf, assertRun, }, )=> {
	const runLoop= assertRun();
	
	const queue= [];
	
	const returning= [ 2, 1, ].mapAwait( async ( item, index, array, )=> {
		await new Promise( resolve=> void setTimeout( resolve, item, ), );
		
		runLoop.run();
		
		if( item < 3 )
			array.push( item*2, );
		
		queue.push( item, );
		
		return item*2;
	}, );
	
	assertAs( queue, [], );
	assertInstanceOf( returning, Promise, );
	
	const result= await returning;
	
	assertAs( queue, [ 2, 1, 4, 2, 4, ], );
	assertAs( result, [ 4, 2, 8, 4, 8, ], );
	
	runLoop.assert( 5, );
}, );

