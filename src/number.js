
/**
 * Check wheather a number is infinity
 * 
 * @param number (number)
 *               <mixed>
 * 
 * @return (bool)
 */
Reflect.defineProperty( Number, 'isInfinite', {
	value: number=> !Number.isFinite( number, ) && !Number.isNaN( number, ),
}, );
