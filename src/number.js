
/**
 * Check wheather a number is infinity
 * 
 * @param number (number)
 *               <mixed>
 * 
 * @return (bool)
 */
Number.isInfinite= number=> !Number.isFinite( number, ) && !Number.isNaN( number, );
