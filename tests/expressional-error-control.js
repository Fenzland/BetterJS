import { test, } from './Robberfly.js';
import '../src/expressional-error-control.js';

test( 'expressional-error-control', ( { assertTo, assertBe, assertThrow, assertThrowInstanceOf, }, )=> {
	const error= new Error();
	
	assertThrowInstanceOf( Error, ()=> throws(), );
	assertThrow( 1, ()=> throws( 1, ), );
	
	tries( ()=> { throw error; }, ).catch( reason=> {
		assertBe( error, reason, );
	}, );
}, );
