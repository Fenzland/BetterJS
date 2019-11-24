import './reduce.js';

Reflect.defineProperty( Map.prototype, 'mapAndFilter', {
	value( mapper, filter=(item=> item !== undefined), ){
		return this.reduce( ( result, item, key, self, )=> {
			const mapped= mapper( item, key, self, );
			
			if( filter( mapped, key, self, ) )
				result.set( key, mapped, );
			
			return result;
		}, new Map(), );
	},
}, );

Reflect.defineProperty( Set.prototype, 'mapAndFilter', {
	value( mapper, filter=(item=> item !== undefined), ){
		return this.reduce( ( result, item, key, self, )=> {
			const mapped= mapper( item, key, self, );
			
			if( filter( mapped, key, self, ) )
				result.add( mapped, );
			
			return result;
		}, new Set(), );
	},
}, );
