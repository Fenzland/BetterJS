
Reflect.defineProperty( Map.prototype, 'flatMap', {
	value( callback, ){
		const result= new Map();
		
		this.forEach( ( item, key, map, )=> {
			const pices= callback( item, key, map, );
			
			if( pices instanceof Map )
				pices.forEach( ( item, key, )=> result.set( key, item, ), );
			else
				result.set( key, pices, );
		}, );
		
		return result;
	},
}, );

Reflect.defineProperty( Set.prototype, 'flatMap', {
	value( callback, ){
		const result= new Set();
		
		this.forEach( ( item, key, set, )=> {
			const pices= callback( item, key, set, );
			
			if( pices instanceof Set )
				pices.forEach( item=> result.add( item, ), );
			else
				result.add( pices, );
		}, );
		
		return result;
	},
}, );
