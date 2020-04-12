import { test, } from '../Robberfly.js';
import '../../src/object/better-frozen.js';

test( 'better Object.isFrozen', ( { assertBe, }, )=> {
	{
		const object= {};
		
		assertBe( Object.isFrozen( object, ), false, );
		
		Object.preventExtensions( object, );
		
		assertBe( Object.isFrozen( object, ), false, );
	}
	{
		const object= {};
		
		assertBe( Object.isFrozen( object, ), false, );
		
		Reflect.preventExtensions( object, );
		
		assertBe( Object.isFrozen( object, ), false, );
	}
	{
		const object= { foo:'bar', };
		
		assertBe( Object.isFrozen( object, ), false, );
		
		Object.preventExtensions( object, );
		
		assertBe( Object.isFrozen( object, ), false, );
	}
	{
		const object= { foo:'bar', };
		
		assertBe( Object.isFrozen( object, ), false, );
		
		Reflect.preventExtensions( object, );
		
		assertBe( Object.isFrozen( object, ), false, );
	}
	{
		const object= {};
		
		assertBe( Object.isFrozen( object, ), false, );
		
		Object.seal( object, );
		
		assertBe( Object.isFrozen( object, ), false, );
	}
	{
		const object= { foo:'bar', };
		
		assertBe( Object.isFrozen( object, ), false, );
		
		Object.seal( object, );
		
		assertBe( Object.isFrozen( object, ), false, );
	}
	{
		const object= {};
		
		assertBe( Object.isFrozen( object, ), false, );
		
		Object.freeze( object, );
		
		assertBe( Object.isFrozen( object, ), true, );
	}
	{
		const object= { foo:'bar', };
		
		assertBe( Object.isFrozen( object, ), false, );
		
		Object.freeze( object, );
		
		assertBe( Object.isFrozen( object, ), true, );
	}
}, );

test( 'better Object.isSealed', ( { assertBe, }, )=> {
	{
		const object= {};
		
		assertBe( Object.isSealed( object, ), false, );
		
		Object.preventExtensions( object, );
		
		assertBe( Object.isSealed( object, ), false, );
	}
	{
		const object= {};
		
		assertBe( Object.isSealed( object, ), false, );
		
		Reflect.preventExtensions( object, );
		
		assertBe( Object.isSealed( object, ), false, );
	}
	{
		const object= { foo:'bar', };
		
		assertBe( Object.isSealed( object, ), false, );
		
		Object.preventExtensions( object, );
		
		assertBe( Object.isSealed( object, ), false, );
	}
	{
		const object= { foo:'bar', };
		
		assertBe( Object.isSealed( object, ), false, );
		
		Reflect.preventExtensions( object, );
		
		assertBe( Object.isSealed( object, ), false, );
	}
	{
		const object= {};
		
		assertBe( Object.isSealed( object, ), false, );
		
		Object.seal( object, );
		
		assertBe( Object.isSealed( object, ), true, );
	}
	{
		const object= { foo:'bar', };
		
		assertBe( Object.isSealed( object, ), false, );
		
		Object.seal( object, );
		
		assertBe( Object.isSealed( object, ), true, );
	}
	{
		const object= {};
		
		assertBe( Object.isSealed( object, ), false, );
		
		Object.freeze( object, );
		
		assertBe( Object.isSealed( object, ), true, );
	}
	{
		const object= { foo:'bar', };
		
		assertBe( Object.isSealed( object, ), false, );
		
		Object.freeze( object, );
		
		assertBe( Object.isSealed( object, ), true, );
	}
}, );

test( 'better Object.isExtensible', ( { assertBe, }, )=> {
	{
		const object= {};
		
		assertBe( Object.isExtensible( object, ), true );
		
		Object.preventExtensions( object, );
		
		assertBe( Object.isExtensible( object, ), false );
	}
	{
		const object= {};
		
		assertBe( Object.isExtensible( object, ), true );
		
		Reflect.preventExtensions( object, );
		
		assertBe( Object.isExtensible( object, ), false );
	}
	{
		const object= { foo:'bar', };
		
		assertBe( Object.isExtensible( object, ), true );
		
		Object.preventExtensions( object, );
		
		assertBe( Object.isExtensible( object, ), false );
	}
	{
		const object= { foo:'bar', };
		
		assertBe( Object.isExtensible( object, ), true );
		
		Reflect.preventExtensions( object, );
		
		assertBe( Object.isExtensible( object, ), false );
	}
	{
		const object= {};
		
		assertBe( Object.isExtensible( object, ), true );
		
		Object.seal( object, );
		
		assertBe( Object.isExtensible( object, ), false, );
	}
	{
		const object= { foo:'bar', };
		
		assertBe( Object.isExtensible( object, ), true );
		
		Object.seal( object, );
		
		assertBe( Object.isExtensible( object, ), false, );
	}
	{
		const object= {};
		
		assertBe( Object.isExtensible( object, ), true );
		
		Object.freeze( object, );
		
		assertBe( Object.isExtensible( object, ), false, );
	}
	{
		const object= { foo:'bar', };
		
		assertBe( Object.isExtensible( object, ), true );
		
		Object.freeze( object, );
		
		assertBe( Object.isExtensible( object, ), false, );
	}
}, );

test( 'better Reflect.isExtensible', ( { assertBe, }, )=> {
	{
		const object= {};
		
		assertBe( Reflect.isExtensible( object, ), true );
		
		Object.preventExtensions( object, );
		
		assertBe( Reflect.isExtensible( object, ), false );
	}
	{
		const object= { foo:'bar', };
		
		assertBe( Reflect.isExtensible( object, ), true );
		
		Object.preventExtensions( object, );
		
		assertBe( Reflect.isExtensible( object, ), false );
	}
	{
		const object= {};
		
		assertBe( Reflect.isExtensible( object, ), true );
		
		Object.seal( object, );
		
		assertBe( Reflect.isExtensible( object, ), false, );
	}
	{
		const object= { foo:'bar', };
		
		assertBe( Reflect.isExtensible( object, ), true );
		
		Object.seal( object, );
		
		assertBe( Reflect.isExtensible( object, ), false, );
	}
	{
		const object= {};
		
		assertBe( Reflect.isExtensible( object, ), true );
		
		Object.freeze( object, );
		
		assertBe( Reflect.isExtensible( object, ), false, );
	}
	{
		const object= { foo:'bar', };
		
		assertBe( Reflect.isExtensible( object, ), true );
		
		Object.freeze( object, );
		
		assertBe( Reflect.isExtensible( object, ), false, );
	}
}, );
