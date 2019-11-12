
/**
 * function instead of typeof
 * 
 * "array" for arraies
 * "null" for nulls
 * "class" for class
 */
Reflect.defineProperty( globalThis, 'getType', { value: value=>
	value === null? 'null':
	Array.isArray( value, )? 'array':
	Function.isClass( value, )? 'class':
	typeof value
, }, );
