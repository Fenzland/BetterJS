
/**
 * check wheather a value is a primitive value
 * 
 * @param  value <mixed>
 * 
 * @return (boolean)
 */
Reflect.defineProperty( Object, 'isPrimitive', {
	value: value=> Object (value) !== value,
}, );
