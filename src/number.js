
Reflect.defineProperty( Number, 'ε', { value:Number.EPSILON, }, );

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

/**
 * Check two number are equal
 * 
 *  if one input is not a number, always return false
 *  difference less then Number.EPSILON
 *  ( 0, -0, ) => true
 *  ( Infinity, -Infinity, ) => true
 *  ( NaN, NaN, ) => false
 * 
 * @param x (number)
 * @param y (number)
 * 
 * @return (boolean)
 */
Reflect.defineProperty( Number, 'equal', {
	value: ( x, y, )=> (
		(typeof x === 'number' && typeof x === 'number')
	&&
		(
			x === y
		||
			(x === Infinity && y === -Infinity)
		||
			(x === -Infinity && y === Infinity)
		||
			(
				x - y < Number.ε
			&&
				y - x < Number.ε
			)
		)
	),
}, )

/**
 * return the first valid number from given values. return NaN if there is no valid number
 * 
 * @param numbers []<(number)|<mixed>>
 * 
 * @return (number)
 */
Reflect.defineProperty( Number, 'or', {
	value: ( ...numbers )=> {
		for( const number of numbers )
			if(
				number !== null
			&&
				number !== ''
			&&
				!Number.isNaN( number, )
			)
				return Number (number);
		
		return NaN;
	},
}, );
