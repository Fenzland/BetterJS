import '../global-constructors.ts';

declare global
{
	interface GeneratorFunctionConstructor
	{
		toIterator( value:any, ):Iterator<any>;
	}
}

const toIterator= ( value:any, )=>
	value === null || value === undefined? [][Symbol.iterator]():
	value instanceof GeneratorFunction? value():
	value[Symbol.iterator]? value[Symbol.iterator]():
	[ value, ][Symbol.iterator]()
;

Reflect.defineProperty( GeneratorFunction, 'toIterator', { value:toIterator, }, );
