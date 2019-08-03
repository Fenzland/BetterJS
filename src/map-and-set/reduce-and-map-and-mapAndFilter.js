
Reflect.defineProperty( Map.prototype, 'reduce', {
	value( callback, initialValue=undefined, ){
		let result= initialValue;
		
		this.forEach( ( ...args )=> result= callback( initialValue, ...args, ), );
		
		return result;
	},
}, );

Reflect.defineProperty( Set.prototype, 'reduce', {
	value( callback, initialValue=undefined, ){
		let result= initialValue;
		
		this.forEach( ( ...args )=> result= callback( initialValue, ...args, ), );
		
		return result;
	},
}, );

Reflect.defineProperty( Map.prototype, 'map', {
	value( callback, ){
		const result= [];
		
		this.forEach( ( ...args )=> result.push( callback( ...args, ), ), );
		
		return result;
	},
}, );

Reflect.defineProperty( Set.prototype, 'map', {
	value( callback, ){
		const result= [];
		
		this.forEach( ( ...args )=> result.push( callback( ...args, ), ), );
		
		return result;
	},
}, );

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
