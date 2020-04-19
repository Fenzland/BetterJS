import { test, } from '../Robberfly.js';
import '../../src/object/equal.js';

test( 'Object.equal', ( { assertBe, }, )=> {
	assertBe( Object.equal( undefined, undefined, ), true, );
	assertBe( Object.equal( null, null, ), true, );
	assertBe( Object.equal( undefined, null, ), false, );
	assertBe( Object.equal( NaN, undefined, ), false, );
	assertBe( Object.equal( NaN, null, ), false, );
	assertBe( Object.equal( NaN, NaN, ), true, );
	assertBe( Object.equal( Infinity, -Infinity, ), false, );
	assertBe( Object.equal( 0, -0, ), true, );
	assertBe( Object.equal( 1, 1, ), true, );
	assertBe( Object.equal( 1, 1n, ), false, );
	assertBe( Object.equal( 1, '1', ), false, );
	assertBe( Object.equal( 1, true, ), false, );
	assertBe( Object.equal( 1, new Number( 1, ), ), false, );
	
	assertBe( Object.equal( [], [], ), false, );
	assertBe( Object.equal( {}, {}, ), false, );
	
	const foo= [];
	const bar= {};
	
	assertBe( Object.equal( foo, foo, ), true, );
	assertBe( Object.equal( bar, bar, ), true, );
}, );
