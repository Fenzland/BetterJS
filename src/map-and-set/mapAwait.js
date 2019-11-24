
Reflect.defineProperty( Map.prototype, 'mapAwait', {
	async value( callback, context=undefined, ){
		const result= new Map();
		
		for( const [ key, value, ] of this )
			result.set( key, await callback.call( context, value, key, this, ), );
		
		return result;
	},
}, );

Reflect.defineProperty( Set.prototype, 'mapAwait', {
	async value( callback, context=undefined, ){
		const result= new Set();
		
		for( const value of this )
			result.add( await callback.call( context, value, value, this, ), );
		
		return result;
	},
}, );
