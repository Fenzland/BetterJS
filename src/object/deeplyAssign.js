
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
		if(!( typeof target === 'object' && target ))
			target= Object.assign( target, );
		
		for( let source of sources )
		{
			if(!( typeof source === 'object' && source ))
				return;
			
			for( let [ key, value, ] of Object.entries( source, ) )
			{
				if(!( typeof value === 'object' && value ))
					target[key]= value;
				else
				if( value instanceof Function )
					target[key]= value;
				else
				if( Array.isArray( value, ) )
					target[key]= deepAssign( [], value, );
				else
					target[key]= deepAssign( {}, value, );
			}
		}
		
		return target;
	},
}, );
