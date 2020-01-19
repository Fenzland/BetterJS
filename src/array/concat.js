
/**
 * static string concat function
 */
Reflect.defineProperty( Array, 'concat', {
	value: ( ...items )=> [].concat( ...items, ),
}, );
