import '../../utils/fix_module.ts';

declare global
{
	interface ObjectConstructor
	{
		isObject( value:any, ):boolean;
		isPureObject( value:any, ):boolean;
	}
}

/**
 * check wheather a value is an object
 * 
 * @param  value <mixed>
 * 
 * @return (boolean)
 */
Reflect.defineProperty( Object, 'isObject', {
	value: ( value:any, ):boolean=> typeof value === 'object' && value !== null,
}, );

/**
 * check wheather a value is an pure object (with constructor Object, and with prototype Object.prototype)
 * 
 * @param  value <mixed>
 * 
 * @return (boolean)
 */
Reflect.defineProperty( Object, 'isPureObject', {
	value: ( value:any, ):boolean=> (
		Object.isObject( value, )
	&&
		value.constructor === Object
	&&
		Reflect.getPrototypeOf( value, ) === Object.prototype
	),
}, );
