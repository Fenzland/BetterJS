import { test, } from '../Robberfly.js';
import '../../src/async-generator-prototype/nextValue.js';

test( '{AsyncGenerator}.nextValue', async ( { assertBe, assertAs, assertRun, assertInstanceOf, }, )=> {
	const agf= async function*(){
		yield 0;
		yield 1;
		yield* [ 2, 3, 4, ];
	};
	const ag= agf();
	
	const runLoop= assertRun();
	
	assertBe( await ag.nextValue(), 0, );
	assertBe( await ag.nextValue(), 1, );
	assertBe( await ag.nextValue(), 2, );
	assertBe( await ag.nextValue(), 3, );
	assertBe( await ag.nextValue(), 4, );
	assertBe( await ag.nextValue(), undefined, );
}, );
