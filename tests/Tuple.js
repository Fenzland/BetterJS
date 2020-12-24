import { test, } from './Robberfly.js';
import '../src/Tuple.js';

test( 'Tuple.global', ( { assertBe, assertClass, }, )=> {
	assertClass( globalThis.Tuple, );
	assertBe( globalThis.Tuple.length, 0, );
}, );
