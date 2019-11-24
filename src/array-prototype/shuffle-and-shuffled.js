
/**
 * shuffle items to a random order.
 */
Reflect.defineProperty( Array.prototype, 'shuffle', {
	value(){
		const length= this.length;
		
		for( let k= 0; k < length; ++k )
		{
			const j= (length - Math.random()*(length - k))<<0;
			
			if( j !== k )
				[ this[j], this[k], ]= [ this[k], this[j], ];
		}
		
		return this;
	},
}, );

/**
 * shuffle items to a random order, return a new array rather then modify this array.
 */
Reflect.defineProperty( Array.prototype, 'shuffled', {
	value(){
		return [ ...this, ].shuffle();
	},
}, );
