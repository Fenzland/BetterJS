import '../../utils/fix_module.ts';

declare global
{
	interface Map<K,V>
	{
		set<K,V>( key:K, value:V, ):V;
	}
	
	interface WeakMap<K,V>
	{
		set<K,V>( key:K, value:V, ):V;
	}
	
	interface Set<T>
	{
		add<T>( value:T, ):T;
	}
	
	interface WeakSet<T>
	{
		add<T>( value:T, ):T;
	}
}

/**
 * @break-changes
 * 
 * Let set() of Map and WeakMap, add() of Set and WeakSet return the given value.
 */
{
	const origin= Map.prototype.set;
	
	Reflect.defineProperty( Map.prototype, 'set', {
		value<K,V>( key:K, value:V, ):V{
			origin.call( this, key, value, );
			
			return value;
		},
	}, );
}
{
	const origin= WeakMap.prototype.set;
	
	Reflect.defineProperty( WeakMap.prototype, 'set', {
		value<K,V>( key:K, value:V, ):V{
			origin.call( this, key, value, );
			
			return value;
		},
	}, );
}
{
	const origin= Set.prototype.add;
	
	Reflect.defineProperty( Set.prototype, 'add', {
		value<T>( value:T, ):T{
			origin.call( this, value, );
			
			return value;
		},
	}, );
}
{
	const origin= WeakSet.prototype.add;
	
	Reflect.defineProperty( WeakSet.prototype, 'add', {
		value<T>( value:T, ):T{
			origin.call( this, value, );
			
			return value;
		},
	}, );
}
