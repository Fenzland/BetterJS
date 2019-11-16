
/**
 * check wheather a value is an object
 * 
 * @param  value <mixed>
 * 
 * @return (boolean)
 */
Reflect.defineProperty( Object, 'isObject', {
	value: value=> (typeof value === 'object' && value !== null) || typeof value === 'function',
}, );

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
		value.constructor === Object
	&&
		Reflect.getPrototypeOf( value, ) === Object.prototype
	),
}, );
