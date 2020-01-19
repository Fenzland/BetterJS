import '../global-constructors.js';

Reflect.defineProperty( AsyncGenerator.prototype, 'forEachAwait', {
	value: async function forEachAwait( callback, context=undefined, ){
		for await( const item of this )
			await callback.call( context, item, );
	},
}, );
