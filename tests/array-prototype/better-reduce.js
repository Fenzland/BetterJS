import { test, } from '../Robberfly.js';
import '../../src/array-prototype/better-reduce.js';

test( 'better {Array}.reduce', ( { assertBe, assertRun, }, )=> {
	const array= [ 'foo', 'bar', 'baz', ];
	
	const runLoop= assertRun();
	let times= 0;
	
	array.reduce( ( payload, item, index, arr, )=> {
		runLoop.run();
		
		if( times++ === 0 )
		{
			assertBe( payload, undefined, );
			assertBe( item, 'foo', );
			assertBe( index, 0, );
			assertBe( arr, array, );
		}
	}, );
	
	runLoop.assert( 3, );
	
	times= 0;
	
	array.reduce( ( payload, item, index, arr, )=> {
		
		if( times++ === 0 )
			assertBe( payload, Infinity, );
		
	}, Infinity, );
}, );

test( 'better {Array}.reduce with push', ( { assertBe, assertRun, }, )=> {
	const array= [ 0, ];
	
	const runLoop= assertRun();
	let times= 0;
	
	const sum= array.reduce( ( sum, item, index, arr, )=> {
		runLoop.run();
		
		if( item < 8 )
			arr.push( item - - 1, );
		
		if( times++ === 0 )
		{
			assertBe( sum, 0, );
			assertBe( item, 0, );
			assertBe( index, 0, );
			assertBe( arr, array, );
		}
		
		return sum - - item;
	}, 0, );
	
	runLoop.assert( 9, );
	assertBe( sum, 36, )
}, );
