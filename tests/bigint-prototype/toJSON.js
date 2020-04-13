import { test, } from '../Robberfly.js';
import '../../src/bigint-prototype/toJSON.js';

test( '{BigInt}.toJSON()', ( { assertBe, }, )=> {
	assertBe( JSON.stringify(1n), '1', );
	assertBe( JSON.stringify(0x1000000000000000n), '"0x1000000000000000"', );
	assertBe( BigInt( JSON.parse( JSON.stringify(0x1000000000000000n), ), ), 0x1000000000000000n, );
}, );
