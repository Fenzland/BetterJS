import { test, } from '../Robberfly.js';
import '../../src/fp/bind-syntax-hack.js';

test( 'FP: bind syntax hack', async ( { assertBe, assertAs, assertInstanceOf, assertThrowInstanceOf, }, )=> {
	
	const trueToString= true['::']( Object.prototype.toString, );
	
	assertInstanceOf( trueToString, Function, );
	assertBe( trueToString(), '[object Boolean]', );
	assertBe( trueToString.call( 6, ), '[object Boolean]', );
	
	const falseToString= false['::'].toString;
	
	assertInstanceOf( falseToString, Function, );
	assertBe( falseToString(), 'false', );
	assertBe( falseToString.call( true, ), 'false', );
	
	const arrayIteratorFunction= [ 0, 1, ]['::'][Symbol.iterator];
	
	assertInstanceOf( arrayIteratorFunction, Function, );
	const iterator= arrayIteratorFunction();
	
	assertAs( iterator.next(), { value:0, done:false, }, );
	assertAs( iterator.next(), { value:1, done:false, }, );
	assertAs( iterator.next(), { value:undefined, done:true, }, );
	
	assertThrowInstanceOf( TypeError, ()=> {
		({})['::'].someNotExistsMethod;
	}, );
	
	assertThrowInstanceOf( TypeError, ()=> {
		[]['::'].length;
	}, );
}, );
