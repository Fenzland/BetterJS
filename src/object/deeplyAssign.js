import './isObject-and-isPureObject.js';
import '../map-and-set/getOrSet.js';

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
		if(!( Object.isObject( target, ) ))
			target= Object.assign( target, );
		
		const cache= new WeakMap();
		
		for( const source of sources )
		{
			if(!( Object.isObject( source, ) ))
				continue;
			
			cache.set( source, target, );
			
			assign( cache, target, source, );
		}
		
		return target;
	},
}, );

function assign( cache, target, source, )
{
	for( const [ key, value, ] of Object.entries( source, ) )
		if( Object.isObject( value, ) )
			target[key]= cache.getOrSet( value, ()=> initFor( value, target[key], ), target=> assign( cache, target, value, ), );
		else
			target[key]= value;
	
	return target;
}

function initFor( model, target, )
{
	if( Array.isArray( model, ) )
		return Array.isArray( target, )? target: [];
	else
		return Object.isObject( target, )? target: {};
}
