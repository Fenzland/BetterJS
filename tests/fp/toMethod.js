import { test, } from '../Robberfly.js';
import '../../src/fp/toMethod.js';

test( 'FP: {Function}.toMethod', async ( { assertBe, assertAs, assertFunction, }, )=> {
	{
		const odd= ( array, base, )=> array.filter( ( item, index, )=> index%base, );
		
		const methodOdd= odd.toMethod();
		
		assertFunction( methodOdd, );
		assertBe( methodOdd.length, 1, );
		
		assertAs( methodOdd.call( [ 0, 1, 2, 3, 4, ], 2, ), [ 1, 3, ], );
	}
	{
		const odd= ( base, array, )=> array.filter( ( item, index, )=> index%base, );
		
		const methodOdd= odd.toMethod( -1, );
		
		assertFunction( methodOdd, );
		assertBe( methodOdd.length, 1, );
		
		assertAs( methodOdd.call( [ 0, 1, 2, 3, 4, ], 2, ), [ 1, 3, ], );
	}
}, );
