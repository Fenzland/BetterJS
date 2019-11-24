import { test, } from './Robberfly.js';
import '../src/instanceof-types.js';

test( 'instanceof-types', ( { assertTo, assertNotTo, }, )=> {
	assertTo( {} instanceof Object, );
	assertTo( Object.create( null, ) instanceof Object, );
	assertNotTo( null instanceof Object, );
	assertTo( 1 instanceof Number, );
	assertTo( '1' instanceof String, );
	assertTo( 1n instanceof BigInt, );
	assertTo( true instanceof Boolean, );
	assertTo( Symbol( 'foo', ) instanceof Symbol, );
	assertTo( [] instanceof Array, );
}, );
