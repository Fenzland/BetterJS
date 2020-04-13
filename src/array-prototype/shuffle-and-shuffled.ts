import '../../utils/fix_module.ts';

declare global
{
	interface Array<T>
	{
		shuffle<T>():T[];
		shuffled<T>():T[];
	}
}

/**
 * shuffle items to a random order.
 */
Reflect.defineProperty( Array.prototype, 'shuffle', {
	value<T>():T[]{
		const length:number= this.length;
		
		for( let k:number= 0; k < length; ++k )
		{
			const j:number= ~~(length - Math.random()*(length - k));
			
			if( j !== k )
				this.splice( k, 0, ...this.splice( j, 1, ), );
		}
		
		return this;
	},
}, );

/**
 * shuffle items to a random order, return a new array rather then modify this array.
 */
Reflect.defineProperty( Array.prototype, 'shuffled', {
	value<T>():T[]{
		return [ ...this, ].shuffle();
	},
}, );
