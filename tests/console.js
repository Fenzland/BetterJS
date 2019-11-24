import { test, } from './Robberfly.js';
import '../src/console.js';

test( 'console', ( { assertBe, }, )=> {
	
	console.groupCollapsed( 'console-testing', )
	
	assertBe( console.log( ' ', ), ' ', );
	assertBe( console.info( ' ', ), ' ', );
	assertBe( console.warn( ' ', ), ' ', );
	assertBe( console.error( ' ', ), ' ', );
	assertBe( console.dirxml( ' ', ), ' ', );
	assertBe( console.assert( ' ', ), ' ', );
	assertBe( console.dir( ' ', ), ' ', );
	
	const data= { 'foo':'bar', };
	assertBe( console.table( data, ), data, );
	
	console.groupEnd();
}, );
