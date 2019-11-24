import { test, } from './Robberfly.js';
import '../src/types.js';

test( 'typeOf', ( { assertBe, }, )=> {
	
	assertBe( typeOf( undefined, ), 'undefined', );
	assertBe( typeOf( null, ), 'null', );
	
	assertBe( typeOf( true, ), 'boolean', );
	assertBe( typeOf( false, ), 'boolean', );
	assertBe( typeOf( '', ), 'string', );
	assertBe( typeOf( NaN, ), 'number', );
	assertBe( typeOf( Infinity, ), 'number', );
	assertBe( typeOf( 0, ), 'number', );
	assertBe( typeOf( 0n, ), 'bigint', );
	assertBe( typeOf( Symbol( 'foo', ), ), 'symbol', );
	
	assertBe( typeOf( new Boolean( false, ), ), 'object:boolean', );
	assertBe( typeOf( new String( '', ), ), 'object:string', );
	assertBe( typeOf( new Number( 0, ), ), 'object:number', );
	assertBe( typeOf( Object( 0n, ), ), 'object:bigint', );
	assertBe( typeOf( Object( Symbol( 'user', ), ), ), 'object:symbol', );
	assertBe( typeOf( /^$/, ), 'object:regexp', );
	
	assertBe( typeOf( {}, ), 'object', );
	assertBe( typeOf( [], ), 'object:array', );
	assertBe( typeOf( new Set, ), 'object:set', );
	assertBe( typeOf( new Map, ), 'object:map', );
	assertBe( typeOf( new WeakSet, ), 'object:weakset', );
	assertBe( typeOf( new WeakMap, ), 'object:weakmap', );
	assertBe( typeOf( ()=> {}, ), 'object:function', );
	assertBe( typeOf( async ()=> {}, ), 'object:async:function', );
	assertBe( typeOf( class {}, ), 'object:class', );
	assertBe( typeOf( function *(){}, ), 'object:generatorfunction:function', );
	assertBe( typeOf( async function *(){}, ), 'object:async:generatorfunction:function', );
	assertBe( typeOf( (function *(){})(), ), 'object:generator', );
	assertBe( typeOf( (async function *(){})(), ), 'object:async:generator', );
	assertBe( typeOf( (async ()=> {})(), ), 'object:promise', );
}, );

test( 'typesOf', ( { assertAs, }, )=> {
	
	assertAs( typesOf( undefined, ), [ 'undefined', ], );
	assertAs( typesOf( null, ), [ 'null', ], );
	
	assertAs( typesOf( true, ), [ 'boolean', ], );
	assertAs( typesOf( false, ), [ 'boolean', ], );
	assertAs( typesOf( '', ), [ 'string', ], );
	assertAs( typesOf( NaN, ), [ 'number', ], );
	assertAs( typesOf( Infinity, ), [ 'number', ], );
	assertAs( typesOf( 0, ), [ 'number', ], );
	assertAs( typesOf( 0n, ), [ 'bigint', ], );
	assertAs( typesOf( Symbol( 'foo', ), ), [ 'symbol', ], );
	
	assertAs( typesOf( new Boolean( false, ), ), [ 'object', 'boolean', ], );
	assertAs( typesOf( new String( '', ), ), [ 'object', 'string', ], );
	assertAs( typesOf( new Number( 0, ), ), [ 'object', 'number', ], );
	assertAs( typesOf( Object( 0n, ), ), [ 'object', 'bigint', ], );
	assertAs( typesOf( Object( Symbol( 'user', ), ), ), [ 'object', 'symbol', ], );
	assertAs( typesOf( /^$/, ), [ 'object', 'regexp', ], );
	
	assertAs( typesOf( {}, ), [ 'object', ], );
	assertAs( typesOf( [], ), [ 'object', 'array', ], );
	assertAs( typesOf( new Set, ), [ 'object', 'set', ], );
	assertAs( typesOf( new Map, ), [ 'object', 'map', ], );
	assertAs( typesOf( new WeakSet, ), [ 'object', 'weakset', ], );
	assertAs( typesOf( new WeakMap, ), [ 'object', 'weakmap', ], );
	assertAs( typesOf( ()=> {}, ), [ 'object', 'function', ], );
	assertAs( typesOf( async ()=> {}, ), [ 'object', 'async', 'function', ], );
	assertAs( typesOf( class {}, ), [ 'object', 'class', ], );
	assertAs( typesOf( function *(){}, ), [ 'object', 'generatorfunction', 'function', ], );
	assertAs( typesOf( async function *(){}, ), [ 'object', 'async', 'generatorfunction', 'function', ], );
	assertAs( typesOf( (function *(){})(), ), [ 'object', 'generator', ], );
	assertAs( typesOf( (async function *(){})(), ), [ 'object', 'async', 'generator', ], );
	assertAs( typesOf( (async ()=> {})(), ), [ 'object', 'promise', ], );
}, );

