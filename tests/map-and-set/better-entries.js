import { test, } from '../Robberfly.js';
import '../../src/map-and-set/better-entries.js';

test( 'better {Map}.entries', async ( { assertTo, assertAs, }, )=> {
	const foo= new Map( [ [ 'foo', 1, ], [ 'bar', 6, ], ], );
	
	const entries= foo.entries();
	
	assertTo( Array.isArray( entries, ), );
	assertAs( entries, [ [ 'foo', 1, ], [ 'bar', 6, ], ], );
}, );

test( 'better {Map}.keys', async ( { assertTo, assertAs, }, )=> {
	const foo= new Map( [ [ 'foo', 1, ], [ 'bar', 6, ], ], );
	
	const keys= foo.keys();
	
	assertTo( Array.isArray( keys, ), );
	assertAs( keys, [ 'foo', 'bar', ], );
}, );

test( 'better {Map}.values', async ( { assertTo, assertAs, }, )=> {
	const foo= new Map( [ [ 'foo', 1, ], [ 'bar', 6, ], ], );
	
	const values= foo.values();
	
	assertTo( Array.isArray( values, ), );
	assertAs( values, [ 1, 6, ], );
}, );

test( 'better {Set}.entries', async ( { assertTo, assertAs, }, )=> {
	const foo= new Set( [ 'foo', 'bar', ], );
	
	const entries= foo.entries();
	
	assertTo( Array.isArray( entries, ), );
	assertAs( entries, [ [ 'foo', 'foo', ], [ 'bar', 'bar', ], ], );
}, );

test( 'better {Set}.keys', async ( { assertTo, assertAs, }, )=> {
	const foo= new Set( [ 'foo', 'bar', ], );
	
	const keys= foo.keys();
	
	assertTo( Array.isArray( keys, ), );
	assertAs( keys, [ 'foo', 'bar', ], );
}, );

test( 'better {Set}.values', async ( { assertTo, assertAs, }, )=> {
	const foo= new Set( [ 'foo', 'bar', ], );
	
	const values= foo.values();
	
	assertTo( Array.isArray( values, ), );
	assertAs( values, [ 'foo', 'bar', ], );
}, );
