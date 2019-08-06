
Reflect.defineProperty( Map.prototype, 'flatMap', {
	value( callback, ){
		const result= [];
		
		this.forEach( ( ...args )=> {
			const pices= callback( ...args, );
			
			if( Array.isArray( pices, ) )
				result.push( ...pices, );
			else
				result.push( pices, );
		}, );
		
		return result;
	},
}, );

Reflect.defineProperty( Set.prototype, 'flatMap', {
	value( callback, ){
		const result= [];
		
		this.forEach( ( ...args )=> {
			const pices= callback( ...args, );
			
			if( Array.isArray( pices, ) )
				result.push( ...pices, );
			else
				result.push( pices, );
		}, );
		
		return result;
	},
}, );