test( 'withType', ( { assertBe, }, )=> {
	
	assertBe( withType( undefined, 'undefined', ), true, );
	assertBe( withType( null, 'null', ), true, );
	
	assertBe( withType( true, 'boolean', ), true, );
	assertBe( withType( false, 'boolean', ), true, );
	assertBe( withType( '', 'string', ), true, );
	assertBe( withType( NaN, 'number', ), true, );
	assertBe( withType( Infinity, 'number', ), true, );
	assertBe( withType( 0, 'number', ), true, );
	assertBe( withType( 0n, 'bigint', ), true, );
	assertBe( withType( Symbol( 'foo', ), 'symbol', ), true, );
	
	assertBe( withType( new Boolean( false, ), 'object', 'boolean', ), true, );
	assertBe( withType( new Boolean( false, ), 'object', ), true, );
	assertBe( withType( new Boolean( false, ), 'boolean', ), true, );
	assertBe( withType( new String( '', ), 'object', 'string', ), true, );
	assertBe( withType( new String( '', ), 'object', ), true, );
	assertBe( withType( new String( '', ), 'string', ), true, );
	assertBe( withType( new Number( 0, ), 'object', 'number', ), true, );
	assertBe( withType( new Number( 0, ), 'object', ), true, );
	assertBe( withType( new Number( 0, ), 'number', ), true, );
	assertBe( withType( Object( 0n, ), 'object', 'bigint', ), true, );
	assertBe( withType( Object( 0n, ), 'object', ), true, );
	assertBe( withType( Object( 0n, ), 'bigint', ), true, );
	assertBe( withType( Object( Symbol( 'user', ), ), 'object', 'symbol', ), true, );
	assertBe( withType( Object( Symbol( 'user', ), ), 'object', ), true, );
	assertBe( withType( Object( Symbol( 'user', ), ), 'symbol', ), true, );
	assertBe( withType( /^$/, 'object', 'regexp', ), true, );
	assertBe( withType( /^$/, 'object', ), true, );
	assertBe( withType( /^$/, 'regexp', ), true, );
	
	assertBe( withType( {}, 'object', ), true, );
	assertBe( withType( [], 'object', ), true, );
	assertBe( withType( [], 'array', ), true, );
	assertBe( withType( new Set, 'object', 'set', ), true, );
	assertBe( withType( new Set, 'object', ), true, );
	assertBe( withType( new Set, 'set', ), true, );
	assertBe( withType( new Map, 'object', 'map', ), true, );
	assertBe( withType( new Map, 'object', ), true, );
	assertBe( withType( new Map, 'map', ), true, );
	assertBe( withType( new WeakSet, 'object', 'weakset', ), true, );
	assertBe( withType( new WeakSet, 'object', ), true, );
	assertBe( withType( new WeakSet, 'weakset', ), true, );
	assertBe( withType( new WeakMap, 'object', 'weakmap', ), true, );
	assertBe( withType( new WeakMap, 'object', ), true, );
	assertBe( withType( new WeakMap, 'weakmap', ), true, );
	assertBe( withType( ()=> {}, 'object', 'function', ), true, );
	assertBe( withType( ()=> {}, 'object', ), true, );
	assertBe( withType( ()=> {}, 'function', ), true, );
	assertBe( withType( async ()=> {}, 'object', 'async', 'function', ), true, );
	assertBe( withType( class {}, 'object', 'class', ), true, );
	assertBe( withType( class {}, 'object', ), true, );
	assertBe( withType( class {}, 'class', ), true, );
	assertBe( withType( function *(){}, 'object', 'generatorfunction', 'function', ), true, );
	assertBe( withType( function *(){}, 'object', ), true, );
	assertBe( withType( function *(){}, 'generatorfunction', ), true, );
	assertBe( withType( function *(){}, 'function', ), true, );
	assertBe( withType( async function *(){}, 'object', 'async', 'generatorfunction', 'function', ), true, );
	assertBe( withType( async function *(){}, 'object', ), true, );
	assertBe( withType( async function *(){}, 'async', ), true, );
	assertBe( withType( async function *(){}, 'generatorfunction', ), true, );
	assertBe( withType( async function *(){}, 'function', ), true, );
	assertBe( withType( (function *(){})(), 'object', 'generator', ), true, );
	assertBe( withType( (function *(){})(), 'object', ), true, );
	assertBe( withType( (function *(){})(), 'generator', ), true, );
	assertBe( withType( (async function *(){})(), 'object', 'async', 'generator', ), true, );
	assertBe( withType( (async function *(){})(), 'object', ), true, );
	assertBe( withType( (async function *(){})(), 'async', ), true, );
	assertBe( withType( (async function *(){})(), 'generator', ), true, );
	assertBe( withType( (async ()=> {})(), 'object', 'promise', ), true, );
	assertBe( withType( (async ()=> {})(), 'object', ), true, );
	assertBe( withType( (async ()=> {})(), 'promise', ), true, );
}, );
