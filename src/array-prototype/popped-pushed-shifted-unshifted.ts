import '../../utils/fix_module.ts';

declare global
{
	interface Array<T>
	{
		popped<T>():T[];
		pushed<T>( ...items:T[] ):T[];
		shifted<T>():T[];
		unshifted<T>( ...items:T[] ):T[];
	}
}

/**
 * works like popped, but return a new array rather then modify this array.
 */
Reflect.defineProperty( Array.prototype, 'popped', {
	value<T>():T[]{
		const newbee= [ ...this, ];
		
		newbee.pop();
		
		return newbee;
	},
}, );

/**
 * works like pushed, but return a new array rather then modify this array.
 */
Reflect.defineProperty( Array.prototype, 'pushed', {
	value<T>( ...items ):T[]{
		return [ ...this, ...items, ];
	},
}, );

/**
 * works like shifted, but return a new array rather then modify this array.
 */
Reflect.defineProperty( Array.prototype, 'shifted', {
	value<T>():T[]{
		const newbee= [ ...this, ];
		
		newbee.shift();
		
		return newbee;
	},
}, );

/**
 * works like unshifted, but return a new array rather then modify this array.
 */
Reflect.defineProperty( Array.prototype, 'unshifted', {
	value<T>( ...items ):T[]{
		return [ ...items, ...this, ];
	},
}, );
