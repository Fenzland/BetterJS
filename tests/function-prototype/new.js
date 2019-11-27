import { test, } from '../Robberfly.js';
import '../../src/function-prototype/new.js';

test( '{Function}.new', async ( { assertBe, assertInstanceOf, assertRun, }, )=> {
	const runConstructor= assertRun();
	
	class Foo
	{
		constructor( foo, bar, )
		{
			runConstructor.run();
			
			assertBe( foo, 'foo', );
			assertBe( bar, 'bar', );
		}
	}
	
	assertInstanceOf( Foo.new, Function, );
	assertBe( Foo.new.length, Foo.length, );
	assertBe( Foo.new.name, 'Foo.new', );
	
	const foo= (Foo.new)( 'foo', 'bar', );
	
	runConstructor.assert();
	assertInstanceOf( foo, Foo, );
}, );
