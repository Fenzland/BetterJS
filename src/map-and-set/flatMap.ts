import '../../utils/fix_module.ts';

declare global
{
	interface Map<K,V>
	{
		flatMap<K,V,R>( callback:(( value?:V, key?:K, self?:Map<K,V>, )=>(R|Map<K,R>)), ):Map<K,R>;
	}
	
	interface Set<T>
	{
		flatMap<T,R>( callback:(( value?:T, key?:T, self?:Set<T>, )=>(R|Set<R>)), ):Set<R>;
	}
}

Reflect.defineProperty( Map.prototype, 'flatMap', {
	value<K,V,R>( callback:(( value?:V, key?:K, self?:Map<K,V>, )=>(R|Map<K,R>)), ):Map<K,R>{
		const result:Map<K,R>= new Map();
		
		this.forEach( ( item:V, key:K, map:Map<K,V>, ):void=> {
			const pieces:(R|Map<K,R>)= callback( item, key, map, );
			
			if( pieces instanceof Map )
				pieces.forEach( ( item:R, key:K, ):void=> void result.set( key, item, ), );
			else
				result.set( key, pieces, );
		}, );
		
		return result;
	},
}, );

Reflect.defineProperty( Set.prototype, 'flatMap', {
	value<T,R>( callback:(( value?:T, key?:T, self?:Set<T>, )=>(R|Set<R>)), ):Set<R>{
		const result:Set<R>= new Set();
		
		this.forEach( ( item:T, key:T, set:Set<T>, ):void=> {
			const pieces:(R|Set<R>)= callback( item, key, set, );
			
			if( pieces instanceof Set )
				pieces.forEach( ( item:R, ):void=> void result.add( item, ), );
			else
				result.add( pieces, );
		}, );
		
		return result;
	},
}, );
