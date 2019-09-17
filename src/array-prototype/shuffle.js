
/**
 * shuffle items to a random order.
 */
Reflect.defineProperty( Array.prototype, 'shuffle', {
	value(){
		const length= this.length;
		
		for( let k= 0; k < length; ++k )
		{
			const j= ~~(length - Math.random()*(length - k));
			
			if( j !== k )
				this.splice( k, 0, ...this.splice( j, 1, ), );
		}
		
		return this;
	},
}, );
