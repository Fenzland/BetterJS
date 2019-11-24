import { test, } from '../Robberfly.js';
import '../../src/function/isXXX.js';

test( 'Function.isFunction', ( { assertBe, }, )=> {
	
	const { isFunction, }= Function;
	
	assertBe( isFunction( function foo(){}, ), true, );
	assertBe( isFunction( async function foo(){}, ), true, );
	assertBe( isFunction( function *foo(){}, ), true, );
	assertBe( isFunction( async function *foo(){}, ), true, );
	assertBe( isFunction( ()=> {}, ), true, );
	assertBe( isFunction( async ()=> {}, ), true, );
	assertBe( isFunction( class {}, ), false, );
	assertBe( isFunction( {}, ), false, );
	assertBe( isFunction( 1, ), false, );
	assertBe( isFunction( null, ), false, );
	assertBe( isFunction( undefined, ), false, );
}, );

test( 'Function.isClass', ( { assertBe, }, )=> {
	
	const { isClass, }= Function;
	
	assertBe( isClass( function foo(){}, ), false, );
	assertBe( isClass( async function foo(){}, ), false, );
	assertBe( isClass( function *foo(){}, ), false, );
	assertBe( isClass( async function *foo(){}, ), false, );
	assertBe( isClass( ()=> {}, ), false, );
	assertBe( isClass( async ()=> {}, ), false, );
	assertBe( isClass( class {}, ), true, );
	assertBe( isClass( {}, ), false, );
	assertBe( isClass( 1, ), false, );
	assertBe( isClass( null, ), false, );
	assertBe( isClass( undefined, ), false, );
}, );

test( 'Function.isAsync', ( { assertBe, }, )=> {
	
	const { isAsync, }= Function;
	
	assertBe( isAsync( function foo(){}, ), false, );
	assertBe( isAsync( async function foo(){}, ), true, );
	assertBe( isAsync( function *foo(){}, ), false, );
	assertBe( isAsync( async function *foo(){}, ), true, );
	assertBe( isAsync( ()=> {}, ), false, );
	assertBe( isAsync( async ()=> {}, ), true, );
	assertBe( isAsync( class {}, ), false, );
	assertBe( isAsync( {}, ), false, );
	assertBe( isAsync( 1, ), false, );
	assertBe( isAsync( null, ), false, );
	assertBe( isAsync( undefined, ), false, );
}, );
