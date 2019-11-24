import { test, } from '../Robberfly.js';
import '../../src/object/deeplyAssign.js';

test( 'Object.deeplyAssign', ( { assertBe, assertAs, }, )=> {
	const foo= {
		foo: {
			bar: {
				baz: 1,
			},
		},
	};
	const bar= {
		foo: {
			foo: {
				foo: 0,
			},
			bar: {
				baz: 2,
			}
		},
	};
	
	const target= {};
	const result= Object.deeplyAssign( target, bar, foo, );
	
	assertBe( result, target, );
	assertAs( target, {
		foo: {
			foo: {
				foo: 0,
			},
			bar: {
				baz: 1,
			},
		},
	}, );
}, );

test( 'Object.deeplyAssign with circular reference', ( { assertBe, assertNotBe, }, )=> {
	const foo= {};
	const bar= {};
	const source= {};
	
	foo.foo= foo;
	foo.bar= bar;
	bar.foo= foo;
	bar.bar= bar;
	source.foo= foo;
	source.bar= bar;
	source.self= source;
	
	const target= {};
	const result= Object.deeplyAssign( target, source, );
	
	assertBe( result, target, );
	assertBe( target.self, target, );
	assertBe( target.foo.foo, target.foo, );
	assertBe( target.bar.foo, target.foo, );
	assertBe( target.foo.bar, target.bar, );
	assertBe( target.bar.bar, target.bar, );
	
	assertNotBe( target.self, source, );
	assertNotBe( target.foo, foo, );
	assertNotBe( target.bar, bar, );
	
	delete foo.foo;
	delete foo.bar;
	delete bar.foo;
	delete bar.bar;
	delete source.foo;
	delete source.bar;
	delete source.self;
	
	assertBe( result, target, );
	assertBe( target.self, target, );
	assertBe( target.foo.foo, target.foo, );
	assertBe( target.bar.foo, target.foo, );
	assertBe( target.foo.bar, target.bar, );
	assertBe( target.bar.bar, target.bar, );
	
	assertNotBe( target.self, source, );
	assertNotBe( target.foo, foo, );
	assertNotBe( target.bar, bar, );
}, );
