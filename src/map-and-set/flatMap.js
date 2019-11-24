
Reflect.defineProperty( Map.prototype, 'flatMap', {
	value( callback, ){
		const result= new Map();
		
		this.forEach( ( item, key, map, )=> {
			const pieces= callback( item, key, map, );
			
			if( pieces instanceof Map )
				pieces.forEach( ( item, key, )=> result.set( key, item, ), );
			else
				result.set( key, pieces, );
		}, );
		
		return result;
	},
}, );

Reflect.defineProperty( Set.prototype, 'flatMap', {
	value( callback, ){
		const result= new Set();
		
		this.forEach( ( item, key, set, )=> {
			const pieces= callback( item, key, set, );
			
			if( pieces instanceof Set )
				pieces.forEach( item=> result.add( item, ), );
			else
				result.add( pieces, );
		}, );
		
		return result;
	},
}, );
