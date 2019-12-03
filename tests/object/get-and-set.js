import { test, } from '../Robberfly.js';
import '../../src/object/get-and-set.js';

test( 'Object.get', ( { assertBe, }, )=> {
	const prop= { foo:1, };
	const obj= Object.create( prop, { bar:{ value:2, }, }, );
	
	assertBe( Object.get( obj, 'bar', ), 2, );
	assertBe( Object.get( obj, 'foo', ), undefined, );
}, );

test( 'Object.set', ( { assertBe, assertAs, }, )=> {
	const obj= {};
	
	assertBe( Object.set( obj, 'foo', 3, ), 3, );
	assertAs( obj, { foo:3, }, );
}, );
