import { test, } from '../Robberfly.js';
import '../../src/map-and-set/getOrSet.js';

test( '{Map}.getOrSet', ( { assertBe, assertAs, assertRun, }, )=> {
	const map= new Map();
	const first= assertRun();
	const second= assertRun();
	
	const foo= map.getOrSet( 'key', ()=> {
		first.run();
		
		return 'foo';
	}, );
	
	const bar= map.getOrSet( 'key', ()=> {
		second.run();
		
		return 'bar'
	}, );
	
	assertAs( map, new Map( [ [ 'key', 'foo', ], ], ), );
	assertBe( foo, 'foo', );
	assertBe( bar, 'foo', );
	
	first.assert( 1, );
	second.assert( 0, );
}, );

test( '{Map}.getOrSet with afterSetting', ( { assertBe, assertAs, assertRun, }, )=> {
	const map= new Map();
	const first= assertRun();
	const second= assertRun();
	
	const foo= map.getOrSet( 'key', ()=> 'foo', value=> {
		first.run();
		
		assertBe( value, 'foo', )
		
		return value.toUpperCase();
	}, );
	
	const bar= map.getOrSet( 'key', ()=> 'bar', value=> {
		second.run();
		
	}, );
	
	assertAs( map, new Map( [ [ 'key', 'foo', ], ], ), );
	assertBe( foo, 'foo', );
	assertBe( bar, 'foo', );
	
	first.assert( 1, );
	second.assert( 0, );
}, );

test( '{WeakMap}.getOrSet', ( { assertBe, assertRun, }, )=> {
	const map= new WeakMap();
	const first= assertRun();
	const second= assertRun();
	const third= assertRun();
	const fourth= assertRun();
	const key= {};
	const primitive= 'key';
	
	const foo= map.getOrSet( key, ()=> {
		first.run();
		
		return 'foo';
	}, );
	
	const bar= map.getOrSet( key, ()=> {
		second.run();
		
		return 'bar'
	}, );
	
	const baz= map.getOrSet( primitive, ()=> {
		third.run();
		
		return 'baz';
	}, );
	
	const qux= map.getOrSet( primitive, ()=> {
		fourth.run();
		
		return 'qux'
	}, );
	
	assertBe( map.has( key, ), true, );
	assertBe( map.get( key, ), 'foo', );
	assertBe( map.has( primitive, ), false, );
	assertBe( foo, 'foo', );
	assertBe( bar, 'foo', );
	assertBe( baz, 'baz', );
	assertBe( qux, 'qux', );
	
	first.assert( 1, );
	second.assert( 0, );
	third.assert( 1, );
	fourth.assert( 1, );
}, );

test( '{WeakMap}.getOrSet with afterSetting', ( { assertBe, assertRun, }, )=> {
	const map= new WeakMap();
	const first= assertRun();
	const second= assertRun();
	const third= assertRun();
	const fourth= assertRun();
	const key= {};
	const primitive= 'key';
	
	const foo= map.getOrSet( key, ()=> 'foo', value=> {
		first.run();
		
		assertBe( value, 'foo', )
		
		return value.toUpperCase();
	}, );
	
	const bar= map.getOrSet( key, ()=> 'bar', value=> {
		second.run();
	}, );
	
	const baz= map.getOrSet( primitive, ()=> 'baz', ()=> {
		third.run();
	}, );
	
	const qux= map.getOrSet( primitive, ()=> 'qux', ()=> {
		fourth.run();
	}, );
	
	assertBe( map.has( key, ), true, );
	assertBe( map.get( key, ), 'foo', );
	assertBe( foo, 'foo', );
	assertBe( bar, 'foo', );
	
	first.assert( 1, );
	second.assert( 0, );
	third.assert( 0, );
	fourth.assert( 0, );
}, );
