
Reflect.defineProperty( Map.prototype, 'forEachAwait', {
	async value( callback, context=undefined, ){
		for( const [ key, value, ] of this )
			await callback.call( context, value, key, this, );
	},
}, );

Reflect.defineProperty( Set.prototype, 'forEachAwait', {
	async value( callback, context=undefined, ){
		for( const value of this )
			await callback.call( context, value, value, this, );
	},
}, );
