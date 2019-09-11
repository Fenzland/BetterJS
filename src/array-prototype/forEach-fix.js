
/**
 * fix {Array}.forEach not iterate new pushed items.
 */
Reflect.defineProperty( Array.prototype, 'forEach', {
	value( callback, context=undefined, ){
		let index= 0;
		
		for( const item of this )
			callback.call( context, item, index++, this, );
	},
}, );
