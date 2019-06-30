/**
 * If initial value not given, use undefined, instead of erratically use the first item.
 */
{
	const origin= Array.prototype.reduce;
	
	Object.defineProperty( Array.prototype, 'reduce', {
		value( callback, initialValue=undefined, ){
			return origin.call( this, callback, initialValue, );
		},
	}, );
}
