import '../global-constructors.js';

const toIterator= value=>
	value === null || value === undefined? [][Symbol.iterator]():
	value instanceof GeneratorFunction? value():
	value[Symbol.iterator]? value[Symbol.iterator]():
	[ value, ][Symbol.iterator]()
;

Reflect.defineProperty( GeneratorFunction, 'toIterator', { value:toIterator, }, );
