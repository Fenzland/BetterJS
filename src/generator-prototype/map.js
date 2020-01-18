import '../global-constructors.js';

Reflect.defineProperty( Generator.prototype, 'map', {
	value: function map( callback, context=undefined, ){
		const result= [];
		
		for( const item of this )
			result.push( callback.call( context, item, ), );
		
		return result;
	},
}, );
