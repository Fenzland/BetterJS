import './haveOwnProperty.js';

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

function deeplyGet( object, [ ...keys ], )
{
	const currentKey= keys.shift();
	
	if(!( Object.haveOwnProperty( object, currentKey, ) ))
		return undefined;
	
	const currentValue= currentKey? object[currentKey]: object;
	
	if( keys.length && currentValue )
		return deeplyGet( currentValue, keys, );
	else
		return currentValue;
}

function deeplySet( object, [ ...keys ], value, )
{
	const currentKey= keys.shift();
	
	if(!( keys.length ))
		return object[currentKey]= value;
	
	if(!( Object.haveOwnProperty( object, currentKey, ) ))
	{
		const nextKey= keys[0];
		
		const nextObject= object[currentKey]=
			typeof nextKey === 'number' || nextKey instanceof Number? []: {}
		;
		
		return deeplySet( nextObject, keys, value, );
	}
	
	return deeplySet( object[currentKey], keys, value, );
}
