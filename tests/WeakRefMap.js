import { test, } from './Robberfly.js';
import '../src/WeakRefMap.js';

test( 'WeakRefMap.global', ( { assertBe, assertClass, }, )=> {
	assertClass( globalThis.WeakRefMap, );
	assertBe( globalThis.WeakRefMap.length, 0, );
	
	const map= new WeakRefMap( [ [ 'foo', 'bar', ], ], );
	
	assertBe( map.has( 'foo', ), true, );
	assertBe( map.get( 'foo', ), 'bar', );
	assertBe( map.has( 'bar', ), false, );
	assertBe( map.get( 'bar', ), undefined, );
}, );

