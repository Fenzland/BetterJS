
Reflect.defineProperty( Map.prototype, 'map', {
	value( callback, ){
		const result= new Map();
		
		this.forEach( ( item, key, map, )=> result.set( key, callback( item, key, map, ), ), );
		
		return result;
	},
}, );

Reflect.defineProperty( Set.prototype, 'map', {
	value( callback, ){
		const result= new Set();
		
		this.forEach( ( item, key, set, )=> result.add( callback( item, key, set, ), ), );
		
		return result;
	},
}, );
