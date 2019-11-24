
Reflect.defineProperty( Array.prototype, 'mapAwait', {
	async value( callback, context=undefined, ){
		let index= 0;
		
		const result= [];
		
		for( const item of this )
			result.push( await callback.call( context, item, index++, this, ), );
		
		return result;
	},
}, );
