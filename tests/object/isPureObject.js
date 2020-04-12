import { test, } from '../Robberfly.js';
import '../../src/object/isPureObject.js';

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
