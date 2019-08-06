
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
