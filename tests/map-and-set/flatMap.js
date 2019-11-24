import { test, } from '../Robberfly.js';
import '../../src/map-and-set/flatMap.js';

test( '{Map}.flatMap', ( { assertBe, assertAs, assertInstanceOf, }, )=> {
	const map= new Map( [ [ 'foo', 0, ], [ 'bar', 1, ], ], );
	let index= -1;
	
	const mapped= map.flatMap( ( item, key, theMap, )=> {
		if( ++index === 0 )
		{
			assertBe( item, 0, );
			assertBe( key, 'foo', );
			assertBe( theMap, map, );
			
			return new Map( [ [ 'foo', 1, ], [ 'baz', 2, ], ], );
		}
		else
		{
			assertBe( item, 1, );
			assertBe( key, 'bar', );
			assertBe( theMap, map, );
			
			return 7;
		}
	}, );
	
	assertInstanceOf( mapped, Map, );
	assertAs( mapped, new Map( [ [ 'foo', 1, ], [ 'bar', 7, ], [ 'baz', 2, ], ], ), );
}, );

test( '{Set}.flatMap', ( { assertBe, assertAs, assertInstanceOf, }, )=> {
	const set= new Set( [ 'foo', 'bar', ], );
	let index= -1;
	
	const mapped= set.flatMap( ( item, key, theSet, )=> {
		if( ++index === 0 )
		{
			assertBe( item, 'foo', );
			assertBe( key, 'foo', );
			assertBe( theSet, set, );
			
			return new Set( [ 3, 4, 2, ], );
		}
		else
		{
			assertBe( item, 'bar', );
			assertBe( key, 'bar', );
			assertBe( theSet, set, );
			
			return 1
		}
		
	}, );
	
	assertInstanceOf( mapped, Set, );
	assertAs( mapped, new Set( [ 1, 2, 3, 4, ], ), );
}, );
