import '../../utils/fix_module.ts';

declare global
{
	interface Map<K,V>
	{
		map<K,V,R>( callback:(( value?:V, key?:K, self?:Map<K,V>, )=>R), ):Map<K,R>;
	}
	
	interface Set<T>
	{
		map<T,R>( callback:(( value?:T, key?:T, self?:Set<T>, )=>R), ):Set<R>;
	}
}

Reflect.defineProperty( Map.prototype, 'map', {
	value<K,V,R>( callback:(( value?:V, key?:K, self?:Map<K,V>, )=>R), ):Map<K,R>{
		const result:Map<K,R>= new Map();
		
		this.forEach( ( item:V, key:K, map:Map<K,V>, ):void=> void result.set( key, callback( item, key, map, ), ), );
		
		return result;
	},
}, );

Reflect.defineProperty( Set.prototype, 'map', {
	value<T,R>( callback:(( value?:T, key?:T, self?:Set<T>, )=>R), ):Set<R>{
		const result:Set<R>= new Set();
		
		this.forEach( ( item:T, key:T, set:Set<T>, ):void=> void result.add( callback( item, key, set, ), ), );
		
		return result;
	},
}, );
