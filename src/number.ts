import '../utils/fix_module.ts';

declare global
{
	interface NumberConstructor
	{
		isInfinite( number:number, ):boolean;
	}
}

/**
 * Check wheather a number is infinity
 * 
 * @param number (number)
 *               <mixed>
 * 
 * @return (bool)
 */
Number.isInfinite= ( number:number, ):boolean=> !Number.isFinite( number, ) && !Number.isNaN( number, );
