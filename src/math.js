
/**
 * The correct modulo. Works like % in Python rather than C.
 * 
 * @param dividend (number)
 * @param divisor  (number)
 * 
 * @return (number)
 */
Reflect.defineProperty( Math, 'mod', {
	value: ( dividend, divisor, )=> (dividend%divisor - - divisor)%divisor,
}, );

Reflect.defineProperty( Math, 'π', { value:Math.PI, }, );
Reflect.defineProperty( Math, 'Π', { value:Math.PI*2, }, );
Reflect.defineProperty( Math, 'e', { value:Math.E, }, );
