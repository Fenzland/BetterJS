import './haveOwnProperty.ts';

declare global
{
	interface ObjectConstructor
	{
		deeplyGet( object:object, keys:(string|number)[], ):any;
		deeplySet<T>( object:object, keys:(string|number)[], value:T, ):T;
	}
}

/**
 * deeply get a item from nesting objects
 * 
 * @param object {Object}
 * @param keys   []<(string)|(number)>
 * 
 * @return <any>
 */
Reflect.defineProperty( Object, 'deeplyGet', { value:deeplyGet, }, );

/**
 * deeply set a item into nesting objects, if nesting object not exists, create it. A number key will create an array. 
 * 
 * @param object {Object}
 * @param keys   []<(string)|(number)>
 * @param value  <any>
 * 
 * @return <any>
 */
Reflect.defineProperty( Object, 'deeplySet', { value:deeplySet, }, );

function deeplyGet( object:object, [ ...keys ]:(string|number)[], ):any
{
	const currentKey:(string|number)= keys.shift();
	
	if( Object.haveOwnProperty( object, currentKey, ) )
		return undefined;
	
	const currentValue:any= currentKey? object[currentKey]: object;
	
	if( keys.length && currentValue )
		return deeplyGet( currentValue, keys, );
	else
		return currentValue;
}

function deeplySet<T>( object:object, [ ...keys ]:(string|number)[], value:T, ):T
{
	const currentKey:(string|number)= keys.shift();
	
	if(!( keys.length ))
		return object[currentKey]= value;
	
	if(!( Object.haveOwnProperty( object, currentKey, ) ))
	{
		const nextKey:(string|number)= keys[0];
		
		const nextObject:(object|Array<any>)= object[currentKey]=
			typeof nextKey === 'number' || <any>nextKey instanceof Number? []: {}
		;
		
		return deeplySet( nextObject, keys, value, );
	}
	
	return deeplySet( object[currentKey], keys, value, );
}
