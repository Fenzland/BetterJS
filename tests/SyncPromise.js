import { test, } from './Robberfly.js';
import '../src/SyncPromise.js';

test( 'SyncPromise.global', ( { assertBe, assertClass, }, )=> {
	assertClass( globalThis.SyncPromise, );
	assertBe( globalThis.SyncPromise.length, 1, );
}, );

test( 'SyncPromise.resolved', async ( { assertBe, assertInstanceOf, assertRun, assertNotThrow, }, )=> {
	const sp= new SyncPromise( ()=> 168n, );
	
	assertInstanceOf( sp, SyncPromise, );
	
	const runThen= assertRun();
	const runThenSecond= assertRun();
	const runCatch= assertRun();
	const runFinally= assertRun();
	
	sp.then( value=> {
		runThen.run();
		assertBe( value, 168n, );
	}, ()=> {
		runThenSecond.run();
	}, );
	
	sp.catch( ()=> {
		runCatch.run();
	}, );
	
	sp.finally( ()=> {
		runFinally.run();
	}, );
	
	await assertNotThrow( async ()=> sp, );
	
	assertInstanceOf( sp.then( 1, 2, ), SyncPromise, );
	assertBe( await sp.then( 1, 2, ), 168n, );
	
	runThen.assert();
	runThenSecond.assert( 0, );
	runCatch.assert( 0, );
	runFinally.assert();
}, );

test( 'SyncPromise.rejected', async ( { assertBe, assertInstanceOf, assertRun, assertThrow, }, )=> {
	const sp= new SyncPromise( ()=> { throw 'ouch'; }, );
	
	assertInstanceOf( sp, SyncPromise, );
	
	const runThen= assertRun();
	const runThenSecond= assertRun();
	const runCatch= assertRun();
	const runFinally= assertRun();
	
	sp.then( ()=> {
		runThen.run();
	}, reason=> {
		runThenSecond.run();
		assertBe( reason, 'ouch', );
	}, );
	
	sp.catch( reason=> {
		runCatch.run();
		assertBe( reason, 'ouch', );
	}, );
	
	sp.finally( ()=> {
		runFinally.run();
	}, ).catch( ()=> {}, );
	
	await assertThrow( 'ouch', async ()=> sp, );
	
	runThen.assert( 0, );
	runThenSecond.assert();
	runCatch.assert();
	runFinally.assert();
}, );

test( 'SyncPromise.async.resolved', async ( { assertBe, assertInstanceOf, assertRun, assertNotThrow, }, )=> {
	const sp= new SyncPromise( async ()=> 168n, );
	
	assertInstanceOf( sp, Promise, );
	
	const runThen= assertRun();
	const runThenSecond= assertRun();
	const runCatch= assertRun();
	const runFinally= assertRun();
	
	sp.then( value=> {
		runThen.run();
		assertBe( value, 168n, );
	}, ()=> {
		runThenSecond.run();
	}, );
	
	sp.catch( ()=> {
		runCatch.run();
	}, );
	
	sp.finally( ()=> {
		runFinally.run();
	}, );
	
	await assertNotThrow( async ()=> sp, );
	
	await sp;
	
	runThen.assert();
	runThenSecond.assert( 0, );
	runCatch.assert( 0, );
	runFinally.assert();
}, );

test( 'SyncPromise.async.rejected', async ( { assertBe, assertInstanceOf, assertRun, assertThrow, }, )=> {
	const sp= new SyncPromise( ()=> Promise.reject( 'ouch', ), );
	
	assertInstanceOf( sp, Promise, );
	
	const runThen= assertRun();
	const runThenSecond= assertRun();
	const runCatch= assertRun();
	const runFinally= assertRun();
	
	sp.then( ()=> {
		runThen.run();
	}, reason=> {
		runThenSecond.run();
		assertBe( reason, 'ouch', );
	}, );
	
	sp.catch( reason=> {
		runCatch.run();
		assertBe( reason, 'ouch', );
	}, );
	
	sp.finally( ()=> {
		runFinally.run();
	}, ).catch( ()=> {}, );
	
	await assertThrow( 'ouch', async ()=> sp, );
	
	await sp.catch( ()=> {}, );
	
	runThen.assert( 0, );
	runThenSecond.assert();
	runCatch.assert();
	runFinally.assert();
}, );
