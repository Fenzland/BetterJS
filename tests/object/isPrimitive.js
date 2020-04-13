import { test, } from '../Robberfly.js';
import '../../src/object/isPrimitive.js';

test( 'Object.isPrimitive', ( { assertBe, }, )=> {
	assertBe( Object.isPrimitive( null, ), true, );
	assertBe( Object.isPrimitive( true, ), true, );
	assertBe( Object.isPrimitive( new Boolean( true ), ), false, );
	assertBe( Object.isPrimitive( '1', ), true, );
	assertBe( Object.isPrimitive( new String( '1' ), ), false, );
	assertBe( Object.isPrimitive( 1, ), true, );
	assertBe( Object.isPrimitive( new Number( 1 ), ), false, );
	assertBe( Object.isPrimitive( 1n, ), true, );
	assertBe( Object.isPrimitive( Object( 1n ), ), false, );
	assertBe( Object.isPrimitive( Symbol( 'foo', ), ), true, );
	assertBe( Object.isPrimitive( Object( Symbol( 'foo', ) ), ), false, );
	assertBe( Object.isPrimitive( {}, ), false, );
	assertBe( Object.isPrimitive( Object.create( null, ), ), false, );
	assertBe( Object.isPrimitive( new (class {})(), ), false, );
	assertBe( Object.isPrimitive( ()=> {}, ), false, );
	assertBe( Object.isPrimitive( class {}, ), false, );
}, );
