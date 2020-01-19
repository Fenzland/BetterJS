import { test, } from '../Robberfly.js';
import '../../src/async-generator-prototype/toArray.js';

test( '{AsyncGenerator}.toArray', async ( { assertAs, assertInstanceOf, }, )=> {
	const agf= async function*(){
		yield 0;
		yield 1;
		yield* [ 2, 3, 4, ];
	};
	
	const returned= agf().toArray();
	
	assertInstanceOf( returned, Promise, );
	assertAs( await returned, [ 0, 1, 2, 3, 4, ], );
}, );
