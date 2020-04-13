import '../../utils/fix_module.ts';

declare global
{
	interface Array<T>
	{
		sorted<T>():T[];
	}
}

/**
 * works like sort, but return a new array rather then modify this array.
 */
Reflect.defineProperty( Array.prototype, 'sorted', {
	value<T>():T[]{
		return [ ...this, ].sort();
	},
}, );
