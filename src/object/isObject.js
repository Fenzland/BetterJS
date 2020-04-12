
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
