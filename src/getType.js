import './function/isXXX.js';

const betterType= ( value, type, )=>
	value === null? 'null':
	type === 'function'? (
		Function.isClass( value, )? 'class':
		'function'
	):
	type === 'object'? (
		value instanceof Promise? 'promise':
		Array.isArray( value, )? 'array':
		'object'
	):
	type
;

/**
 * function instead of typeof
 * 
 * "array" for arraies
 * "null" for nulls
 * "class" for class
 */
Reflect.defineProperty( globalThis, 'getType', { value: value=> betterType( value, typeof value, ), }, );
