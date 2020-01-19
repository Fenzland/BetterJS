import { test, } from '../Robberfly.js';
import '../../src/generator/range.js';

test( 'Generator.range', async ( { assertBe, assertAs, assertFunction, assertRun, }, )=> {
	const { range, }= Generator;
	
	assertBe( range.name, 'range', );
	assertBe( range.length, 2, );
	
	{
		const g= range( 0, 7, );
		
		assertBe( g.constructor, Generator, );
		
		assertAs( [ ...g, ], [ 0, 1, 2, 3, 4, 5, 6, 7, ], );
	}
	
	assertAs( [ ...range( 0, 6, 2, ), ], [ 0, 2, 4, 6, ], );
	assertAs( [ ...range( 3, 1, ), ], [ 3, 2, 1, ], );
	assertAs( [ ...range( 3, -2, 1.5, ), ], [ 3, 1.5, 0, -1.5, ], );
}, );
