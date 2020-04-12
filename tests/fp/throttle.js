import { test, } from '../Robberfly.js';
import '../../src/fp/throttle.js';

test( 'FP: {Function}.throttle', async ( { assertBe, assertThrow, assertRun, }, )=> {
	{
		const runFunc= assertRun();
		const throttled= (()=> runFunc.run()).throttle( 20, );
		
		throttled();
		
		runFunc.assert( 1, );
		
		await new Promise( ( resolve, reject, )=> void setTimeout( ()=> resolve( 0, ), 25, ), );
		
		runFunc.assert( 1, );
		
		await new Promise( ( resolve, reject, )=> void setTimeout( ()=> resolve( 0, ), 25, ), );
		
		runFunc.assert( 1, );
	}
	{
		const runFunc= assertRun();
		const throttled= (()=> runFunc.run()).throttle( 20, );
		
		throttled();
		
		runFunc.assert( 1, );
		
		throttled();
		throttled();
		throttled();
		
		runFunc.assert( 1, );
		
		await new Promise( ( resolve, reject, )=> void setTimeout( ()=> resolve( 0, ), 4, ), );
		
		throttled();
		
		runFunc.assert( 1, );
		
		await new Promise( ( resolve, reject, )=> void setTimeout( ()=> resolve( 0, ), 4, ), );
		
		throttled();
		
		runFunc.assert( 1, );
		
		await new Promise( ( resolve, reject, )=> void setTimeout( ()=> resolve( 0, ), 4, ), );
		
		throttled();
		throttled();
		
		runFunc.assert( 1, );
		
		await new Promise( ( resolve, reject, )=> void setTimeout( ()=> resolve( 0, ), 25, ), );
		
		runFunc.assert( 2, );
		
		await new Promise( ( resolve, reject, )=> void setTimeout( ()=> resolve( 0, ), 25, ), );
		
		runFunc.assert( 2, );
		
		throttled();
		
		runFunc.assert( 3, );
		
		await new Promise( ( resolve, reject, )=> void setTimeout( ()=> resolve( 0, ), 25, ), );
		
		runFunc.assert( 3, );
		
		throttled();
		throttled();
		
		runFunc.assert( 4, );
		
		await new Promise( ( resolve, reject, )=> void setTimeout( ()=> resolve( 0, ), 25, ), );
		
		runFunc.assert( 5, );
		
		await throttled();
		await throttled();
		await throttled();
		
		runFunc.assert( 8, );
	}
	{
		const throttled= function(){
			assertBe( this, 6, );
		}.throttle();
		
		await throttled.call( 6, );
	}
	{
		const throttled= (x=> x).throttle();
		
		const promise_0= throttled(0);
		const promise_1= throttled(1);
		const promise_2= throttled(2);
		
		assertBe( await promise_0, 0, );
		assertBe( await promise_1, 2, );
		assertBe( await promise_2, 2, );
	}
	{
		const throttled= (x=> {throw 3}).throttle();
		
		const promise_0= throttled(0);
		const promise_1= throttled(1);
		const promise_2= throttled(2);
		
		assertThrow( 3, async ()=> await promise_0, );
		assertThrow( 3, async ()=> await promise_1, );
		assertThrow( 3, async ()=> await promise_2, );
	}
}, );
