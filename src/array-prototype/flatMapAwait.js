
Reflect.defineProperty( Array.prototype, 'flatMapAwait', {
	async value( callback, context=undefined, ){
		let index= 0;
		
		const result= [];
		
		for( const item of this )
		{
			const pieces= await callback.call( context, item, index++, this, );
			
			if( Array.isArray( pieces, ) )
				result.push( ...pieces, )
			else
				result.push( pieces, )
		}
		
		return result;
	},
}, );
