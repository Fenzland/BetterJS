import { test, } from '../Robberfly.js';
import '../../src/map-and-set/better-modifications.js';

test( 'better {Map}.set return', async ( { assertBe, }, )=> {
	const foo= new Map();
	
	assertBe( foo.set( 'foo', 6, ), 6, );
	assertBe( foo.set( 'foo', 3, ), 3, );
}, );

test( 'better {WeakMap}.set return', async ( { assertBe, }, )=> {
	const foo= new WeakMap();
	const key= {};
	
	assertBe( foo.set( key, 6, ), 6, );
	assertBe( foo.set( key, 3, ), 3, );
}, );

test( 'better {Set}.add return', async ( { assertBe, }, )=> {
	const foo= new Set();
	
	assertBe( foo.add( 'foo', ), 'foo', );
	assertBe( foo.add( 'foo', ), 'foo', );
}, );

test( 'better {WeakSet}.add return', async ( { assertBe, }, )=> {
	const foo= new WeakSet();
	const value= {};
	
	assertBe( foo.add( value, ), value, );
	assertBe( foo.add( value, ), value, );
}, );


test( 'better {Map}.set extendsible', async ( { assertThrowInstanceOf, assertNotThrow, }, )=> {
	const foo= new Map();
	
	foo.set( 'foo', 6, );
	
	Object.preventExtensions( foo, );
	
	assertNotThrow( ()=> foo.set( 'foo', 6, ), );
	assertThrowInstanceOf( TypeError, ()=> foo.set( 'bar', 6, ), );
}, );

test( 'better {WeakMap}.set extendsible', async ( { assertThrowInstanceOf, assertNotThrow, }, )=> {
	const foo= new WeakMap();
	const key= {};
	
	foo.set( key, 6, );
	
	Object.preventExtensions( foo, );
	
	assertNotThrow( ()=> foo.set( key, 6, ), );
	assertThrowInstanceOf( TypeError, ()=> foo.set( {}, 6, ), );
}, );

test( 'better {Set}.add extendsible', async ( { assertThrowInstanceOf, assertNotThrow, }, )=> {
	const foo= new Set();
	
	foo.add( 'foo', );
	
	Object.preventExtensions( foo, );
	
	assertNotThrow( ()=> foo.add( 'foo', ), );
	assertThrowInstanceOf( TypeError, ()=> foo.add( 'bar', ), );
}, );

test( 'better {WeakSet}.add extendsible', async ( { assertThrowInstanceOf, assertNotThrow, }, )=> {
	const foo= new WeakSet();
	const value= {};
	
	foo.add( value, );
	
	Object.preventExtensions( foo, );
	
	assertNotThrow( ()=> foo.add( value, ), );
	assertThrowInstanceOf( TypeError, ()=> foo.add( {}, ), );
}, );
