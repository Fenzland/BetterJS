
/**
 * works like sort, but return a new array rather then modify this array.
 */
Reflect.defineProperty( Array.prototype, 'sorted', {
	value( comparer=undefined, ){
		return [ ...this, ].sort( comparer, );
	},
}, );
