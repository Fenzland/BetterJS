import '../../utils/fix_module.ts';

declare global
{
	interface Array<T>
	{
		mapAndFilter<T,R>( mapper:(( item?:T, index?:number, self?:T[], )=>R), filter:(( item?:T, index?:number, self?:T[], )=>boolean), ):R[];
	}
}

Reflect.defineProperty( Array.prototype, 'mapAndFilter', {
	value<T,R>( mapper:(( item?:T, index?:number, self?:T[], )=>R), filter:(( item?:R, index?:number, self?:T[], )=>boolean)=(item=> item !== undefined), ):R[]{
		return this.reduce( ( result:R[], item:T, index:number, self:T[], ):R[]=> {
			const mapped:R= mapper( item, index, self, );
			
			if( filter( mapped, index, self, ) )
				result.push( mapped, );
			
			return result;
		}, [], );
	},
}, );
