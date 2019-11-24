import { test, } from '../Robberfly.js';
import '../../src/fp/curry.js';

test( 'FP: {Function}.curry', async ( { assertBe, assertAs, assertFunction, }, )=> {
	const func= ( foo, bar, baz, qux, )=> [ foo, bar, baz, qux, ];
	
	const curried= func.curry();
	
	assertFunction( curried, );
	assertBe( curried.length, 4, );
	
	const callWith_0= curried();
	const callWith_1= curried( 0, );
	const callWith_2= curried( 0, 1, );
	const callWith_3= curried( 0, 1, 2, );
	const callWith_4= curried( 0, 1, 2, 3, );
	
	assertFunction( callWith_0, )
	assertBe( callWith_0.length, 4, );
	assertFunction( callWith_1, )
	assertBe( callWith_1.length, 3, );
	assertFunction( callWith_2, )
	assertBe( callWith_2.length, 2, );
	assertFunction( callWith_3, )
	assertBe( callWith_3.length, 1, );
	
	assertAs( callWith_0( 0, 1, 2, 3, ), [ 0, 1, 2, 3, ], );
	assertAs( callWith_1( 1, 2, 3, ), [ 0, 1, 2, 3, ], );
	assertAs( callWith_2( 2, 3, ), [ 0, 1, 2, 3, ], );
	assertAs( callWith_3( 3, ), [ 0, 1, 2, 3, ], );
	
	assertAs( callWith_4, [ 0, 1, 2, 3, ], );
	
	assertAs( callWith_0( 0, )( 1, )( 2, )( 3, ), [ 0, 1, 2, 3, ], );
	assertAs( callWith_1( 1, )( 2, )( 3, ), [ 0, 1, 2, 3, ], );
	assertAs( callWith_2( 2, )( 3, ), [ 0, 1, 2, 3, ], );
	assertAs( callWith_3( 3, ), [ 0, 1, 2, 3, ], );
}, );

test( 'FP: {Function}.yrruc', async ( { assertBe, assertAs, assertFunction, }, )=> {
	const func= ( foo, bar, baz, qux, )=> [ foo, bar, baz, qux, ];
	
	const yrruced= func.yrruc();
	
	assertFunction( yrruced, );
	assertBe( yrruced.length, 4, );
	
	const callWith_0= yrruced();
	const callWith_1= yrruced( 0, );
	const callWith_2= yrruced( 0, 1, );
	const callWith_3= yrruced( 0, 1, 2, );
	const callWith_4= yrruced( 0, 1, 2, 3, );
	
	assertFunction( callWith_0, )
	assertBe( callWith_0.length, 4, );
	assertFunction( callWith_1, )
	assertBe( callWith_1.length, 3, );
	assertFunction( callWith_2, )
	assertBe( callWith_2.length, 2, );
	assertFunction( callWith_3, )
	assertBe( callWith_3.length, 1, );
	
	assertAs( callWith_0( 0, 1, 2, 3, ), [ 0, 1, 2, 3, ], );
	assertAs( callWith_1( 1, 2, 3, ), [ 1, 2, 3, 0, ], );
	assertAs( callWith_2( 2, 3, ), [ 2, 3, 0, 1, ], );
	assertAs( callWith_3( 3, ), [ 3, 0, 1, 2, ], );
	
	assertAs( callWith_4, [ 0, 1, 2, 3, ], );
	
	assertAs( callWith_0( 0, )( 1, )( 2, )( 3, ), [ 3, 2, 1, 0, ], );
	assertAs( callWith_1( 1, )( 2, )( 3, ), [ 3, 2, 1, 0, ], );
	assertAs( callWith_2( 2, )( 3, ), [ 3, 2, 0, 1, ], );
	assertAs( callWith_3( 3, ), [ 3, 0, 1, 2, ], );
}, );

test( 'FP: mix using curry and yrruc', async ( { assertBe, assertAs, assertFunction, }, )=> {
	const func= ( foo, bar, baz, qux, )=> [ foo, bar, baz, qux, ];
	
	assertAs( func.curry( 0, 1, ).yrruc( 2, )( 3, ), [ 0, 1, 3, 2, ], );
	assertAs( func.curry( 0, ).yrruc( 1, 2, )( 3, ), [ 0, 3, 1, 2, ], );
	assertAs( func.curry( 0, ).yrruc( 1, )( 2, 3, ), [ 0, 2, 3, 1, ], );
	assertAs( func.curry( 0, ).yrruc( 1, )( 2, )( 3, ), [ 0, 3, 2, 1, ], );
	
	assertAs( func.yrruc( 0, 1, ).curry( 2, )( 3, ), [ 2, 3, 0, 1, ], );
	assertAs( func.yrruc( 0, ).curry( 1, 2, )( 3, ), [ 1, 2, 3, 0, ], );
	assertAs( func.yrruc( 0, ).curry( 1, )( 2, 3, ), [ 1, 2, 3, 0, ], );
	assertAs( func.yrruc( 0, ).curry( 1, )( 2, )( 3, ), [ 1, 2, 3, 0, ], );
}, );
