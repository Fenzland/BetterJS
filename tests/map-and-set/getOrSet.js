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
