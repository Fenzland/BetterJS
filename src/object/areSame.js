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
 *   a === b                                    true
 *   Object.is( a, b, )                         false
 *   Object.areSame( a, b, )                    true
 *   
 *   const a= NaN;
 *   const b= NaN;
 *   a === b                                    false
 *   Object.is( a, b, )                         true
 *   Object.areSame( a, b, )                    true
 *   
 *   const a= Infinity;
 *   const b= -Infinity;
 *   a === b                                    false
 *   Object.is( a, b, )                         false
 *   Object.areSame( a, b, )                    true
 *   
 *   const a= [ 0, 1, ];
 *   const b= [ 0, 1, ];
 *   a === b                                    false
 *   Object.is( a, b, )                         false
 *   Object.areSame( a, b, )                    true
 *   
 *   const a= { a:1, };
 *   const b= { a:1, };
 *   a === b                                    false
 *   Object.is( a, b, )                         false
 *   Object.areSame( a, b, )                    true
 *   
 *   const a= new Set( [ 0, 1, ], );
 *   const b= new Set( [ 0, 1, ], );
 *   a === b                                    false
 *   Object.is( a, b, )                         false
 *   Object.areSame( a, b, )                    true
 *   
 *   const a= new Map( [ [ 'a', 1, ], ], );
 *   const b= new Map( [ [ 'a', 1, ], ], );
 *   a === b                                    false
 *   Object.is( a, b, )                         false
 *   Object.areSame( a, b, )                    true
 * 
 * @param  valueA <mixed>
 * @param  valueB <mixed>
 * 
 * @return (boolean)
 */
Reflect.defineProperty( Object, 'areSame', {
	value: ( valueA, valueB, )=> (
		valueA === valueB
	||
		(valueA !== valueA && valueB !== valueB)
	||
		(valueA === Infinity && valueB === -Infinity)
	||
		(valueA === -Infinity && valueB === Infinity)
	||
		(
			Array.isArray( valueA, )
		&&
			Array.isArray( valueB, )
		&&
			valueA.length === valueB.length
		&&
			valueA.every( ( item, index, )=> Object.areSame( valueB[index], item, ), )
		)
	||
		(
			Object.isPureObject( valueA, )
		&&
			Object.isPureObject( valueB, )
		&&
			Object.areSame( Object.entries( valueA, ), Object.entries( valueB, ), )
		)
	||
		(
			valueA instanceof Set
		&&
			valueB instanceof Set
		&&
			valueA.size === valueB.size
		&&
			[ ...valueA, ].every( item=> valueB.has( item, ), )
		)
	||
		(
			valueA instanceof Map
		&&
			valueB instanceof Map
		&&
			valueA.size === valueB.size
		&&
			[ ...valueA, ].every( ( [ key, value, ], )=> valueB.has( key, ) && Object.areSame( valueB.get( key, ), value, ), )
		)
	),
}, );
