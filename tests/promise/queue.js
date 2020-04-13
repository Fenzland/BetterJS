import { test, } from '../Robberfly.js';
import '../../src/promise/queue.js';

test( 'Promise.queue', async ( { assertBe, assertInstanceOf, assertOwn, assertNotOwn, assertRun, }, )=> {
	const { queue, }= Promise;
	
	{
		const ag= queue( [
			new Promise( ( resolve, reject, )=> void setTimeout( ()=> resolve( 0, ), 4, ), ),
			new Promise( ( resolve, reject, )=> void setTimeout( ()=> resolve( 1, ), 7, ), ),
			new Promise( ( resolve, reject, )=> void setTimeout( ()=> resolve( 2, ), 1, ), ),
		], );
		
		assertBe( ag.constructor, AsyncGenerator, );
		
		const results= [ 2, 0, 1, ];
		
		const runLoop= assertRun();
		
		for await( const item of ag )
		{
			assertBe( item, results.shift(), );
			runLoop.run();
		}
		
		runLoop.assert( 3, );
	}
}, );
