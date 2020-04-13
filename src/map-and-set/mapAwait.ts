import '../../utils/fix_module.ts';

declare global
{
	interface Map<K,V>
	{
		mapAwait<K,V,R,C>( callback:(( this:C, value?:V, key?:K, self?:Map<K,V>, )=>R), context?:C, ):Promise<Map<K,R>>;
	}
	
	interface Set<T>
	{
		mapAwait<T,R,C>( callback:(( this:C, value?:T, key?:T, self?:Set<T>, )=>R), context?:C, ):Promise<Set<R>>;
	}
}

Reflect.defineProperty( Map.prototype, 'mapAwait', {
	async value<K,V,R,C>( callback:(( this:C, value?:V, key?:K, self?:Map<K,V>, )=>R), context:C=undefined, ):Promise<Map<K,R>>{
		const result:Map<K,R>= new Map();
		
		for( const [ key, value, ] of this )
			result.set( key, await callback.call( context, value, key, this, ), );
		
		return result;
	},
}, );

Reflect.defineProperty( Set.prototype, 'mapAwait', {
	async value<T,R,C>( callback:(( this:C, value?:T, key?:T, self?:Set<T>, )=>R), context:C=undefined, ):Promise<Set<R>>{
		const result:Set<R>= new Set();
		
		for( const value of this )
			result.add( await callback.call( context, value, value, this, ), );
		
		return result;
	},
}, );
