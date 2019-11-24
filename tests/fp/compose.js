import { test, } from '../Robberfly.js';
import '../../src/fp/compose.js';

test( 'FP: Function.pipe', async ( { assertBe, assertFunction, assertRun, }, )=> {
	const queue= assertRun();
	
	const foo= Function.pipe(
		x=> {
			queue.run( 1, );
			
			assertBe( x, 2, );
			
			return x**6;
		},
		x=> {
			queue.run( 2, );
			
			assertBe( x, 0b1000000, );
			
			return x - 1;
		},
		x=> {
			queue.run( 3, );
			
			assertBe( x, 0b111111, );
			
			return `--${x.toString( 2, )}--`;
		},
	);
	
	assertFunction( foo, );
	
	queue.run( 0, );
	
	assertBe( foo( 2, ), '--111111--', );
	
	queue.run( 4, );
	
	queue.assert( 5, );
}, );

test( 'FP: Function.compose', async ( { assertBe, assertFunction, assertRun, }, )=> {
	const queue= assertRun();
	
	const foo= Function.compose(
		x=> {
			queue.run( 3, );
			
			assertBe( x, 0b111111, );
			
			return `--${x.toString( 2, )}--`;
		},
		x=> {
			queue.run( 2, );
			
			assertBe( x, 0b1000000, );
			
			return x - 1;
		},
		x=> {
			queue.run( 1, );
			
			assertBe( x, 2, );
			
			return x**6;
		},
	);
	
	assertFunction( foo, );
	
	queue.run( 0, );
	
	assertBe( foo( 2, ), '--111111--', );
	
	queue.run( 4, );
	
	queue.assert( 5, );
}, );
