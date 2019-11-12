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
		value instanceof Map? 'map':
		value instanceof Set? 'set':
		value instanceof WeakMap? 'weak_map':
		value instanceof WeakSet? 'weak_set':
		globalThis.WeakRef && value instanceof WeakRef? 'weak_ref':
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
