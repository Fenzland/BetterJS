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
	assertBe( array.idxOf( -3, ), NaN, );
}, );

test( '{Array}.lastIdxOf', ( { assertBe, }, )=> {
	const array= [ 1, 2, 3, 4, 3, 2.1, 1, ];
	
	assertBe( array.lastIdxOf( 3, ), 4, );
	assertBe( array.lastIdxOf( -3, ), NaN, );
}, );

test( '{Array}.findIdx', ( { assertBe, }, )=> {
	const array= [ 1, 2, 3, 4, 3, 2.1, 1, ];
	
	assertBe( array.findIdx( x=> x > 2, ), 2, );
	assertBe( array.findIdx( x=> x < 0, ), NaN, );
}, );

test( '{Array}.findLastIdx', ( { assertBe, }, )=> {
	const array= [ 1, 2, 3, 4, 3, 2.1, 1, ];
	
	assertBe( array.findLastIdx( x=> x > 2, ), 5, );
	assertBe( array.findLastIdx( x=> x < 0, ), NaN, );
}, );
