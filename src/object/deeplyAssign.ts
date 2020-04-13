import '../instanceof-types.ts';

declare global
{
	interface ObjectConstructor
	{
		deeplyAssign( target:object, ...sources:object[] ):object;
	}
}

/**
 * deeply version of Object.assign
 * 
 * @param target     {Object}
 * @param ...sources []{Object}
 * 
 * @return {Object}
 */
Reflect.defineProperty( Object, 'deeplyAssign', {
	value( target:object, ...sources:object[] ):object{
		if(!( target instanceof Object ))
			target= Object.assign( target, );
		
		for( const source of sources )
		{
			if(!( source instanceof Object ))
				return;
			
			for( const [ key, value, ] of Object.entries( source, ) )
			{
				if(!( value instanceof Object ))
					target[key]= value;
				else
				if( value instanceof Function )
					target[key]= value;
				else
				if( value instanceof Array )
					target[key]= Object.deeplyAssign( [], value, );
				else
					target[key]= Object.deeplyAssign( {}, value, );
			}
		}
		
		return target;
	},
}, );
