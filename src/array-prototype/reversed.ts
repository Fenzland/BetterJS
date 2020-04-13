import '../../utils/fix_module.ts';

declare global
{
	interface Array<T>
	{
		reversed<T>():T[];
	}
}

/**
 * works like reverse, but return a new array rather then modify this array.
 */
Reflect.defineProperty( Array.prototype, 'reversed', {
	value<T>():T[]{
		return [ ...this, ].reverse();
	},
}, );
