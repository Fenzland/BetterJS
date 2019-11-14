
/**
 * slice array with ( start, length, ) instead of ( start, end, )
 * 
 * @param start  (number)
 * @param length (number)
 * 
 * @return []<any>
 */
Reflect.defineProperty( Array.prototype, 'subArray', {
	value( start, length=Infinity, ){
		const x= start;
		const y= start < 0 && length >= -start? Infinity: start - - length;
		
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
	value( index, ){
		return this.subArray( index, 1, )[0];
	},
}, );
