import { test, } from '../Robberfly.js';
import '../../src/map-and-set/reduce.js';

test( '{Map}.reduce', ( { assertBe, }, )=> {
	const map= new Map( [ [ 'foo', 0, ], ], );
	
	const value= map.reduce( ( value, item, key, theMap, )=> {
		assertBe( value, undefined, );
		assertBe( item, 0, );
		assertBe( key, 'foo', );
		assertBe( theMap, map, );
		
		return 7;
	}, );
	
	assertBe( value, 7, );
}, );

test( '{Set}.reduce', ( { assertBe, }, )=> {
	const set= new Set( [ 'foo', ], );
	
	const value= set.reduce( ( value, item, key, theSet, )=> {
		assertBe( value, undefined, );
		assertBe( item, 'foo', );
		assertBe( key, 'foo', );
		assertBe( theSet, set, );
		
		return 7;
	}, );
	
	assertBe( value, 7, );
}, );
