import { test, } from '../Robberfly.js';
import '../../src/fp/run.js';

test( 'FP: Function.run', async ( { assertBe, assertFunction, assertRun, }, )=> {
	const runFoo= assertRun();
	
	const foo= ()=> {
		runFoo.run();
		
		return 'result';
	};
	
	assertFunction( Function.run, );
	assertBe( Function.run( foo, ), 'result', );
	runFoo.assert();
}, );
