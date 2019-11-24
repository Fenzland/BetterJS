import { test, } from '../Robberfly.js';
import '../../src/map-and-set/pop.js';

test( '{Map}.pop', ( { assertBe, assertAs, }, )=> {
	const map= new Map( [ [ 'foo', 0, ], [ 'bar', 'bar', ], ], );
	
	assertBe( map.pop( 'bar', ), 'bar', );
	assertAs( map, new Map( [ [ 'foo', 0, ], ], ), );
}, );

test( '{WeakMap}.pop', ( { assertBe, }, )=> {
	const foo= {};
	const bar= {};
	const weakmap= new WeakMap( [ [ foo, 0, ], [ bar, 'bar', ], ], );
	
	assertBe( weakmap.pop( bar, ), 'bar', );
	assertBe( weakmap.has( bar, ), false, );
}, );
