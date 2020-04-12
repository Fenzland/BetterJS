import { test, } from '../Robberfly.js';
import '../../src/object/isObject.js';

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
