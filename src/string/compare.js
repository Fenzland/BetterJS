
/**
 * Compare two strings, returns -1, 0 or 1.
 */
Reflect.defineProperty( String, 'compare', {
	value( stringX, stringY, ){
		const x= String( stringX, );
		const y= String( stringY, );
		const length= Math.min( x.length, y.length, );
		const unify= value=> value > 0? 1: value < 0? -1: 0;
		
		for( let index= 0; index < length; ++index )
		{
			const diff= x.charCodeAt( index, ) - y.charCodeAt( index, );
			
			if( diff )
				return unify( diff, );
		}
		
		return unify( x.length - y.length, );
	},
}, );