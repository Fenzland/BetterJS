import { test, } from '../Robberfly.js';
import '../../src/array-prototype/convolute.js';

test( '{Array}.convolute', ( { assertBe, assertAs, assertRun, }, )=> {
	const runLoop= assertRun();
	
	assertAs( [ 1, 2, ].convolute( ()=> {}, ), [ 1, 2, ], );
	assertAs( [ 1, 2, ].convolute( x=> x*4, ), [ 4, 8, ], );
	assertAs( [ 1, 2, ].convolute( ( a, b, c, )=> a*b*c, ), [], );
	assertAs( [ 1, 2, ].convolute( ( a, b, )=> a - b, ), [ -1, ], );
	
	const array= [ 0, 1, 2, 3, ];
	let index= 0;
	
	const result= array.convolute( ( x, y, z, )=> {
		runLoop.run();
		
		if( z < 4 )
			array.push( y*2, );
		
		switch( index )
		{
			case 0:
				assertBe( x, 0, );
				assertBe( y, 1, );
				assertBe( z, 2, );
			break;
			
			case 1:
				assertBe( x, 1, );
				assertBe( y, 2, );
				assertBe( z, 3, );
			break;
			
			case 2:
				assertBe( x, 2, );
				assertBe( y, 3, );
				assertBe( z, 2, );
			break;
			
			case 3:
				assertBe( x, 3, );
				assertBe( y, 2, );
				assertBe( z, 4, );
			break;
			
			case 4:
				assertBe( x, 2, );
				assertBe( y, 4, );
				assertBe( z, 6, );
			break;
		}
		
		++index;
		
		return x - - y - - z;
	}, );
	
	assertAs( result, [ 3, 6, 7, 9, 12, ], )
	
	runLoop.assert( 5, );
}, );
