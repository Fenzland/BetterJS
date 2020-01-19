import { test, } from '../Robberfly.js';
import '../../src/generator-prototype/map.js';

test( '{Generator}.map', ( { assertBe, assertAs, assertRun, }, )=> {
	const gf= function*(){
		yield 0;
		yield 1;
		yield* [ 2, 3, 4, ];
	};
	
	const runLoop= assertRun();
	
	let index= 0;
	
	assertAs( gf().map( item=> {
		runLoop.run();
		
		assertBe( item, index++, );
		
		return item*2;
	}, ), [ 0, 2, 4, 6, 8, ], );
	
	runLoop.assert( 5, );
}, );
