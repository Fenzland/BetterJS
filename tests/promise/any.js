import { test, } from '../Robberfly.js';
import '../../src/promise/any.js';

test( 'Promise.any', async ( { assertBe, assertAs, assertInstanceOf, assertRun, }, )=> {
	{
		const promise= Promise.any( [
			new Promise( ( resolve, reject, )=> void setTimeout( ()=> resolve( 0, ), 4, ), ),
			new Promise( ( resolve, reject, )=> void setTimeout( ()=> reject( 1, ), 7, ), ),
			new Promise( ( resolve, reject, )=> void setTimeout( ()=> reject( 2, ), 1, ), ),
		], );
		
		assertInstanceOf( promise, Promise, );
		assertBe( await promise, 0, );
		
		const runThen= assertRun();
		const runCatch= assertRun();
		
		await promise.then( ()=> runThen.run(), ()=> runCatch.run(), );
		
		runThen.assert();
		runCatch.assert( 0, );
	}
	
	{
		const promise= Promise.any( [
			new Promise( ( resolve, reject, )=> void setTimeout( ()=> resolve( 0, ), 4, ), ),
			new Promise( ( resolve, reject, )=> void setTimeout( ()=> reject( 1, ), 7, ), ),
			new Promise( ( resolve, reject, )=> void setTimeout( ()=> resolve( 2, ), 1, ), ),
		], );
		
		assertInstanceOf( promise, Promise, );
		assertBe( await promise, 2, );
		
		const runThen= assertRun();
		const runCatch= assertRun();
		
		await promise.then( ()=> runThen.run(), ()=> runCatch.run(), );
		
		runThen.assert();
		runCatch.assert( 0, );
	}
	
	{
		const promise= Promise.any( [
			new Promise( ( resolve, reject, )=> void setTimeout( ()=> reject( 0, ), 2, ), ),
			new Promise( ( resolve, reject, )=> void setTimeout( ()=> reject( 1, ), 3, ), ),
			new Promise( ( resolve, reject, )=> void setTimeout( ()=> reject( 2, ), 1, ), ),
		], );
		
		assertInstanceOf( promise, Promise, );
		assertAs( [ ...await promise.catch( x=> x, ), ], [ 0, 1, 2, ], );
		
		const runThen= assertRun();
		const runCatch= assertRun();
		
		await promise.then( ()=> runThen.run(), ()=> runCatch.run(), );
		
		runThen.assert( 0, );
		runCatch.assert();
	}
}, );
