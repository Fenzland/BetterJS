
/**
 * deeply version of Object.assign
 * 
 * @param target     {Object}
 * @param ...sources []{Object}
 * 
 * @return {Object}
 */
Reflect.defineProperty( Object, 'deeplyAssign', {
	value( target, ...sources ){
		if(!( isObject( target, ) ))
			target= Object.assign( target, );
		
		for( const source of sources )
		{
			if(!( isObject( source, ) ))
				return;
			
			for( const [ key, value, ] of Object.entries( source, ) )
			{
				if(!( isObject( value, ) ))
					target[key]= value;
				else
				if( value instanceof Function )
					target[key]= value;
				else
				if( Array.isArray( value, ) )
					target[key]= Object.deeplyAssign( Array.isArray( target[key], )? target[key]: [], value, );
				else
					target[key]= Object.deeplyAssign( isObject( target[key], )? target[key]: {}, value, );
			}
		}
		
		return target;
	},
}, );

function isObject( value, )
{
	return [ 'object', 'function', ].includes( typeof value, ) && value;
}
