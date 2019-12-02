import { test, } from '../Robberfly.js';
import '../../src/fp/await.js';

test( 'FP: {Function}.await', async ( { assertBe, assertFunction, assertAsync, assertInstanceOf, }, )=> {
	const foo= ( x, y, z, )=> (x - y)*z;
	const bar= foo.await();
	
	const x= Promise.resolve( 2, );
	const y= Promise.resolve( 3, );
	const z= Promise.resolve( 6, );
	
	assertFunction( bar, );
	assertAsync( bar, );
	
	const returning= bar( x, y, z, );
	
	assertInstanceOf( returning, Promise, );
	assertBe( await returning, -6, )
}, );
