
/**
 * Get a value from Map or WeakMap, if not has, 
 * generate the value from callback and set into the Map or WeakMap.
 */

Reflect.defineProperty( Map.prototype, 'getOrSet', {
	value( key, generator, ){
		if( this.has( key, ) )
			return this.get( key, );
		else
			return this.set( key, generator(), );
	},
}, );

Reflect.defineProperty( WeakMap.prototype, 'getOrSet', {
	value( key, generator, ){
		if( this.has( key, ) )
			return this.get( key, );
		else
			return this.set( key, generator(), );
	},
}, );

