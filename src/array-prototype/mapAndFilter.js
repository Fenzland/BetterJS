
Reflect.defineProperty( Array.prototype, 'mapAndFilter', {
	value( mapper, filter=(item=> item !== undefined), ){
		return this.reduce( ( result, item, )=> {
			const mapped= mapper( item, );
			
			if( filter( mapped, ) )
				result.push( mapped, );
			
			return result;
		}, [], );
	},
}, );
