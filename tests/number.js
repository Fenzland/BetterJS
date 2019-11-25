import { test, } from './Robberfly.js';
import '../src/number.js';

test( 'Number.ε', ( { assertBe, }, )=> {
	assertBe( Number.ε, Number.EPSILON, );
}, );

test( 'Number.isInfinite', ( { assertBe, }, )=> {
	assertBe( Number.isInfinite( 0, ), false, );
	assertBe( Number.isInfinite( 8, ), false, );
	assertBe( Number.isInfinite( NaN, ), false, );
	assertBe( Number.isInfinite( Infinity, ), true, );
	assertBe( Number.isInfinite( -Infinity, ), true, );
}, );

test( 'Number.equal', ( { assertBe, }, )=> {
	assertBe( Number.equal( 0, 0, ), true, );
	assertBe( Number.equal( 0.7 - - 0.2, 0.9, ), true, );
	assertBe( Number.equal( 0.9 - 0.7, 0.2, ), true, );
	assertBe( Number.equal( 0, Number.EPSILON*1.001, ), false, );
	assertBe( Number.equal( 0, Number.EPSILON*0.999, ), true, );
	assertBe( Number.equal( 1, 2, ), false, );
	assertBe( Number.equal( NaN, NaN, ), false, );
	assertBe( Number.equal( Infinity, -Infinity, ), true, );
	assertBe( Number.equal( -0, 0, ), true, );
}, );

test( 'Number.or', ( { assertBe, }, )=> {
	
	assertBe( Number.or( 0, 1, 2, ), 0, );
	assertBe( Number.or( '', '1', 2, ), 1, );
	assertBe( Number.or( null, 1n, ), 1, );
	assertBe( Number.or( Infinity, 3, ), Infinity, );
	assertBe( Number.or( NaN, 3, ), 3, );
	assertBe( Number.or( undefined, 'a', ), NaN, );
	assertBe( Number.or(), NaN, );
}, );
