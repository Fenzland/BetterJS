import { test, } from '../Robberfly.js';
import '../../src/promise/binded.js';

test( 'Promise.binded', async ( { assertBe, assertAs, assertInstanceOf, assertThrow, assertRun, }, )=> {
	const { resolve, reject, all, race, }= Promise;
	
	{
		const promise= resolve( 3, );
		
		assertInstanceOf( promise, Promise, );
		assertBe( await promise, 3, );
	}
	
	{
		const promise= reject( 4, );
		
		assertInstanceOf( promise, Promise, );
		assertThrow( 4, async ()=> await promise, );
	}
	
	{
		const promise= all( [
			resolve( 1, ),
			resolve( 2, ),
			resolve( 3, ),
		], );
		
		assertInstanceOf( promise, Promise, );
		assertAs( await promise, [ 1, 2, 3, ], );
	}
	
	{
		const promise= all( [
			resolve( 1, ),
			reject( 2, ),
			resolve( 3, ),
		], );
		
		assertInstanceOf( promise, Promise, );
		assertThrow( 2, async ()=> await promise, );
	}
	
	{
		const promise= race( [
			new Promise( ( resolve, reject, )=> void setTimeout( ()=> resolve( 0, ), 8, ), ),
			new Promise( ( resolve, reject, )=> void setTimeout( ()=> reject( 1, ), 16, ), ),
			new Promise( ( resolve, reject, )=> void setTimeout( ()=> resolve( 2, ), 1, ), ),
		], );
		
		assertInstanceOf( promise, Promise, );
		assertBe( await promise, 2, )
	}
	
	{
		const promise= race( [
			new Promise( ( resolve, reject, )=> void setTimeout( ()=> resolve( 0, ), 8, ), ),
			new Promise( ( resolve, reject, )=> void setTimeout( ()=> reject( 1, ), 16, ), ),
			new Promise( ( resolve, reject, )=> void setTimeout( ()=> reject( 2, ), 1, ), ),
		], );
		
		assertInstanceOf( promise, Promise, );
		assertThrow( 2, async ()=> await promise, );
	}
}, );
