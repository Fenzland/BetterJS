import { test, } from '../Robberfly.js';
import '../../src/fp/noop.js';

test( 'FP: Function.noop', async ( { assertBe, assertFunction, }, )=> {
	assertFunction( Function.noop, );
	
	assertBe( Function.noop( 3, ), 3, );
}, );
