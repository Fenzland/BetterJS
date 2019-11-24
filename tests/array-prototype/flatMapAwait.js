import { test, } from '../Robberfly.js';
import '../../src/array-prototype/flatMapAwait.js';

test( '{Array}.flatMapAwait', async ( { assertBe, assertAs, assertInstanceOf, assertRun, }, )=> {
	const runLoop= assertRun();
	
	const queue= [];
	
	const returning= [ 2, 1, ].flatMapAwait( async ( item, index, array, )=> {
		await new Promise( resolve=> void setTimeout( resolve, item, ), );
		
		runLoop.run();
		
		if( item < 3 )
			array.push( item*2, );
		
		queue.push( item, );
		
		return item%4? [ item, item*2, ]: item;
	}, );
	
	assertAs( queue, [], );
	assertInstanceOf( returning, Promise, );
	
	const result= await returning;
	
	assertAs( queue, [ 2, 1, 4, 2, 4, ], );
	assertAs( result, [ 2, 4, 1, 2, 4, 2, 4, 4, ], );
	
	runLoop.assert( 5, );
}, );

