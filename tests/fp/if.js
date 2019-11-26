import { test, } from '../Robberfly.js';
import '../../src/fp/if.js';

test( 'FP: Function.if', async ( { assertBe, assertFunction, }, )=> {
	const foo= x=> x*2
	
	const bar= Function.if( 0, foo, );
	const baz= Function.if( 1, foo, );
	const qux= Function.if( x=> x>3, foo, );
	
	assertBe( bar, Function.noop, );
	assertBe( baz, foo, );
	
	assertBe( qux( 2, ), 2, );
	assertBe( qux( 4, ), 8, );
}, );
