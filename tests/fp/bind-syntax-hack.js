import { test, } from '../Robberfly.js';
import '../../src/fp/bind-syntax-hack.js';

test( 'FP: bind syntax hack', async ( { assertBe, assertInstanceOf, assertThrowInstanceOf, }, )=> {
	
	const trueToString= true['::']( Object.prototype.toString, );
	
	assertInstanceOf( trueToString, Function, );
	assertBe( trueToString(), '[object Boolean]', );
	assertBe( trueToString.call( 6, ), '[object Boolean]', );
	
	const falseToString= false['::']( 'toString', );
	
	assertInstanceOf( falseToString, Function, );
	assertBe( falseToString(), 'false', );
	assertBe( falseToString.call( true, ), 'false', );
	
	assertThrowInstanceOf( TypeError, ()=> {
		{}['::']( 'someNotExistsMethod', );
	}, );
	
	assertThrowInstanceOf( TypeError, ()=> {
		[]['::']( 'length', );
	}, );
}, );
