import { test, } from '../Robberfly.js';
import '../../src/map-and-set/put.js';

test( '{Map}.put', ( { assertAs, }, )=> {
	const map= new Map();
	
	map.put( [ [ 'foo', 0, ], [ 'bar', 1, ], [ 'baz', 2, ], ], );
	
	assertAs( map, new Map( [ [ 'foo', 0, ], [ 'bar', 1, ], [ 'baz', 2, ], ], ), );
	
}, );

test( '{Set}.put', ( { assertAs, }, )=> {
	const set= new Set();
	
	set.put( [ 0, 1, 2, ], );
	
	assertAs( set, new Set( [ 0, 1, 2, ], ), );
	
}, );

test( '{WeakMap}.put', ( { assertBe, }, )=> {
	const weakMap= new WeakMap();
	const foo= {};
	const bar= {};
	const baz= {};
	
	weakMap.put( [ [ foo, 0, ], [ bar, 1, ], [ baz, 2, ], ], );
	
	assertBe( weakMap.get( foo, ), 0, );
	assertBe( weakMap.get( bar, ), 1, );
	assertBe( weakMap.get( baz, ), 2, );
	
}, );

test( '{WeakSet}.put', ( { assertTo, }, )=> {
	const weakSet= new WeakSet();
	const foo= {};
	const bar= {};
	const baz= {};
	
	weakSet.put( [ foo, bar, baz, ], );
	
	assertTo( weakSet.has( foo, ), );
	assertTo( weakSet.has( bar, ), );
	assertTo( weakSet.has( baz, ), );
	
}, );
