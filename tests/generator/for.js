import { test, } from '../Robberfly.js';
import '../../src/generator/for.js';

test( 'Generator.for', async ( { assertBe, assertAs, assertFunction, assertRun, }, )=> {
	const { for:for_, }= Generator;
	
	assertBe( for_.name, 'for', );
	assertBe( for_.length, 3, );
	
	const g= for_( 0, $=> $ < 8, $=> $ - - 1, );
	
	assertBe( g.constructor, Generator, );
	
	assertAs( [ ...g, ], [ 0, 1, 2, 3, 4, 5, 6, 7, ], );
}, );
