import { test, } from '../Robberfly.js';
import '../../src/function-prototype/rename.js';

test( '{Function}.rename', async ( { assertBe, assertInstanceOf, assertRun, }, )=> {
	const foo= ()=> {};
	const bar= function(){};
	const foofoo= foo.rename( 'Foo', );
	const barbar= bar.rename( 'Bar', );
	
	assertBe( foo, foofoo, );
	assertBe( bar, barbar, );
	assertBe( foo.name, 'Foo', );
	assertBe( bar.name, 'Bar', );
}, );
