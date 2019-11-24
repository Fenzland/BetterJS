
Reflect.defineProperty( Array.prototype, 'forEachAwait', {
	async value( callback, context=undefined, ){
		let index= 0;
		
		for( const item of this )
			await callback.call( context, item, index++, this, );
	},
}, );
