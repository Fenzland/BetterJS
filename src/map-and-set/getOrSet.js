import '../object/isPrimitive.js';

/**
 * Get a value from Map or WeakMap, if not has, 
 * generate the value from callback and set into the Map or WeakMap.
 */

Reflect.defineProperty( Map.prototype, 'getOrSet', {
	value( key, generator, afterSetting=undefined, ){
		if( this.has( key, ) )
			return this.get( key, );
		else
		{
			const value= generator();
			
			this.set( key, value, );
			
			if( afterSetting )
				afterSetting( value, );
			
			return value;
		}
	},
}, );

Reflect.defineProperty( WeakMap.prototype, 'getOrSet', {
	value( key, generator, afterSetting=undefined, ){
		if( this.has( key, ) )
			return this.get( key, );
		else
		{
			const value= generator();
			
			if( Object.isPrimitive( key, ) )
				return value;
			
			this.set( key, value, );
			
			if( afterSetting )
				afterSetting( value, );
			
			return value;
		}
	},
}, );

