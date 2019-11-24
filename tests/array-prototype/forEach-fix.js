import { test, } from '../Robberfly.js';
import '../../src/array-prototype/forEach-fix.js';

test( '{Array}.forEach-fix', ( { assertBe, assertRun, }, )=> {
	const runLoop= assertRun();
	
	[ 1, 2, ].forEach( ( item, index, array, )=> {
		runLoop.run();
		
		if( item < 3 )
			array.push( item*2, );
		
		switch( index )
		{
			case 0:
				assertBe( item, 1, );
			break;
			
			case 1:
				assertBe( item, 2, );
			break;
			
			case 2:
				assertBe( item, 2, );
			break;
			
			case 3:
				assertBe( item, 4, );
			break;
			
			case 4:
				assertBe( item, 4, );
			break;
		}
	}, );
	
	runLoop.assert( 5, );
}, );

