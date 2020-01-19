import { test, } from '../Robberfly.js';
import '../../src/async-generator-prototype/map.js';

test( '{AsyncGenerator}.map', async ( { assertBe, assertAs, assertRun, assertInstanceOf, }, )=> {
	const agf= async function*(){
		yield 0;
		yield 1;
		yield* [ 2, 3, 4, ];
	};
	
	const runLoop= assertRun();
	
	let index= 0;
	
	const returned= agf().map( async item=> {
		runLoop.run();
		
		assertBe( index, 0, );
		
		await new Promise( $=> setTimeout( $, ), );
		
		assertBe( item, index++, );
		
		return item*2;
	}, );
	
	assertInstanceOf( returned, Promise, );
	assertAs( await returned, [ 0, 2, 4, 6, 8, ], );
	
	runLoop.assert( 5, );
}, );
