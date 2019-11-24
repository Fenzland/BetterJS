import './isObject-and-isPureObject.js';

/**
 * check wheather two values same:
 *   real eaqual ( === ),
 *   both are NaNs,
 *   both are infinite,
 *   both are arrays or Set and with same items,
 *   both are pure objects or Map and with same keys and values,
 * 
 * special cases:
 *   const a= 0;
 *   const b= -0;
 *   a === b                                                    true
 *   Object.is( a, b, )                                         false
 *   Object.areSame( a, b, )                                    true
 *   
 *   const a= NaN;
 *   const b= NaN;
 *   a === b                                                    false
 *   Object.is( a, b, )                                         true
 *   Object.areSame( a, b, )                                    true
 *   
 *   const a= [ 0, 1, ];
 *   const b= [ 0, 1, ];
 *   a === b                                                    false
 *   Object.is( a, b, )                                         false
 *   Object.areSame( a, b, )                                    true
 *   
 *   const a= { a:1, b:0, };
 *   const b= { b:0, a:1, };
 *   a === b                                                    false
 *   Object.is( a, b, )                                         false
 *   Object.areSame( a, b, )                                    true
 *   
 *   const a= new Set( [ 0, 1, ], );
 *   const b= new Set( [ 1, 0, ], );
 *   a === b                                                    false
 *   Object.is( a, b, )                                         false
 *   Object.areSame( a, b, )                                    true
 *   
 *   const a= new Map( [ [ 'a', 1, ], [ 'b', 0, ], ], );
 *   const b= new Map( [ [ 'b', 0, ], [ 'a', 1, ], ], );
 *   a === b                                                    false
 *   Object.is( a, b, )                                         false
 *   Object.areSame( a, b, )                                    true
 * 
 * @param  x <mixed>
 * @param  y <mixed>
 * 
 * @return (boolean)
 */
Reflect.defineProperty( Object, 'areSame', {
	value: ( x, y, )=> (
		x === y
	||
		(x !== x && y !== y)
	||
		(
			Array.isArray( x, )
		&&
			Array.isArray( y, )
		&&
			x.length === y.length
		&&
			[ ...x, ].every( ( item, index, )=> Object.areSame( y[index], item, ), )
		)
	||
		(
			Object.isPureObject( x, )
		&&
			Object.isPureObject( y, )
		&&
			(( keysX, keysY, )=> (
				keysX.length === keysY.length
			&&
				new Set( [ ...keysX, ...keysY, ], ).size === keysX.length
			&&
				keysX.every( key=> Object.areSame( x[key], y[key], ), )
			))( Object.keys( x, ), Object.keys( y, ) )
		)
	||
		(
			x instanceof Set
		&&
			y instanceof Set
		&&
			x.size === y.size
		&&
			[ ...x, ].every( item=> y.has( item, ), )
		)
	||
		(
			x instanceof Map
		&&
			y instanceof Map
		&&
			x.size === y.size
		&&
			[ ...x, ].every( ( [ key, value, ], )=> y.has( key, ) && Object.areSame( y.get( key, ), value, ), )
		)
	),
}, );
