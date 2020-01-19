import '../global-constructors.js';

Reflect.defineProperty( AsyncGenerator.prototype, 'map', {
	value: async function map( callback, context=undefined, ){
		const result= [];
		
		for await( const item of this )
			result.push( callback.call( context, item, ), );
		
		return Promise.all( result, );
	},
}, );
