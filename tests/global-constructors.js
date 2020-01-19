import { test, } from './Robberfly.js';
import '../src/global-constructors.js';

test( 'global-constructors static', ( { assertBe, }, )=> {
	
	assertBe( AsyncFunction.name, 'AsyncFunction', );
	assertBe( GeneratorFunction.name, 'GeneratorFunction', );
	assertBe( AsyncGeneratorFunction.name, 'AsyncGeneratorFunction', );
	
}, );

test( 'global-constructors instance', ( { assertBe, assertInstanceOf, }, )=> {
	const af= async ()=>{};
	const gf= function *(){};
	const agf= async function *(){};
	const g= gf();
	const ag= agf();
	
	assertBe( af.constructor, AsyncFunction, );
	assertBe( gf.constructor, GeneratorFunction, );
	assertBe( agf.constructor, AsyncGeneratorFunction, );
	
	assertBe( g.constructor, Generator, );
	assertBe( ag.constructor, AsyncGenerator, );
	
	assertInstanceOf( af, AsyncFunction, );
	assertInstanceOf( gf, GeneratorFunction, );
	assertInstanceOf( agf, AsyncGeneratorFunction, );
}, );
