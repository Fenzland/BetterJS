import { test, } from '../Robberfly.js';
import '../../src/promise/better-allSettled.js';

test( 'better Promise.allSettled', async ( { assertBe, assertAs, assertInstanceOf, assertRun, }, )=> {
	const { allSettled, }= Promise;
	
	{
		const promise= allSettled( [
			Promise.resolve( 0, ),
			Promise.reject( 1, ),
		], );
		
		assertInstanceOf( promise, Promise, );
		
		const [ settled_0, settled_1, ]= await promise;
		
		assertBe( settled_0.resolved, true, );
		assertBe( settled_0.value, 0, );
		
		assertBe( settled_1.resolved, false, );
		assertBe( settled_1.reason, 1, );
	}
}, );
