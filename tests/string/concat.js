import { test, } from '../Robberfly.js';
import '../../src/string/concat.js';

test( 'String.concat', ( { assertBe, }, )=> {
	assertBe( String.concat( '', '', ), '', );
	assertBe( String.concat( '', [ '0', '1', ], '2', ), '012', );
	assertBe( String.concat( 0, [ null, true, ], [], NaN, {}, ), '0nulltrueNaN[object Object]', );
}, );
