import { test, } from '../Robberfly.js';
import '../../src/map-and-set/flatMapAwait.js';

test( '{Map}.flatMapAwait', async ( { assertBe, assertAs, assertInstanceOf, assertRun, }, )=> {
	const map= new Map( [ [ 'foo', 3, ], [ 'bar', 1, ], ], );
	const runLoop= assertRun();
	let index= -1;
	
	const returning= map.flatMapAwait( async ( item, key, theMap, )=> {
		await new Promise( resolve=> void setTimeout( resolve, item, ), );
		
		runLoop.run();
		
		if( ++index === 0 )
		{
			assertBe( item, 3, );
			assertBe( key, 'foo', );
			assertBe( theMap, map, );
			
			return new Map( [ [ 'foo', 5, ], [ 'qux', 3, ], ], );
		}
		else
		{
			assertBe( item, 1, );
			assertBe( key, 'bar', );
			assertBe( theMap, map, );
			
			return 6;
		}
	}, );
	
	assertInstanceOf( returning, Promise, );
	
	const result= await returning;
	
	assertAs( result, new Map( [ [ 'foo', 5, ], [ 'qux', 3, ], [ 'bar', 6, ], ], ), );
	
	runLoop.assert( 2, );
}, );

test( '{Set}.flatMapAwait', async ( { assertBe, assertAs, assertInstanceOf, assertRun, }, )=> {
	const set= new Set( [ 3, 1, ], );
	const runLoop= assertRun();
	let index= -1;
	
	const returning= set.flatMapAwait( async ( item, key, theSet, )=> {
		await new Promise( resolve=> void setTimeout( resolve, item, ), );
		
		runLoop.run();
		
		if( ++index === 0 )
		{
			assertBe( item, 3, );
			assertBe( key, 3, );
			assertBe( theSet, set, );
			
			return new Set( [ 5, 7, ], );
		}
		else
		{
			assertBe( item, 1, );
			assertBe( key, 1, );
			assertBe( theSet, set, );
			
			return 4;
		}
	}, );
	
	assertInstanceOf( returning, Promise, );
	
	const result= await returning;
	
	assertAs( result, new Set( [ 5, 7, 4, ], ), );
	
	runLoop.assert( 2, );
}, );
