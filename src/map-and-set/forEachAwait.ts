import '../../utils/fix_module.ts';

declare global
{
	interface Map<K,V>
	{
		forEachAwait<K,V,C>( callback:(( this:C, value?:V, key?:K, self?:Map<K,V>, )=>void), context?:C, ):Promise<void>;
	}
	
	interface Set<T>
	{
		forEachAwait<T,C>( callback:(( this:C, value?:T, key?:T, self?:Set<T>, )=>void), context?:C, ):Promise<void>;
	}
}

Reflect.defineProperty( Map.prototype, 'forEachAwait', {
	async value<K,V,C>( callback:(( this:C, value?:V, key?:K, self?:Map<K,V>, )=>void), context:C=undefined, ):Promise<void>{
		for( const [ key, value, ] of this )
			await callback.call( context, value, key, this, );
	},
}, );

Reflect.defineProperty( Set.prototype, 'forEachAwait', {
	async value<T,C>( callback:(( this:C, value?:T, key?:T, self?:Set<T>, )=>void), context:C=undefined, ):Promise<void>{
		for( const value of this )
			await callback.call( context, value, value, this, );
	},
}, );
