import { test, } from '../Robberfly.js';
import '../../src/promise/try.js';

test( 'Promise.try', async ( { assertBe, assertInstanceOf, assertRun, }, )=> {
	const { try:_try, }= Promise;
	
	{
		const promise= _try( ()=> 6, );
		
		assertInstanceOf( promise, Promise, );
		assertBe( await promise, 6, );
		
		const runThen= assertRun();
		const runCatch= assertRun();
		
		await promise.then( ()=> runThen.run(), ()=> runCatch.run(), );
		
		runThen.assert();
		runCatch.assert( 0, );
	}
	
	{
		const promise= _try( ()=> { throw 3; }, );
		
		assertInstanceOf( promise, Promise, );
		assertBe( await promise.catch( x=> x, ), 3, );
		
		const runThen= assertRun();
		const runCatch= assertRun();
		
		await promise.then( ()=> runThen.run(), ()=> runCatch.run(), );
		
		runThen.assert( 0, );
		runCatch.assert();
	}
}, );
