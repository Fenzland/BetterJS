import './function/isXXX.js';
import './global-constructors.js';

const typeLabel= ( value, type, )=>
	value === null? 'null':
	type === 'function'? (
		value.constructor === AsyncFunction? (
			Function.isClass( value, )? 'object:async:class':
			'object:async:function'
		):
		value.constructor === GeneratorFunction? 'object:generatorfunction:function':
		value.constructor === AsyncGeneratorFunction? 'object:async:generatorfunction:function':
		Function.isClass( value, )? 'object:class':
		'object:function'
	):
	type === 'object'? (
		value instanceof Boolean? 'object:boolean':
		value instanceof String? 'object:string':
		value instanceof Number? 'object:number':
		value instanceof BigInt? 'object:bigint':
		value instanceof Symbol? 'object:symbol':
		value instanceof RegExp? 'object:regexp':
		value instanceof Promise? 'object:promise':
		Array.isArray( value, )? 'object:array':
		value instanceof Map? 'object:map':
		value instanceof Set? 'object:set':
		value instanceof WeakMap? 'object:weakmap':
		value instanceof WeakSet? 'object:weakset':
		globalThis.WeakRef && value instanceof WeakRef? 'object:weakref':
		value.constructor.constructor? (
			value.constructor.constructor === AsyncFunction? 'object:promise':
			value.constructor.constructor === GeneratorFunction? 'object:generator':
			value.constructor.constructor === AsyncGeneratorFunction? 'object:async:generator':
			'object'
		):
		'object'
	):
	type
;

/**
 * function instead of typeof
 */
Reflect.defineProperty( globalThis, 'typeOf', { value: value=> typeLabel( value, typeof value, ), }, );
