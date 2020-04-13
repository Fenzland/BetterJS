import '../../utils/fix_module.ts';

declare global
{
	interface Map<K,V>
	{
		reduce<K,V,R>( callback:(( value?:R, item?:V, index?:number, self?:V[] )=>R), initialValue:R, ):R;
	}
	
	interface Set<T>
	{
		reduce<T,R>( callback:(( value?:R, item?:T, index?:number, self?:T[] )=>R), initialValue:R, ):R;
	}
}

Reflect.defineProperty( Map.prototype, 'reduce', {
	value<K,V,R>( callback:(( value?:R, item?:V, index?:number, self?:V[] )=>R), initialValue:R=undefined, ):R{
		let result= initialValue;
		
		this.forEach( ( ...args )=> result= callback( initialValue, ...args, ), );
		
		return result;
	},
}, );

Reflect.defineProperty( Set.prototype, 'reduce', {
	value<T,R>( callback:(( value?:R, item?:T, index?:number, self?:T[] )=>R), initialValue:R=undefined, ):R{
		let result= initialValue;
		
		this.forEach( ( ...args )=> result= callback( initialValue, ...args, ), );
		
		return result;
	},
}, );
