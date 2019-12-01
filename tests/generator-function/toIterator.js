import { test, } from '../Robberfly.js';
import '../../src/generator-function/toIterator.js';

test( 'GeneratorFunction.toIterator', async ( { assertBe, assertAs, assertFunction, assertRun, }, )=> {
	const { toIterator, }= GeneratorFunction;
	
	const fromGeneratorFunction= toIterator( function *(){ yield* [ 0, 1, 2, ]; }, );
	const fromIterableObject= toIterator( { *[Symbol.iterator](){ yield* [ 0, 1, 2, ]; }, }, );
	const fromArray= toIterator( [ 0, 1, 2, ], );
	const fromString= toIterator( '012', );
	const fromScalar= toIterator( 0, );
	const fromUndefined= toIterator( undefined, );
	
	assertFunction( fromGeneratorFunction.next, );
	assertFunction( fromIterableObject.next, );
	assertFunction( fromArray.next, );
	assertFunction( fromString.next, );
	assertFunction( fromScalar.next, );
	assertFunction( fromUndefined.next, );
	
	assertFunction( fromGeneratorFunction[Symbol.iterator], );
	assertFunction( fromIterableObject[Symbol.iterator], );
	assertFunction( fromArray[Symbol.iterator], );
	assertFunction( fromString[Symbol.iterator], );
	assertFunction( fromScalar[Symbol.iterator], );
	assertFunction( fromUndefined[Symbol.iterator], );
	
	assertAs( [ ...fromGeneratorFunction, ], [ 0, 1, 2, ], );
	assertAs( [ ...fromIterableObject, ], [ 0, 1, 2, ], );
	assertAs( [ ...fromArray, ], [ 0, 1, 2, ], );
	assertAs( [ ...fromString, ], [ '0', '1', '2', ], );
	assertAs( [ ...fromScalar, ], [ 0, ], );
	assertAs( [ ...fromUndefined, ], [], );
}, );
