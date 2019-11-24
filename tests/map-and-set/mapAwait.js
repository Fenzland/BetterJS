import { test, } from '../Robberfly.js';
import '../../src/map-and-set/mapAwait.js';

test( '{Map}.mapAwait', async ( { assertBe, assertAs, assertInstanceOf, assertRun, }, )=> {
	const map= new Map( [ [ 'foo', 3, ], [ 'bar', 1, ], ], );
	const runLoop= assertRun();
	let index= -1;
	
	const returning= map.mapAwait( async ( item, key, theMap, )=> {
		await new Promise( resolve=> void setTimeout( resolve, item, ), );
		
		runLoop.run();
		
		if( ++index === 0 )
		{
			assertBe( item, 3, );
			assertBe( key, 'foo', );
			assertBe( theMap, map, );
		}
		else
		{
			assertBe( item, 1, );
			assertBe( key, 'bar', );
			assertBe( theMap, map, );
		}
		
		return item*2;
	}, );
	
	assertInstanceOf( returning, Promise, );
	
	const result= await returning;
	
	assertAs( result, new Map( [ [ 'foo', 6, ], [ 'bar', 2, ], ], ), );
	
	runLoop.assert( 2, );
}, );

test( '{Set}.mapAwait', async ( { assertBe, assertAs, assertInstanceOf, assertRun, }, )=> {
	const set= new Set( [ 3, 1, ], );
	const runLoop= assertRun();
	let index= -1;
	
	const returning= set.mapAwait( async ( item, key, theSet, )=> {
		await new Promise( resolve=> void setTimeout( resolve, item, ), );
		
		runLoop.run();
		
		if( ++index === 0 )
		{
			assertBe( item, 3, );
			assertBe( key, 3, );
			assertBe( theSet, set, );
		}
		else
		{
			assertBe( item, 1, );
			assertBe( key, 1, );
			assertBe( theSet, set, );
		}
		
		return item*2;
	}, );
	
	assertInstanceOf( returning, Promise, );
	
	const result= await returning;
	
	assertAs( result, new Set( [ 6, 2, ], ), );
	
	runLoop.assert( 2, );
}, );
