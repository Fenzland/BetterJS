import { test, } from '../Robberfly.js';
import '../../src/async-function-prototype/limit.js';

test( '{AsyncFunction}.limit', async ( { assertBe, assertAs, assertRun, }, )=> {
	const runOrigin= assertRun();
	
	const origin= async ( foo, bar, ...rest )=> {
		runOrigin.run();
		
		assertBe( foo, 0, )
		assertBe( bar, 1, )
		assertAs( rest, [ 2, 3, 4, ], )
		
		return true;
	};
	
	const limitted= origin.limit( 2, );
	
	assertBe( limitted.length, origin.length, )
	
	const results= await Promise.all( [
		limitted( 0, 1, 2, 3, 4, ),
		limitted( 0, 1, 2, 3, 4, ),
		limitted( 1, 2, 3, 4, 5, ),
	], );
	
	assertBe( await limitted( 0, 1, 2, 3, 4, ), true, );
	
	assertAs( results, [ true, true, undefined, ], );
	
	runOrigin.assert( 3, );
}, );
