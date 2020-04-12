import './isObject.js';

/**
 * check wheather a value is an pure object (with constructor Object, and with prototype Object.prototype)
 * 
 * @param  value <mixed>
 * 
 * @return (boolean)
 */
Reflect.defineProperty( Object, 'isPureObject', {
	value: value=> (
		Object.isObject( value, )
	&&
		new Set( [ Object, undefined, null, ], ).has( value.constructor, )
	&&
		new Set( [ Object.prototype, undefined, null, ] ).has( Reflect.getPrototypeOf( value, ), )
	),
}, );
