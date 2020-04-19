import { test, } from '../Robberfly.js';
import '../../src/array-prototype/finding.js';

test( '{Array}.findLastIndex', ( { assertBe, }, )=> {
	const array= [ 1, 2, 3, 4, 3, 2.1, 1, ];
	
	assertBe( array.findLastIndex( x=> x > 2, ), 5, );
	assertBe( array.findLastIndex( x=> x < 0, ), -1, );
}, );

test( '{Array}.findLastIndex', ( { assertBe, }, )=> {
	const array= [ 1, 2, 3, 4, 3, 2.1, 1, ];
	
	assertBe( array.findLast( x=> x > 2, ), 2.1, );
	assertBe( array.findLast( x=> x < 0, ), undefined, );
}, );

test( '{Array}.idxOf', ( { assertBe, }, )=> {
	const array= [ 1, 2, 3, 4, 3, 2.1, 1, ];
	
	assertBe( array.idxOf( 3, ), 2, );
	assertBe( array.idxOf( -3, ), undefined, );
}, );

test( '{Array}.lastIdxOf', ( { assertBe, }, )=> {
	const array= [ 1, 2, 3, 4, 3, 2.1, 1, ];
	
	assertBe( array.lastIdxOf( 3, ), 4, );
	assertBe( array.lastIdxOf( -3, ), undefined, );
}, );

test( '{Array}.findIdx', ( { assertBe, }, )=> {
	const array= [ 1, 2, 3, 4, 3, 2.1, 1, ];
	
	assertBe( array.findIdx( x=> x > 2, ), 2, );
	assertBe( array.findIdx( x=> x < 0, ), undefined, );
	assertBe( array.findIdx( x=> x > 2? -1: false, ), 1, );
	assertBe( array.findIdx( x=> x > 2? 3: false, ), 5, );
	assertBe( array.findIdx( x=> x > 2? 0: false, ), 2, );
	assertBe( array.findIdx( x=> x > 2? -9: false, ), 0, );
	assertBe( array.findIdx( x=> x > 2? 8: false, ), 6, );
}, );

test( '{Array}.findLastIdx', ( { assertBe, }, )=> {
	const array= [ 1, 2, 3, 4, 3, 2.1, 1, ];
	
	assertBe( array.findLastIdx( x=> x > 2, ), 5, );
	assertBe( array.findLastIdx( x=> x < 0, ), undefined, );
	assertBe( array.findLastIdx( x=> x > 2? -1: false, ), 4, );
	assertBe( array.findLastIdx( x=> x > 2? 1: false, ), 6, );
	assertBe( array.findLastIdx( x=> x > 2? 0: false, ), 5, );
	assertBe( array.findLastIdx( x=> x > 2? 8: false, ), 6, );
	assertBe( array.findLastIdx( x=> x > 2? -8: false, ), 0, );
}, );

test( '{Array}.seek', ( { assertBe, }, )=> {
	const array= [ 1, 2, 3, 4, 3, 2.1, 1, ];
	
	assertBe( array.seek( x=> x > 2, 8, ), 3, );
	assertBe( array.seek( x=> x < 0, 8, ), 8, );
}, );

test( '{Array}.seekLast', ( { assertBe, }, )=> {
	const array= [ 1, 2, 3, 4, 3, 2.1, 1, ];
	
	assertBe( array.seekLast( x=> x > 2, 8, ), 2.1, );
	assertBe( array.seekLast( x=> x < 0, 8, ), 8, );
}, );

test( '{Array}.dig', ( { assertBe, }, )=> {
	const array= [ 1, 2, 3, 4, 3, 2.1, 1, ];
	
	assertBe( array.dig( x=> x >= 2? x - 2: undefined, ), 0, );
	assertBe( array.dig( x=> x > 8? x - 2: undefined, ), undefined, );
	assertBe( array.dig( x=> x > 8? x - 2: 8, ), 8, );
	assertBe( array.dig( x=> x < 0, 8, ), false, );
}, );

test( '{Array}.digLast', ( { assertBe, }, )=> {
	const array= [ 1, 2, 3, 4, 3, 2.1, 1, ];
	
	assertBe( array.digLast( x=> x >= 2? x - 2: undefined, ), 2.1 - 2, );
	assertBe( array.digLast( x=> x > 8? x - 2: undefined, ), undefined, );
	assertBe( array.digLast( x=> x > 8? x - 2: 8, ), 8, );
	assertBe( array.digLast( x=> x < 0, 8, ), false, );
}, );
