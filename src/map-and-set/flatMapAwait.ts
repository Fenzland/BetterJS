import '../../utils/fix_module.ts';

declare global
{
	interface Map<K,V>
	{
		flatMapAwait<K,V,R,C>( callback:(( this:C, value?:V, key?:K, self?:Map<K,V>, )=>(R|Map<K,R>)), context?:C, ):Promise<Map<K,R>>;
	}
	
	interface Set<T>
	{
		flatMapAwait<T,R,C>( callback:(( this:C, value?:T, key?:T, self?:Set<T>, )=>(R|Set<R>)), context?:C, ):Promise<Set<R>>;
	}
}

Reflect.defineProperty( Map.prototype, 'flatMapAwait', {
	async value<K,V,R,C>( callback:(( this:C, value?:V, key?:K, self?:Map<K,V>, )=>(R|Map<K,R>)), context:C=undefined, ):Promise<Map<K,R>>{
		const result:Map<K,R>= new Map();
		
		for( const [ key, value, ] of this )
		{
			const pieces:(R|Map<K,R>)= await callback.call( context, value, key, this, );
			
			if( pieces instanceof Map )
				pieces.forEach( ( item:R, key:K, ):void=> void result.set( key, item, ), )
			else
				result.set( key, pieces, );
		}
		
		return result;
	},
}, );

Reflect.defineProperty( Set.prototype, 'flatMapAwait', {
	async value<T,R,C>( callback:(( this:C, value?:T, key?:T, self?:Set<T>, )=>(R|Set<R>)), context:C=undefined, ):Promise<Set<R>>{
		const result:Set<R>= new Set();
		
		for( const value of this )
		{
			const pieces:(R|Set<R>)= await callback.call( context, value, value, this, );
			
			if( pieces instanceof Set )
				pieces.forEach( ( item:R, ):void=> void result.add( item, ), )
			else
				result.add( pieces, );
		}
		
		return result;
	},
}, );
