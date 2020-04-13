import '../utils/fix_module.ts';

declare global
{
	interface Math
	{
		mod( dividend:number, divisor:number, ):number;
		
		π:number;
		Π:number;
		e:number;
	}
}

/**
 * The correct modulo. Works like % in Python rather than C.
 * 
 * @param dividend (number)
 * @param divisor  (number)
 * 
 * @return (number)
 */
Math.mod= ( dividend:number, divisor:number, ):number=> (dividend%divisor - - divisor)%divisor;

Math.π= Math.PI;
Math.Π= Math.PI*2;
Math.e= Math.E;
