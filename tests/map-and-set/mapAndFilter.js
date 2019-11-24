import { test, } from '../Robberfly.js';
import '../../src/map-and-set/mapAndFilter.js';

test( '{Map}.mapAndFilter', ( { assertBe, assertAs, }, )=> {
	const map= new Map( [ [ 'foo', 0, ], [ 'bar', 6, ], ], );
	let index= -1;
	
	const result= map.mapAndFilter(
		( item, key, theMap, )=> {
			if( ++index === 0 )
			{
				assertBe( item, 0, );
				assertBe( key, 'foo', );
				assertBe( theMap, map, );
				
				return null;
			}
			else
			{
				assertBe( item, 6, );
				assertBe( key, 'bar', );
				assertBe( theMap, map, );
				
				return 3;
			}
			
		},
		( item, key, theMap, )=> {
			if( index === 0 )
			{
				assertBe( item, null, );
				assertBe( key, 'foo', );
				assertBe( theMap, map, );
				
				return true;
			}
			else
			{
				assertBe( item, 3, );
				assertBe( key, 'bar', );
				assertBe( theMap, map, );
				
				return false;
			}
		},
	);
	
	assertAs( result, new Map( [ [ 'foo', null, ], ], ), );
}, );

test( '{Set}.mapAndFilter', ( { assertBe, assertAs, }, )=> {
	const set= new Set( [ 'foo', 'bar', ], );
	let index= -1
	
	const result= set.mapAndFilter(
		( item, key, theSet, )=> {
			if( ++index === 0 )
			{
				assertBe( item, 'foo', );
				assertBe( key, 'foo', );
				assertBe( theSet, set, );
				
				return 7;
			}
			else
			{
				assertBe( item, 'bar', );
				assertBe( key, 'bar', );
				assertBe( theSet, set, );
				
				return 5;
			}
		},
		( item, key, theSet, )=> {
			if( index === 0 )
			{
				assertBe( item, 7, );
				assertBe( key, 'foo', );
				assertBe( theSet, set, );
				
				return true;
			}
			else
			{
				assertBe( item, 5, );
				assertBe( key, 'bar', );
				assertBe( theSet, set, );
				
				return false;
			}
		}
	);
	
	assertAs( result, new Set( [ 7, ], ), );
}, );
