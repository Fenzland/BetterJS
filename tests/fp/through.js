import { test, } from '../Robberfly.js';
import '../../src/fp/through.js';

test( 'FP: {Function}.through', async ( { assertBe, assertFunction, }, )=> {
	let text;
	
	const func= ( a, b, c, )=> text= `a:${a}, b:${b}, c:${c}`;
	const t0= func.through( 0, );
	const t1= func.through( 1, );
	const to= func.through( 6, );
	const tn1= func.through( -1, );
	
	assertFunction( t0, );
	assertFunction( t1, );
	assertFunction( to, );
	assertFunction( tn1, );
	
	assertBe( t0.length, func.length, );
	assertBe( t1.length, func.length, );
	assertBe( to.length, func.length, );
	assertBe( tn1.length, func.length, );
	
	assertBe( t0.name, func.name, );
	assertBe( t1.name, func.name, );
	assertBe( to.name, func.name, );
	assertBe( tn1.name, func.name, );
	
	text='';
	assertBe( t0( 0, 1, 2, ), 0, );
	assertBe( text, 'a:0, b:1, c:2', );
	text='';
	assertBe( t1( 0, 1, 2, ), 1, );
	assertBe( text, 'a:0, b:1, c:2', );
	text='';
	assertBe( to( 0, 1, 2, ), undefined, );
	assertBe( text, 'a:0, b:1, c:2', );
	text='';
	assertBe( tn1( 0, 1, 2, ), 2, );
	assertBe( text, 'a:0, b:1, c:2', );
	text='';
}, );

test( 'FP: {Function}.awaitThrough', async ( { assertBe, assertFunction, }, )=> {
	let text;
	const func= async ( a, b, c, )=> text= `a:${await a}, b:${await b}, c:${await c}`;
	const t0= func.awaitThrough( 0, );
	const t1= func.awaitThrough( 1, );
	const to= func.awaitThrough( 6, );
	const tn1= func.awaitThrough( -1, );
	
	assertFunction( t0, );
	assertFunction( t1, );
	assertFunction( to, );
	assertFunction( tn1, );
	
	assertBe( t0.length, func.length, );
	assertBe( t1.length, func.length, );
	assertBe( to.length, func.length, );
	assertBe( tn1.length, func.length, );
	
	assertBe( t0.name, func.name, );
	assertBe( t1.name, func.name, );
	assertBe( to.name, func.name, );
	assertBe( tn1.name, func.name, );
	
	const p= x=> Promise.resolve( x, );
	
	text='';
	assertBe( await t0( p( 0, ), p( 1, ), p( 2, ), ), 0, );
	assertBe( text, 'a:0, b:1, c:2', );
	text='';
	assertBe( await t1( p( 0, ), p( 1, ), p( 2, ), ), 1, );
	assertBe( text, 'a:0, b:1, c:2', );
	text='';
	assertBe( await to( p( 0, ), p( 1, ), p( 2, ), ), undefined, );
	assertBe( text, 'a:0, b:1, c:2', );
	text='';
	assertBe( await tn1( p( 0, ), p( 1, ), p( 2, ), ), 2, );
	assertBe( text, 'a:0, b:1, c:2', );
	text='';
}, );
