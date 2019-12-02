import { test, } from '../Robberfly.js';
import '../../src/object/bePrototypeOf.js';

test( 'Object.bePrototypeOf', ( { assertBe, }, )=> {
	const proto= { protoProp:1, };
	const foo= Object.assign( Object.create( proto, ), { prop:2, }, );
	
	assertBe( Object.bePrototypeOf( Boolean.prototype, true, ), true, );
	assertBe( Object.bePrototypeOf( String.prototype, 'string', ), true, );
	assertBe( Object.bePrototypeOf( Number.prototype, 1, ), true, );
	assertBe( Object.bePrototypeOf( BigInt.prototype, 0n, ), true, );
	assertBe( Object.bePrototypeOf( Symbol.prototype, Symbol( 'symbol', ), ), true, );
	
	assertBe( Object.bePrototypeOf( Object.prototype, proto, ), true, );
	assertBe( Object.bePrototypeOf( Object.prototype, foo, ), true, );
	assertBe( Object.bePrototypeOf( proto, foo, ), true, );
	assertBe( Object.bePrototypeOf( foo, proto, ), false, );
	
	assertBe( Object.bePrototypeOf( null, null, ), true, );
	assertBe( Object.bePrototypeOf( undefined, undefined, ), true, );
	assertBe( Object.bePrototypeOf( Object.prototype, null, ), false, );
	assertBe( Object.bePrototypeOf( Object.prototype, undefined, ), false, );
	assertBe( Object.bePrototypeOf( undefined, null, ), false, );
	assertBe( Object.bePrototypeOf( null, undefined, ), false, );
}, );
