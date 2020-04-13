import '../../utils/fix_module.ts';

declare global
{
	interface Map<K,V>
	{
		getOrSet<K,V>( key:K, generator:(()=>V), ):V;
	}
	
	interface WeakMap<K,V>
	{
		getOrSet<K,V>( key:K, generator:(()=>V), ):V;
	}
}

/**
 * Get a value from Map or WeakMap, if not has, 
 * generate the value from callback and set into the Map or WeakMap.
 */

Reflect.defineProperty( Map.prototype, 'getOrSet', {
	value<K,V>( key:K, generator:(()=>V), ):V{
		if( this.has( key, ) )
			return this.get( key, );
		else
			return this.set( key, generator(), );
	},
}, );

Reflect.defineProperty( WeakMap.prototype, 'getOrSet', {
	value<K,V>( key:K, generator:(()=>V), ):V{
		if( this.has( key, ) )
			return this.get( key, );
		else
			return this.set( key, generator(), );
	},
}, );

