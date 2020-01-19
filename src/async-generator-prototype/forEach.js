import '../global-constructors.js';

Reflect.defineProperty( AsyncGenerator.prototype, 'forEach', {
	value: async function forEach( callback, context=undefined, ){
		for await( const item of this )
			callback.call( context, item, );
	},
}, );
