import './haveOwnProperty.js';

/**
 * deeply get a item from nesting objects
 * 
 * @param object {Object}
 * @param keys   [](string)
 * 
 * @return <any>
 */
Reflect.defineProperty( Object, 'deeplyGet', { value:deeplyGet, }, );

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
