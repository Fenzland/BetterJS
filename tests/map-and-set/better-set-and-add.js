import { test, } from '../Robberfly.js';
import '../../src/map-and-set/better-set-and-add.js';

test( 'better {Map}.set', async ( { assertBe, }, )=> {
	const foo= new Map();
	
	assertBe( foo.set( 'foo', 6, ), 6, );
	assertBe( foo.set( 'foo', 3, ), 3, );
}, );

test( 'better {Set}.add', async ( { assertBe, }, )=> {
	const foo= new Set();
	
	assertBe( foo.add( 'foo', ), 'foo', );
	assertBe( foo.add( 'foo', ), 'foo', );
}, );
