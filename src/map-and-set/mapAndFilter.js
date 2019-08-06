import './reduce.js';

Reflect.defineProperty( Map.prototype, 'mapAndFilter', {
	value( mapper, filter=(item=> item !== undefined), ){
		return this.reduce( ( result, item, ...rest )=> {
			const mapped= mapper( item, ...rest, );
			
			if( filter( mapped, ...rest, ) )
				result.push( mapped, );
			
			return result;
		}, [], );
	},
}, );

Reflect.defineProperty( Set.prototype, 'mapAndFilter', {
	value( mapper, filter=(item=> item !== undefined), ){
		return this.reduce( ( result, item, ...rest )=> {
			const mapped= mapper( item, ...rest, );
			
			if( filter( mapped, ...rest, ) )
				result.push( mapped, );
			
			return result;
		}, [], );
	},
}, );
