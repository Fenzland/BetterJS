import { test, } from '../Robberfly.js';
import '../../src/async-generator-prototype/mapAwait.js';

test( '{AsyncGenerator}.mapAwait', async ( { assertBe, assertAs, assertRun, assertInstanceOf, }, )=> {
	const agf= async function*(){
		yield 0;
		yield 1;
		yield* [ 2, 3, 4, ];
	};
	
	const runLoop= assertRun();
	
	let index= 0;
	
	const returned= agf().mapAwait( async item=> {
		runLoop.run();
		
		assertBe( index, item, );
		
		await new Promise( $=> setTimeout( $, ), );
		
		assertBe( item, index++, );
		
		return item*2;
	}, );
	
	assertInstanceOf( returned, Promise, );
	assertAs( await returned, [ 0, 2, 4, 6, 8, ], );
	
	runLoop.assert( 5, );
}, );
