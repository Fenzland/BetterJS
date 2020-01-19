import { test, } from '../Robberfly.js';
import '../../src/generator-prototype/forEach.js';

test( '{Generator}.forEach', ( { assertBe, assertAs, assertRun, }, )=> {
	const gf= function*(){
		yield 0;
		yield 1;
		yield* [ 2, 3, 4, ];
	};
	
	const runLoop= assertRun();
	
	let index= 0;
	
	gf().forEach( item=> {
		runLoop.run();
		
		assertBe( item, index++, );
		
		return item*2;
	}, );
	
	runLoop.assert( 5, );
}, );
