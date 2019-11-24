import { test, } from './Robberfly.js';
import '../src/promisive.js';

test( 'then', async ( { assertBe, assertInstanceOf, assertNotThrow, }, )=> {
	const $foo= then();
	const $bar= then( ()=> 'bar', );
	
	assertInstanceOf( $foo, Promise, );
	assertInstanceOf( $bar, Promise, );
	await assertNotThrow( async ()=> {
		assertBe( await $foo, undefined, );
	}, );
	await assertNotThrow( async ()=> {
		assertBe( await $bar, 'bar', );
	}, );
}, );

test( 'timeout', ( { assertBe, assertInstanceOf, }, )=> {
	// const $foo= timeout();
	// const $bar= timeout( 100, );
	// const $baz= timeout( 200, 'baz', );
	
	// assertInstanceOf( $foo, Promise, );
	// assertBe( await $foo, undefined, );
	// assertBe( await $bar, 'bar', );
	
}, );

test( 'nextFrame', ( { assertBe, assertInstanceOf, }, )=> {
	
}, );

test( 'window-loading', async ( { assertInstanceOf, }, )=> {
	if( globalThis.window )
	{
		assertInstanceOf( window.loaded, Promise, );
		assertInstanceOf( window.beforeunloaded, Promise, );
		assertInstanceOf( window.unloaded, Promise, );
	}
	// await window.loaded;
	// await window.beforeunloaded;
	// await window.unloaded;
}, );
