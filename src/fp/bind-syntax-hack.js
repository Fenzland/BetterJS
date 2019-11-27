
Reflect.defineProperty( Object.prototype, '::', {
	value( method ){
		if( typeof method === 'function' )
			return method.bind( this, );
		else
		if( this[method] && typeof this[method] === 'function' )
			return this[method].bind( this, );
		else
			throw new TypeError( `${method} is not a valid function or method name of ${this}`, );
	},
}, );
