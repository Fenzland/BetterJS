import { test, } from '../Robberfly.js';
import '../../src/async-generator-prototype/forEach.js';

test( '{AsyncGenerator}.forEach', async ( { assertBe, assertRun, assertInstanceOf, }, )=> {
	const agf= async function*(){
		yield 0;
		yield 1;
		yield* [ 2, 3, 4, ];
	};
	
	const runLoop= assertRun();
	
	let index= 0;
	
	const returned= agf().forEach( async item=> {
		runLoop.run();
		
		assertBe( index, 0, );
		
		await new Promise( $=> setTimeout( $, ), );
		
		assertBe( item, index++, );
		
		return item*2;
	}, );
	
	assertInstanceOf( returned, Promise, );
	assertBe( await returned, undefined, );
	
	runLoop.assert( 5, );
	
	await new Promise( $=> setTimeout( $, ), );
}, );
