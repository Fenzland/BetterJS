import './reduce.ts';

declare global
{
	interface Map<K,V>
	{
		mapAndFilter<K,V,R>( mapper:(( value?:R, item?:V, index?:number, self?:V[] )=>R), initialValue:R, ):R;
	}
	
	interface Set<T>
	{
		mapAndFilter<T,R>( mapper:(( value?:R, item?:T, index?:number, self?:T[] )=>R), initialValue:R, ):R;
	}
}

Reflect.defineProperty( Map.prototype, 'mapAndFilter', {
	value<K,V,R>( mapper:(( item?:V, index?:number, self?:V[] )=>R), filter:(( value?:R, index?:number, self?:V[] )=>boolean)=(item=> item !== undefined), ):R[]{
		return this.reduce( ( result:R[], item:V, index:number, self:V[] ):R[]=> {
			const mapped:R= mapper( item, index, self, );
			
			if( filter( mapped, index, self, ) )
				result.push( mapped, );
			
			return result;
		}, [], );
	},
}, );

Reflect.defineProperty( Set.prototype, 'mapAndFilter', {
	value<T,R>( mapper:(( item?:T, index?:number, self?:T[] )=>R), filter:(( value?:R, index?:number, self?:T[] )=>boolean)=(item=> item !== undefined), ):R[]{
		return this.reduce( ( result:R[], item:T, index:number, self:T[] ):R[]=> {
			const mapped:R= mapper( item, index, self, );
			
			if( filter( mapped, index, self, ) )
				result.push( mapped, );
			
			return result;
		}, [], );
	},
}, );
