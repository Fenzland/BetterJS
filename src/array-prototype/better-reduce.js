/**
 * If initial value not given, use undefined, instead of erratically use the first item.
 */
{
	const origin= Array.prototype.reduce;
	
	Reflect.defineProperty( Array.prototype, 'reduce', {
		value( callback, initialValue=undefined, ){
			return origin.call( this, callback, initialValue, );
		},
	}, );
}
