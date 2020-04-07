import { test, } from '../Robberfly.js';
import '../../src/fp/debounce.js';

test( 'FP: {Function}.debounce', async ( { assertBe, assertThrow, assertRun, }, )=> {
	{
		const runFunc= assertRun();
		const debounced= (()=> runFunc.run()).debounce();
		
		debounced();
		debounced();
		debounced();
		debounced();
		
		await new Promise( ( resolve, reject, )=> void setTimeout( ()=> resolve( 0, ), 100, ), );
		
		debounced();
		
		await new Promise( ( resolve, reject, )=> void setTimeout( ()=> resolve( 0, ), 100, ), );
		
		debounced();
		
		await new Promise( ( resolve, reject, )=> void setTimeout( ()=> resolve( 0, ), 100, ), );
		
		debounced();
		debounced();
		
		runFunc.assert( 0, );
		
		await new Promise( ( resolve, reject, )=> void setTimeout( ()=> resolve( 0, ), 300, ), );
		
		runFunc.assert( 1, );
		
		await new Promise( ( resolve, reject, )=> void setTimeout( ()=> resolve( 0, ), 300, ), );
		
		debounced();
		
		runFunc.assert( 1, );
		
		await new Promise( ( resolve, reject, )=> void setTimeout( ()=> resolve( 0, ), 300, ), );
		
		runFunc.assert( 2, );
		
		await debounced();
		await debounced();
		await debounced();
		
		runFunc.assert( 5, );
	}
	{
		const debounced= function(){
			assertBe( this, 6, );
		}.debounce();
		
		await debounced.call( 6, );
	}
	{
		const debounced= (x=> x).debounce();
		
		const promise_0= debounced(0);
		const promise_1= debounced(1);
		const promise_2= debounced(2);
		
		assertBe( await promise_0, 2, );
		assertBe( await promise_1, 2, );
		assertBe( await promise_2, 2, );
	}
	{
		const debounced= (x=> {throw 3}).debounce();
		
		const promise_0= debounced(0);
		const promise_1= debounced(1);
		const promise_2= debounced(2);
		
		assertThrow( 3, async()=> await promise_0, );
		assertThrow( 3, async()=> await promise_1, );
		assertThrow( 3, async()=> await promise_2, );
	}
}, );
