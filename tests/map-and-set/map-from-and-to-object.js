import { test, } from '../Robberfly.js';
import '../../src/map-and-set/map-from-and-to-object.js';

test( 'Map.fromObject', ( { assertAs, }, )=> {
	const SYMBOL_KEY= Symbol( 'SYMBOL_KEY', );
	const func= ()=> {};
	const object= { 1:1, 2:2, func, [SYMBOL_KEY]:'symbol', };
	
	const map= Map.fromObject( object, );
	
	assertAs( map, new Map( [ [ '1', 1, ], [ '2', 2, ], [ 'func', func, ], ], ), );
}, );

test( '{Map}.toObject', ( { assertAs, }, )=> {
	const SYMBOL_KEY= Symbol( 'SYMBOL_KEY', );
	const func= ()=> {};
	const map= new Map( [ [ '1', 1, ], [ 1, 3, ], [ 6n, 4, ], [ '2', 2, ], [ 'func', func, ], [ SYMBOL_KEY, 'symbol', ], ], );
	
	const object= map.toObject();
	
	assertAs( object, { 1:1, 2:2, func, }, );
}, );
