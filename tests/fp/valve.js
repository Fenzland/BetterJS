import { test, } from '../Robberfly.js';
import '../../src/fp/valve.js';

test( 'FP: {Function}.valve', async ( { assertBe, assertAs, }, )=> {
	const fixed= ( a, b, c, d, )=> `${a??''}${b??''}${c??''}${d??''}`;
	
	const il0= fixed.valve( 0, );
	const il2= fixed.valve( 2, );
	const il4= fixed.valve( 4, );
	const il5= fixed.valve( 5, );
	const ilN1= fixed.valve( -1, );
	
	assertBe( il0( 0, 1, 2, 3, ), '', );
	assertBe( il2( 0, 1, 2, 3, ), '01', );
	assertBe( il4( 0, 1, 2, 3, ), '0123', );
	assertBe( il5( 0, 1, 2, 3, ), '0123', );
	assertBe( ilN1( 0, 1, 2, 3, ), '012', );
	
	assertBe( il0.name, 'fixed', );
	assertBe( il2.name, 'fixed', );
	assertBe( il4.name, 'fixed', );
	assertBe( il5.name, 'fixed', );
	assertBe( ilN1.name, 'fixed', );
	assertBe( il0.length, 0, );
	assertBe( il2.length, 2, );
	assertBe( il4.length, 4, );
	assertBe( il5.length, 5, );
	assertBe( ilN1.length, 3, );
	
	const flexible= ( ...a )=> a.map( $=> $??'', ).join( '', );
	
	const el0= flexible.valve( 0, );
	const el2= flexible.valve( 2, );
	const el4= flexible.valve( 4, );
	const el5= flexible.valve( 5, );
	const elN1= flexible.valve( -1, );
	
	assertBe( el0( 0, 1, 2, 3, 4, 5, 6, ), '', );
	assertBe( el2( 0, 1, 2, 3, 4, 5, 6, ), '01', );
	assertBe( el4( 0, 1, 2, 3, 4, 5, 6, ), '0123', );
	assertBe( el5( 0, 1, 2, 3, 4, 5, 6, ), '01234', );
	assertBe( elN1( 0, 1, 2, 3, 4, 5, 6, ), '', );
	
	assertBe( el0.name, 'flexible', );
	assertBe( el2.name, 'flexible', );
	assertBe( el4.name, 'flexible', );
	assertBe( el5.name, 'flexible', );
	assertBe( elN1.name, 'flexible', );
	assertBe( el0.length, 0, );
	assertBe( el2.length, 2, );
	assertBe( el4.length, 4, );
	assertBe( el5.length, 5, );
	assertBe( elN1.length, 0, );
}, );
