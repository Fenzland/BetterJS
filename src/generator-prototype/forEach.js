import '../global-constructors.js';

Reflect.defineProperty( Generator.prototype, 'forEach', {
	value: function forEach( callback, context=undefined, ){
		for( const item of this )
			callback.call( context, item, );
	},
}, );
