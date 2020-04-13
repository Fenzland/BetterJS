import '../../utils/fix_module.ts';

declare global
{
	interface Map<K,V>
	{
		pop<K,V>( key:K, generator:(()=>V), ):V;
	}
	
	interface WeakMap<K,V>
	{
		pop<K,V>( key:K, generator:(()=>V), ):V;
	}
}

Reflect.defineProperty( Map.prototype, 'pop', {
	value<K,V>( key:K, generator:(()=>V), ):V{
		if( this.has( key, ) )
		{
			const value:V= this.get( key, );
			
			this.delete( key, );
			
			return value;
		}
		else
			return undefined;
	},
}, );

Reflect.defineProperty( WeakMap.prototype, 'pop', {
	value<K,V>( key:K, generator:(()=>V), ):V{
		if( this.has( key, ) )
		{
			const value:V= this.get( key, );
			
			this.delete( key, );
			
			return value;
		}
		else
			return undefined;
	},
}, );
