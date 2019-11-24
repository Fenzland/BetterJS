import { test, } from './Robberfly.js';
import '../src/math.js';

test( 'math', ( { assertBe, }, )=> {
	
	const { mod, }= Math;
	
	assertBe( mod( 1, 3, ), 1, );
	assertBe( mod( -1, 3, ), 2, );
	assertBe( mod( 1, -3, ), -2, );
	assertBe( mod( -1, -3, ), -1, );
	
	const { π, Π, e, }= Math;
	
	assertBe( π, Math.PI, );
	assertBe( Π, Math.PI*2, );
	assertBe( e, Math.E, );
}, );
