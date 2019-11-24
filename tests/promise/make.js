import { test, } from '../Robberfly.js';
import '../../src/promise/make.js';

test( 'Promise.make', async ( { assertBe, assertInstanceOf, assertOwn, assertNotOwn, assertRun, }, )=> {
	{
		const promise= Promise.make();
		
		assertInstanceOf( promise, Promise, );
		assertOwn( promise, 'promise', );
		assertOwn( promise, 'resolve', );
		assertOwn( promise, 'reject', );
		
		setTimeout( ()=> promise.resolve( 6, ), );
		
		assertBe( await promise, 6, );
		
		const runThen= assertRun();
		const runCatch= assertRun();
		
		await promise.then( ()=> runThen.run(), ()=> runCatch.run(), );
		
		runThen.assert();
		runCatch.assert( 0, );
	}
	
	{
		const promise= Promise.make();
		
		setTimeout( ()=> promise.reject( 3, ), );
		
		assertBe( await promise.catch( x=> x, ), 3, );
		
		const runThen= assertRun();
		const runCatch= assertRun();
		
		await promise.then( ()=> runThen.run(), ()=> runCatch.run(), );
		
		runThen.assert( 0, );
		runCatch.assert();
	}
	
	{
		const { promise, resolve, reject, }= Promise.make();
		
		assertInstanceOf( promise, Promise, );
		assertNotOwn( promise, 'promise', );
		assertNotOwn( promise, 'resolve', );
		assertNotOwn( promise, 'reject', );
		
		setTimeout( ()=> resolve( 6, ), );
		
		assertBe( await promise, 6, );
		
		const runThen= assertRun();
		const runCatch= assertRun();
		
		await promise.then( ()=> runThen.run(), ()=> runCatch.run(), );
		
		runThen.assert();
		runCatch.assert( 0, );
	}
	
	{
		const { promise, resolve, reject, }= Promise.make();
		
		setTimeout( ()=> reject( 3, ), );
		
		assertBe( await promise.catch( x=> x, ), 3, );
		
		const runThen= assertRun();
		const runCatch= assertRun();
		
		await promise.then( ()=> runThen.run(), ()=> runCatch.run(), );
		
		runThen.assert( 0, );
		runCatch.assert();
	}
}, );
