
/**
 * check whether a value is a class
 * 
 * @param  value <mixed>
 * 
 * @return (boolean)
 */
Reflect.defineProperty( Function, 'isFunction', {
	value( value, ){
		if( typeof value !== 'function' )
			return false;
		
		const code= value.toString();
		
		return code.startsWith( 'class', ) || code.startsWith( 'async class', );
	},
}, );

/**
 * check whether a value is a function (but not a class)
 * 
 * @param  value <mixed>
 * 
 * @return (boolean)
 */
Reflect.defineProperty( Function, 'isClass', {
	value( value, ){
		if( typeof value !== 'function' )
			return false;
		
		const code= value.toString();
		
		return !(code.startsWith( 'class', ) || code.startsWith( 'async class', ));
	},
}, );

/**
 * check whether a value is asynchronous
 * 
 * @param  value <mixed>
 * 
 * @return (boolean)
 */
Reflect.defineProperty( Function, 'isAsync', {
	value( value, ){
		if( typeof value !== 'function' )
			return false;
		
		const code= value.toString();
		
		return code.startsWith( 'async', );
	},
}, );
