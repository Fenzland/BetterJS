import { test, } from '../Robberfly.js';
import '../../src/map-and-set/map.js';

test( '{Map}.map', ( { assertBe, assertAs, assertInstanceOf, }, )=> {
	const map= new Map( [ [ 'foo', 0, ], ], );
	
	const mapped= map.map( ( item, key, theMap, )=> {
		assertBe( item, 0, );
		assertBe( key, 'foo', );
		assertBe( theMap, map, );
		
		return 7;
	}, );
	
	assertInstanceOf( mapped, Map, );
	assertAs( mapped, new Map( [ [ 'foo', 7, ], ], ), );
}, );

test( '{Set}.map', ( { assertBe, assertAs, assertInstanceOf, }, )=> {
	const set= new Set( [ 'foo', ], );
	
	const mapped= set.map( ( item, key, theSet, )=> {
		assertBe( item, 'foo', );
		assertBe( key, 'foo', );
		assertBe( theSet, set, );
		
		return 7;
	}, );
	
	assertInstanceOf( mapped, Set, );
	assertAs( mapped, new Set( [ 7, ], ), );
}, );
