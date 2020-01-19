import '../global-constructors.js';

Reflect.defineProperty( AsyncGenerator.prototype, 'mapAwait', {
	value: async function mapAwait( callback, context=undefined, ){
		const result= [];
		
		for await( const item of this )
			result.push( await callback.call( context, item, ), );
		
		return result;
	},
}, );
