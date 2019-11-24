import { test, } from '../Robberfly.js';
import '../../src/event-target-prototype/listener-control.js';

test( 'listener-control', ( { assertBe, assertRun, }, )=> {
	const target= new EventTarget();
	const eventFoo= new Event( 'event-foo', );
	const eventBar= new Event( 'event-bar', );
	
	const runFoo= assertRun();
	const runBar= assertRun();
	
	const foo= event=> {
		runFoo.run();
		
		assertBe( event, eventFoo, );
	};
	
	const bar= event=> {
		runBar.run();
		
		assertBe( event, eventBar, );
	};
	
	assertBe( target.addEventListener( 'event-foo', foo, ), foo, );
	assertBe( target.addEventListener( 'event-bar', bar, ), bar, );
	
	target.dispatchEvent( eventFoo, );
	target.dispatchEvent( eventBar, );
	
	target.removeEventListenersByType( 'event-foo', );
	
	target.dispatchEvent( eventFoo, );
	target.dispatchEvent( eventBar, );
	
	target.removeAllEventListeners( 'event-foo', );
	
	target.dispatchEvent( eventFoo, );
	target.dispatchEvent( eventBar, );
	
	runFoo.assert( 1, );
	runBar.assert( 2, );
}, );
