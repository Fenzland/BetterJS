import { test, } from '../Robberfly.js';
import '../../src/object/map.js';

test( 'Object.map', ( { assertBe, assertNotBe, assertAs, assertRun, }, )=> {
	const runLoop= assertRun();
	const context= {};
	const object= { foo:0, bar:1, [Symbol.toStringTag]:'Obj', };
	const keys= [ 'foo', 'bar', ];
	
	let index= 0;
	const result= Object.map( object, function( value, key, self, ){
		assertBe( this, context, );
		assertBe( self, object, );
		assertBe( value, index, );
		assertBe( key, keys[index], );
		
		runLoop.run(index++);
		
		return value*2;
	}, context, );
	
	runLoop.assert( 2, );
	
	assertNotBe( result, object, );
	assertAs( result, { foo:0, bar:2, }, );
}, );
