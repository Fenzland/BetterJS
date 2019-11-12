import './function/isXXX.js';
import './global-constructors.js';

const betterType= ( value, type, )=>
	value === null? 'null':
	type === 'function'? (
		value.constructor === AsyncFunction? (
			Function.isClass( value, )? 'async_class':
			'async_function'
		):
		value.constructor === GeneratorFunction? 'generator_function':
		value.constructor === AsyncGeneratorFunction? 'async_generator_function':
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
		value.constructor.constructor? (
			value.constructor.constructor === AsyncFunction? 'async_object':
			value.constructor.constructor === GeneratorFunction? 'generator':
			value.constructor.constructor === AsyncGeneratorFunction? 'async_generator':
			'object'
		):
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
