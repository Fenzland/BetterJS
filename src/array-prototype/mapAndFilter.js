
Reflect.defineProperty( Array.prototype, 'mapAndFilter', {
	value( mapper, filter=(item=> item !== undefined), ){
		return this.reduce( ( result, item, ...rest )=> {
			const mapped= mapper( item, ...rest, );
			
			if( filter( mapped, ...rest, ) )
				result.push( mapped, );
			
			return result;
		}, [], );
	},
}, );
