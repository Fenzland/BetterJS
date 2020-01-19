import { test, } from './Robberfly.js';
import '../src/global-constructors-fix.js';

test( 'global-constructors-fix static', ( { assertBe, }, )=> {
	
	assertBe( Generator.name, 'Generator', );
	assertBe( AsyncGenerator.name, 'AsyncGenerator', );
	
}, );

test( 'global-constructors-fix instance', ( { assertBe, assertInstanceOf, }, )=> {
	const af= async ()=>{};
	const gf= function *(){};
	const agf= async function *(){};
	const g= gf();
	const ag= agf();
	
	assertInstanceOf( g, Generator, );
	assertInstanceOf( ag, AsyncGenerator, );
}, );
