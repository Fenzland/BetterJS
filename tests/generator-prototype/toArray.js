import { test, } from '../Robberfly.js';
import '../../src/generator-prototype/toArray.js';

test( '{Generator}.toArray', ( { assertAs, }, )=> {
	const gf= function*(){
		yield 0;
		yield 1;
		yield* [ 2, 3, 4, ];
	};
	
	assertAs( gf().toArray(), [ 0, 1, 2, 3, 4, ], );
}, );
