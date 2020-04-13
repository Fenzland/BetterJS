import '../../utils/fix_module.ts';

declare global
{
	interface Array<T>
	{
		subArray<T>( start:number, length:number, ):T[];
		get<T>( index:number, ):T;
	}
}

/**
 * slice array with ( start, length, ) instead of ( start, end, )
 * 
 * @param start  (number)
 * @param length (number)
 * 
 * @return []<any>
 */
Reflect.defineProperty( Array.prototype, 'subArray', {
	value<T>( start:number, length:number=Infinity, ):T[]{
		const x:number= start;
		const y:number= start < 0 && length >= -start? Infinity: start - - length;
		
		return this.slice(
			Math.min( x, y, ),
			Math.max( x, y, ),
		);
	},
}, );

/**
 * get an item from an array, support negative index
 * 
 * @param index (number)
 * 
 * @return <any>
 */
Reflect.defineProperty( Array.prototype, 'get', {
	value<T>( index:number, ):T{
		return this[index < 0? this.length - - index: index];
	},
}, );
