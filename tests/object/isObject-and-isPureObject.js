import { test, } from '../Robberfly.js';
import '../../src/object/isObject-and-isPureObject.js';

test( 'Object.isObject', ( { assertBe, }, )=> {
	assertBe( Object.isObject( null, ), false, );
	assertBe( Object.isObject( true, ), false, );
	assertBe( Object.isObject( new Boolean( true ), ), true, );
	assertBe( Object.isObject( '1', ), false, );
	assertBe( Object.isObject( new String( '1' ), ), true, );
	assertBe( Object.isObject( 1, ), false, );
	assertBe( Object.isObject( new Number( 1 ), ), true, );
	assertBe( Object.isObject( 1n, ), false, );
	assertBe( Object.isObject( Object( 1n ), ), true, );
	assertBe( Object.isObject( Symbol( 'foo', ), ), false, );
	assertBe( Object.isObject( Object( Symbol( 'foo', ) ), ), true, );
	assertBe( Object.isObject( {}, ), true, );
	assertBe( Object.isObject( Object.create( null, ), ), true, );
	assertBe( Object.isObject( new (class {})(), ), true, );
	assertBe( Object.isObject( ()=> {}, ), true, );
	assertBe( Object.isObject( class {}, ), true, );
}, );

test( 'Object.isPureObject', ( { assertBe, }, )=> {
	assertBe( Object.isPureObject( null, ), false, );
	assertBe( Object.isPureObject( true, ), false, );
	assertBe( Object.isPureObject( new Boolean( true ), ), false, );
	assertBe( Object.isPureObject( '1', ), false, );
	assertBe( Object.isPureObject( new String( '1' ), ), false, );
	assertBe( Object.isPureObject( 1, ), false, );
	assertBe( Object.isPureObject( new Number( 1 ), ), false, );
	assertBe( Object.isPureObject( 1n, ), false, );
	assertBe( Object.isPureObject( Object( 1n ), ), false, );
	assertBe( Object.isPureObject( Symbol( 'foo', ), ), false, );
	assertBe( Object.isPureObject( Object( Symbol( 'foo', ) ), ), false, );
	assertBe( Object.isPureObject( {}, ), true, );
	assertBe( Object.isPureObject( Object.create( null, ), ), true, );
	assertBe( Object.isPureObject( new (class {})(), ), false, );
	assertBe( Object.isPureObject( ()=> {}, ), false, );
	assertBe( Object.isPureObject( class {}, ), false, );
}, );
