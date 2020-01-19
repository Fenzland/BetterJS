
/**
 * static string concat function
 */
Reflect.defineProperty( String, 'concat', {
	value: ( ...items )=> ''.concat( ...items, ),
}, );
