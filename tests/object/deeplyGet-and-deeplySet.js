import { test, } from '../Robberfly.js';
import '../../src/object/deeplyGet-and-deeplySet.js';

test( 'Object.deeplyGet', ( { assertBe, assertAs, }, )=> {
	const object= {
		foo: {
			bar: {
				baz: 1,
			},
		},
	};
	
	assertBe( Object.deeplyGet( object, [ 'foo', 'bar', 'baz', ], ), 1, );
	assertBe( Object.deeplyGet( object, [ 'foo', 'foo', 'foo', ], ), undefined, );
	assertBe( Object.deeplyGet( object, [ 'foo', 'bar', 'baz', 'qux', ], ), undefined, );
	assertAs( Object.deeplyGet( object, [ 'foo', 'bar', ], ), { baz:1 }, );
	
	assertBe( Object.deeplyGet( object, [ 'foo', 'toString', ], ), undefined, );
	assertBe( Object.deeplyGet( object, [ 'foo', '__proto__', ], ), undefined, );
	assertBe( Object.deeplyGet( object, [ 'foo', 'constructor', ], ), undefined, );
}, );

test( 'Object.deeplySet', ( { assertBe, assertAs, }, )=> {
	const foo= {};
	
	assertBe( Object.deeplySet( foo, [ 'foo', '1', 'bar', ], 1, ), 1, );
	assertAs( foo, { foo:{ 1:{ bar:1, }, }, }, );
	
	const bar= {};
	
	assertBe( Object.deeplySet( bar, [ 'foo', 1, 'bar', ], 3, ), 3, );
	assertAs( bar, { foo:[ undefined, { bar:3, }, ], }, );
}, );
