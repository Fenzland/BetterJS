import '../../utils/fix_module.ts';

declare global
{
	interface Array<T>
	{
		spliced<T>( start:number, deleteCount?:number, ...items:T[] ):T[];
	}
}

/**
 * works like splice, but return a new array rather then modify this array.
 */
Reflect.defineProperty( Array.prototype, 'spliced', {
	value<T>( start:number, deleteCount:number=Infinity, ...items:T[] ):T[]{
		const newbee:T[]= [ ...this, ];
		
		newbee.splice( start, deleteCount, ...items, );
		
		return newbee;
	},
}, );
