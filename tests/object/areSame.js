import { test, } from '../Robberfly.js';
import '../../src/object/areSame.js';

test( 'Object.areSame', ( { assertBe, }, )=> {
	assertBe( Object.areSame( undefined, undefined, ), true, );
	assertBe( Object.areSame( null, null, ), true, );
	assertBe( Object.areSame( undefined, null, ), false, );
	assertBe( Object.areSame( NaN, undefined, ), false, );
	assertBe( Object.areSame( NaN, null, ), false, );
	assertBe( Object.areSame( NaN, NaN, ), true, );
	assertBe( Object.areSame( Infinity, -Infinity, ), false, );
	assertBe( Object.areSame( 0, -0, ), true, );
	assertBe( Object.areSame( 1, 1, ), true, );
	assertBe( Object.areSame( 1, 1n, ), false, );
	assertBe( Object.areSame( 1, '1', ), false, );
	assertBe( Object.areSame( 1, true, ), false, );
	assertBe( Object.areSame( 1, new Number( 1, ), ), false, );
	
	assertBe( Object.areSame( [], [], ), true, );
	assertBe( Object.areSame( [ , ], [], ), false, );
	assertBe( Object.areSame( [ , ], [ undefined, ], ), true, );
	assertBe( Object.areSame( [ , ], [ null, ], ), false, );
	assertBe( Object.areSame( [ , ], [ 1, ], ), false, );
	assertBe( Object.areSame( [ null, ], [ , ], ), false, );
	assertBe( Object.areSame( [ null, ], [ undefined, ], ), false, );
	assertBe( Object.areSame( [ 0, 2, ], [ -0, 2, ], ), true, );
	assertBe( Object.areSame( [ 0, 2, ], [ 2, 0, ], ), false, );
	assertBe( Object.areSame( {}, {}, ), true, );
	assertBe( Object.areSame( { a:1, b:2, }, { b:2, a:1, }, ), true, );
	assertBe( Object.areSame( { a:1, b:2, }, { b:2, }, ), false, );
	assertBe( Object.areSame( { a:1, b:2, }, new (function(){ this.a= 1; this.b= 2; })(), ), false, );
	assertBe( Object.areSame( new Map( [ [ 2, 1, ], [ 1, 2, ], ], ), new Map( [ [ 1, 2, ], [ 2, 1, ], ], ), ), true, );
	assertBe( Object.areSame( new Set( [ 0, Infinity, 1, NaN, ], ), new Set( [ NaN, 0, 1, Infinity, ], ), ), true, );
}, );
