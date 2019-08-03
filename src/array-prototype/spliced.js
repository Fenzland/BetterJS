
/**
 * works like splice, but return a new array rather then modify this array.
 */
Reflect.defineProperty( Array.prototype, 'spliced', {
	value( start, deleteCount=Infinity, ...items ){
		const newbee= [ ...this, ];
		
		newbee.splice( start, deleteCount, ...items, );
		
		return newbee;
	},
}, );
