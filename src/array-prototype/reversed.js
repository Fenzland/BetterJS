
/**
 * works like reverse, but return a new array rather then modify this array.
 */
Reflect.defineProperty( Array.prototype, 'reversed', {
	value(){
		return [ ...this, ].reverse();
	},
}, );
