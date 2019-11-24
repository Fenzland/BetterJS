import { test, } from './Robberfly.js';
import '../src/global-constructors.js';

test( 'global-constructors', ( { assertBe, assertInstanceOf, }, )=> {
	const af= async ()=>{};
	const gf= function *(){};
	const agf= async function *(){};
	
	assertBe( af.constructor, AsyncFunction, );
	assertBe( gf.constructor, GeneratorFunction, );
	assertBe( agf.constructor, AsyncGeneratorFunction, );
	
	assertInstanceOf( af, AsyncFunction, );
	assertInstanceOf( gf, GeneratorFunction, );
	assertInstanceOf( agf, AsyncGeneratorFunction, );
}, );
