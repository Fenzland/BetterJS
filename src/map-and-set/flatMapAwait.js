
Reflect.defineProperty( Map.prototype, 'flatMapAwait', {
	async value( callback, context=undefined, ){
		const result= new Map();
		
		for( const [ key, value, ] of this )
		{
			const pieces= await callback.call( context, value, key, this, );
			
			if( pieces instanceof Map )
				pieces.forEach( ( item, key, )=> result.set( key, item, ), )
			else
				result.set( key, pieces, );
		}
		
		return result;
	},
}, );

Reflect.defineProperty( Set.prototype, 'flatMapAwait', {
	async value( callback, context=undefined, ){
		const result= new Set();
		
		for( const value of this )
		{
			const pieces= await callback.call( context, value, value, this, );
			
			if( pieces instanceof Set )
				pieces.forEach( item=> result.add( item, ), )
			else
				result.add( pieces, );
		}
		
		return result;
	},
}, );
